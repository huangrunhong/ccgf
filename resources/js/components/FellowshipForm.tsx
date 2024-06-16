import { Link, useForm } from "@inertiajs/react";

import { Fellowship, SelectOption, User } from "@/types";
import FileInput from "@/components/form/FileInput";
import Informative from "@/components/base/Informative";
import Input from "@/components/form/Input";
import RichTextEditor from "@/components/form/RichTextEditor";
import Select from "@/components/form/Select";
import useMessage from "@/hooks/useMessage";

const days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];

const frequencies = ["每周", "隔周"];

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
];

interface FellowshipFormProps {
  fellowship?: Fellowship;
  users: User[];
}

const FellowshipForm = ({ fellowship, users }: FellowshipFormProps) => {
  const form = useForm({
    name: fellowship?.name ?? "",
    status: fellowship?.status ?? "draft",
    hour: fellowship?.hour ?? "15:00",
    day: fellowship?.day ?? "周六",
    frequency: fellowship?.frequency ?? "每周",
    cover: undefined as File | undefined,
    zoom: fellowship?.zoom ?? undefined,
    location: fellowship?.location ?? "",
    description: fellowship?.description ?? "",
    admin_id: fellowship?.admin?.id ?? undefined,
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

  const publish = (event: React.FormEvent) => {
    form.data.status = "published";

    event.preventDefault();
    submit();
  };

  const header = fellowship
    ? message.dashboard.fellowships.edit
    : message.dashboard.fellowships.post;
  const options: SelectOption<number>[] = users.map((user) => ({
    value: user.id,
    label: user.name,
  }));

  return (
    <form onSubmit={publish}>
      <Informative header={header} />
      <Input
        required
        label={message.dashboard.fellowships.name}
        name="name"
        inertiaForm={form}
      />
      <div className="flex-column gap">
        <span>{message.dashboard.fellowships.schedule}</span>
        <div className="flex gap">
          <Select name="frequency" values={frequencies} inertiaForm={form} />
          <Select name="day" values={days} inertiaForm={form} />
          <Select name="hour" values={hours} inertiaForm={form} />
        </div>
      </div>
      <Select
        label={message.dashboard.fellowships.contact}
        name="admin_id"
        options={options}
        inertiaForm={form}
      />
      <Input
        label={message.dashboard.fellowships.location}
        name="location"
        inertiaForm={form}
      />
      <Input
        label={message.dashboard.fellowships.zoom}
        name="zoom"
        inertiaForm={form}
      />
      <FileInput
        name="cover"
        label={message.dashboard.fellowships.cover}
        help={message.dashboard.fellowships.help}
        inertiaForm={form}
      />
      <RichTextEditor
        name="description"
        label={message.dashboard.fellowships.description}
        inertiaForm={form}
      />
      <div className="flex gap justify-end mt-2">
        <Link className="button action" href={route("fellowships")}>
          {message.cancel}
        </Link>
        <button type="button" className="action" onClick={saveDraft}>
          {message.dashboard.post.saveDraft}
        </button>
        <button className="primary"> {message.dashboard.post.publish}</button>
      </div>
    </form>
  );
};

export default FellowshipForm;
