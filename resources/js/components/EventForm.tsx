import { Link, useForm } from '@inertiajs/react';

import { Event, PhotoMetadata } from '@/types';
import DatetimePicker from '@/components/form/DateTimePicker';
import PhotoInput from '@/components/form/PhotoInput';
import Form from '@/components/form/Form';
import Informative from '@/components/base/Informative';
import Input from '@/components/form/Input';
import RichTextEditor from '@/components/form/RichTextEditor';
import useMessage from '@/hooks/useMessage';

interface EventFormProps {
  event?: Event;
  photos: PhotoMetadata[];
  heading: string;
}

const EventForm = ({ heading, event, photos }: EventFormProps) => {
  const form = useForm({
    date: event?.date ?? new Date().toISOString(),
    location: event?.location ?? '',
    title: event?.title ?? '',
    description: event?.description ?? '',
    cover: event?.cover ?? null,
  });
  const message = useMessage();

  const submit = () =>
    event ? form.post(route('events.update', { id: event.id })) : form.post(route('events.store'));

  return (
    <Form form={form} onSubmit={submit}>
      <Informative className="mb-1" header={heading} />
      <Input label={message.admin.events.title} name="title" />
      <DatetimePicker label={message.admin.events.date} name="date" />
      <Input label={message.admin.events.location} name="location" />
      <PhotoInput name="cover" photos={photos} label={message.admin.events.cover} />
      <RichTextEditor name="description" photos={photos} label={message.admin.events.description} />
      <div className="flex gap justify-end mt-2">
        <Link className="button action" href={route('events')}>
          {message.cancel}
        </Link>
        <button className="primary">{message.admin.post.publish}</button>
      </div>
    </Form>
  );
};

export default EventForm;
