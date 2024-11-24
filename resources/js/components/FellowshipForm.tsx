import { Link, useForm } from "@inertiajs/react";

import { Fellowship, PhotoMetadata, SelectOption } from "@/types";
import Form from "@/components/form/Form";
import PhotoInput from "@/components/form/PhotoInput";
import Informative from "@/components/base/Informative";
import Input from "@/components/form/Input";
import RichTextEditor from "@/components/form/RichTextEditor";
import Select from "@/components/form/Select";
import TimePicker from "@/components/form/TimePicker";
import useMessage from "@/hooks/useMessage";

const getOptions = ([value, label]: [
  string,
  string
]): SelectOption<number> => ({ value: parseInt(value), label });

interface FellowshipFormProps {
  heading: string;
  photos: PhotoMetadata[];
  fellowship?: Fellowship;
}

const FellowshipForm = ({
  photos,
  fellowship,
  heading,
}: FellowshipFormProps) => {
  const form = useForm({
    name: fellowship?.name ?? "",
    status: fellowship?.status ?? "draft",
    hour: fellowship?.hour ?? "15:00",
    contact: fellowship?.contact ?? "",
    day: fellowship?.day ?? 6,
    frequency: fellowship?.frequency ?? 1,
    cover: fellowship?.cover ?? null,
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

  const days = Object.entries(message.common.day).map(getOptions);
  const frequencies = Object.entries(message.common.frequency).map(getOptions);

  return (
    <Form form={form} onSubmit={publish}>
      <Informative className="mb-1" header={heading} />
      <Input required label={message.admin.fellowships.name} name="name" />
      <div className="flex-column gap">
        <span>{message.admin.fellowships.schedule}</span>
        <div className="flex gap">
          <Select name="frequency" options={frequencies} />
          <Select name="day" options={days} />
          <TimePicker name="hour" />
        </div>
      </div>
      <Input label={message.admin.fellowships.contact} name="contact" />
      <Input label={message.admin.fellowships.location} name="location" />
      <Input label={message.admin.fellowships.zoom} name="zoom" />
      <PhotoInput
        name="cover"
        photos={photos}
        label={message.admin.fellowships.cover}
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
