import { PhotoMetadata, Post, PageProps, Contact } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';
import ContactForm from '@/components/ContactForm';

interface EditContactProps extends PageProps {
  contact: Contact;
  photos: PhotoMetadata[];
}

const EditContact = ({ contact, photos }: EditContactProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="posts">
      <SiteHead title={message.page.editContact} />
      <ContactForm heading={message.page.editContact} contact={contact} photos={photos} />
    </AuthenticatedLayout>
  );
};

export default EditContact;
