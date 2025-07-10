import { PageProps, PhotoMetadata, Worship } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import SiteHead from '@/components/base/SiteHead';
import WorshipForm from '@/components/WorshipForm';
import useMessage from '@/hooks/useMessage';

interface EditWorShipProps extends PageProps {
  worship: Worship;
  photos: PhotoMetadata[];
}

const EditWorShip = ({ photos, worship }: EditWorShipProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="dashboard">
      <SiteHead title={message.page.editWorship} />
      <WorshipForm heading={message.page.editWorship} worship={worship} photos={photos} />
    </AuthenticatedLayout>
  );
};

export default EditWorShip;
