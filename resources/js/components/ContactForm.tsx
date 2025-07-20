import { Link, useForm } from '@inertiajs/react';

import { Contact, ContactRole, PhotoMetadata, SelectOption } from '@/types';
import Form from '@/components/form/Form';
import Informative from '@/components/base/Informative';
import Input from '@/components/form/Input';
import RichTextEditor from '@/components/form/RichTextEditor';
import PhotoInput from '@/components/form/PhotoInput';
import Select from '@/components/form/Select';
import useMessage from '@/hooks/useMessage';

interface ContactFormProps {
  contact?: Contact;
  heading: string;
  photos: PhotoMetadata[];
}

const ContactForm = ({ photos, heading, contact }: ContactFormProps) => {
  const form = useForm({
    name: contact?.name,
    role: contact?.role,
    avatar: contact?.avatar,
    tel: contact?.tel,
    email: contact?.email,
    about: contact?.about,
  });
  const message = useMessage();

  const submit = () =>
    contact
      ? form.post(route('contacts.update', { id: contact.id }))
      : form.post(route('contacts.store'));

  const roles: SelectOption<ContactRole | ''>[] = [
    { value: '', label: '-' },
    { value: 'pastor', label: message.common.role.pastor },
    { value: 'preacher', label: message.common.role.preacher },
    { value: 'deacon', label: message.common.role.deacon },
  ];

  return (
    <Form form={form} onSubmit={submit}>
      <Informative className="mb-1" header={heading} />
      <Input label={message.admin.contacts.name} name="name" />
      <PhotoInput label={message.admin.contacts.avatar} photos={photos} name="avatar" />
      <Select options={roles} name="role" label={message.admin.contacts.role} />
      <Input type="tel" label={message.admin.contacts.tel} name="tel" />
      <Input type="email" label={message.admin.contacts.tel} name="email" />
      <RichTextEditor name="about" photos={photos} label={message.admin.contacts.about} />
      <div className="flex gap justify-end mt-2">
        <Link className="button action" href={route('contacts')}>
          {message.cancel}
        </Link>
        <button className="primary">{message.admin.post.publish}</button>
      </div>
    </Form>
  );
};

export default ContactForm;
