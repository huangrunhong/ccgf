import { Link, useForm } from "@inertiajs/react";
import { format } from "date-fns/format";
import { nextSunday } from "date-fns/nextSunday";

import { Worship } from "@/types";
import DatePicker from "@/components/form/DatePicker";
import Checkbox from "@/components/form/Checkbox";
import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import Informative from "@/components/base/Informative";
import useMessage from "@/hooks/useMessage";

const sunday = (date?: string) =>
  format(date ? new Date(date) : nextSunday(new Date()), "yyyy-MM-dd");

interface WorshipFormProps {
  worship?: Worship;
}

const WorshipForm = ({ worship }: WorshipFormProps) => {
  const form = useForm({
    title: worship?.title ?? "",
    speaker: worship?.speaker ?? "",
    date: sunday(worship?.date),
    dinner: worship?.dinner ?? false,
    baptism: worship?.baptism ?? false,
    eucharist: worship?.eucharist ?? false,
  });
  const message = useMessage();

  const header = worship
    ? message.admin.worships.edit
    : message.admin.worships.post;

  const submit = () =>
    worship
      ? form.post(route("worships.update", { id: worship.id }))
      : form.post(route("worships.store"));

  return (
    <Form form={form} onSubmit={submit}>
      <Informative className="mb-1" header={header} />
      <Input required label={message.admin.worships.title} name="title" />
      <Input required label={message.admin.worships.speaker} name="speaker" />
      <DatePicker label={message.admin.worships.date} name="date" />
      <div className="flex gap-2 mt-2">
        <Checkbox label={message.admin.worships.baptism} name="baptism" />
        <Checkbox label={message.admin.worships.eucharist} name="eucharist" />
        <Checkbox label={message.admin.worships.dinner} name="dinner" />
      </div>
      <div className="flex gap justify-end mt-2">
        <Link className="button action" href={route("dashboard")}>
          {message.cancel}
        </Link>
        <button className="primary"> {message.admin.post.publish}</button>
      </div>
    </Form>
  );
};

export default WorshipForm;
