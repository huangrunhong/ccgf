import { PhotoMetadata } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import ContactForm from '@/components/ContactForm';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

interface CreateContactProps {
  photos: PhotoMetadata[];
}

const CreateContact = ({ photos }: CreateContactProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="posts">
      <SiteHead title={message.page.createContact} />
      <ContactForm heading={message.page.createContact} photos={photos} />
    </AuthenticatedLayout>
  );
};

export default CreateContact;
