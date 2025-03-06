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

  const heading = worship.regular
    ? message.page.editRegularWorship
    : message.page.editSpecialWorship;

  return (
    <AuthenticatedLayout currentPath="dashboard">
      <SiteHead title={heading} />
      <WorshipForm heading={heading} worship={worship} photos={photos} />
    </AuthenticatedLayout>
  );
};

export default EditWorShip;
