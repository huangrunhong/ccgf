import { PhotoMetadata } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import SiteHead from '@/components/base/SiteHead';
import WorshipForm from '@/components/WorshipForm';
import useMessage from '@/hooks/useMessage';

interface CreateWorShipProps {
  photos: PhotoMetadata[];
}

const CreateWorShip = ({ photos }: CreateWorShipProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="dashboard">
      <SiteHead title={message.page.createWorship} />
      <WorshipForm photos={photos} heading={message.page.createWorship} />
    </AuthenticatedLayout>
  );
};

export default CreateWorShip;
