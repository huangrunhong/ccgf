import { Event } from "@/types";
import { useForm } from "@inertiajs/react";
import Form from "@/components/form/Form";

interface EventFormProps {
  event?: Event;
}

const EventForm = ({ event }: EventFormProps) => {
  const form = useForm({
    date: event?.date ?? "",
    location: event?.location ?? "",
    title: event?.title ?? "",
    description: event?.description ?? "",
    cover: undefined as File | undefined,
  });

  const submit = () => form.post(route("events.store"));

  return (
    <Form form={form} onSubmit={submit}>
      <div>hallo</div>
    </Form>
  );
};

export default EventForm;
