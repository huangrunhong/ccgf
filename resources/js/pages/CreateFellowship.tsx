import { PhotoMetadata } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import FellowshipForm from '@/components/FellowshipForm';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

interface CreateFellowShipProps {
  photos: PhotoMetadata[];
}

const CreateFellowShip = ({ photos }: CreateFellowShipProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="fellowships">
      <SiteHead title={message.page.createFellowship} />
      <FellowshipForm photos={photos} heading={message.page.createFellowship} />
    </AuthenticatedLayout>
  );
};

export default CreateFellowShip;
