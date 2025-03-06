import { Fellowship, PhotoMetadata } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import FellowshipForm from '@/components/FellowshipForm';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

interface EditFellowShipProps {
  fellowship: Fellowship;
  photos: PhotoMetadata[];
}

const EditFellowShip = ({ fellowship, photos }: EditFellowShipProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="fellowships">
      <SiteHead title={message.page.editFellowship} />
      <FellowshipForm
        photos={photos}
        fellowship={fellowship}
        heading={message.page.editFellowship}
      />
    </AuthenticatedLayout>
  );
};

export default EditFellowShip;
