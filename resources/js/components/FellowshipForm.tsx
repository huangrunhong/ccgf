import { Link, useForm } from "@inertiajs/react";

import { Fellowship, SelectOption, User } from "@/types";
import Form from "@/components/form/Form";
import FileInput from "@/components/form/FileInput";
import Informative from "@/components/base/Informative";
import Input from "@/components/form/Input";
import RichTextEditor from "@/components/form/RichTextEditor";
import Select from "@/components/form/Select";
import useMessage from "@/hooks/useMessage";

const hours = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
].map((hour): SelectOption => ({ label: hour, value: hour }));

const getOptions = ([value, label]: [
  string,
  string
]): SelectOption<number> => ({ value: parseInt(value), label });

interface FellowshipFormProps {
  fellowship?: Fellowship;
}

const FellowshipForm = ({ fellowship }: FellowshipFormProps) => {
  const form = useForm({
    name: fellowship?.name ?? "",
    status: fellowship?.status ?? "draft",
    hour: fellowship?.hour ?? "15:00",
    contact: fellowship?.contact ?? "",
    day: fellowship?.day ?? 7,
    frequency: fellowship?.frequency ?? 1,
    cover: undefined as File | undefined,
    remove_cover: false,
    zoom: fellowship?.zoom ?? undefined,
    location: fellowship?.location ?? "",
    description: fellowship?.description ?? "",
  });
  const message = useMessage();

  const submit = () => {
    const url = fellowship
      ? route("fellowships.update", { id: fellowship.id })
      : route("fellowships.store");

    form.post(url);
  };

  const saveDraft = () => {
    form.data.status = "draft";
    submit();
  };

  const publish = () => {
    form.data.status = "published";
    submit();
  };

  const header = fellowship
    ? message.admin.fellowships.edit
    : message.admin.fellowships.post;

  const days = Object.entries(message.common.day).map(getOptions);
  const frequencies = Object.entries(message.common.frequency).map(getOptions);

  return (
    <Form form={form} onSubmit={publish}>
      <Informative className="mb-1" header={header} />
      <Input required label={message.admin.fellowships.name} name="name" />
      <div className="flex-column gap">
        <span>{message.admin.fellowships.schedule}</span>
        <div className="flex gap">
          <Select name="frequency" options={frequencies} />
          <Select name="day" options={days} />
          <Select name="hour" options={hours} />
        </div>
      </div>
      <Input label={message.admin.fellowships.contact} name="contact" />
      <Input label={message.admin.fellowships.location} name="location" />
      <Input label={message.admin.fellowships.zoom} name="zoom" />
      <FileInput
        name="cover"
        label={message.admin.fellowships.cover}
        help={message.admin.fellowships.help}
        url={fellowship?.cover}
      />
      <RichTextEditor
        name="description"
        label={message.admin.fellowships.description}
      />
      <div className="flex gap justify-end mt-2">
        <Link className="button action" href={route("fellowships")}>
          {message.cancel}
        </Link>
        <button type="button" className="action" onClick={saveDraft}>
          {message.admin.post.saveDraft}
        </button>
        <button className="primary"> {message.admin.post.publish}</button>
      </div>
    </Form>
  );
};

export default FellowshipForm;
