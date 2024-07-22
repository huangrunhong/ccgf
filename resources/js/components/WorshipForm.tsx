import { Link, useForm } from "@inertiajs/react";

import { Worship } from "@/types";
import Checkbox from "@/components/form/Checkbox";
import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import Informative from "@/components/base/Informative";
import useMessage from "@/hooks/useMessage";

interface WorshipFormProps {
  worship?: Worship;
}

const WorshipForm = ({ worship }: WorshipFormProps) => {
  const form = useForm({
    title: worship?.title ?? "",
    speaker: worship?.speaker ?? "",
    date: worship?.date ?? "",
    dinner: worship?.dinner ?? false,
    baptism: worship?.baptism ?? false,
    eucharist: worship?.eucharist ?? false,
  });
  const message = useMessage();

  const header = worship
    ? message.admin.worships.edit
    : message.admin.worships.post;

  const submit = () => form.post(route("worships.store"));

  return (
    <Form form={form} onSubmit={submit}>
      <Informative className="mb-1" header={header} />
      <Input required label={message.admin.worships.title} name="title" />
      <Input required label={message.admin.worships.speaker} name="speaker" />
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
