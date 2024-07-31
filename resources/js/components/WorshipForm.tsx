import { Link, useForm } from "@inertiajs/react";

import { Worship } from "@/types";
import Checkbox from "@/components/form/Checkbox";
import DatetimePicker from "@/components/form/DateTimePicker";
import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import Informative from "@/components/base/Informative";
import nextSunday from "@/lib/nextSunday";
import useMessage from "@/hooks/useMessage";

const getInitialValues = (worship?: Worship) => ({
  title: worship?.title ?? "",
  date: worship?.date ?? nextSunday().toISOString(),
  location: worship?.location ?? "",
  dinner: worship?.dinner ?? false,
  baptism: worship?.baptism ?? false,
  eucharist: worship?.eucharist ?? false,
});

interface WorshipFormProps {
  heading: string;
  worship?: Worship;
}

const WorshipForm = ({ heading, worship }: WorshipFormProps) => {
  const message = useMessage();
  const form = useForm(getInitialValues(worship));

  const submit = () =>
    worship
      ? form.post(route("worships.update", { id: worship.id }))
      : form.post(route("worships.store"));

  return (
    <Form form={form} onSubmit={submit}>
      <Informative className="mb-1" header={heading} />
      <DatetimePicker
        name="date"
        label={message.admin.worships.date}
        dateformat={worship?.regular ? "eeee" : undefined}
      />
      <Input label={message.admin.worships.location} name="location" />
      <Input label={message.admin.worships.title} name="title" />
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
