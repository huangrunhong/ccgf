import { PageProps, PhotoMetadata } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import SiteHead from '@/components/base/SiteHead';
import PhotoLibrary from '@/components/PhotoLibrary';
import useMessage from '@/hooks/useMessage';
import Informative from '@/components/base/Informative';

interface PhotoLibraryProps extends PageProps {
  photos: PhotoMetadata[];
}

const PhotoLibraryPage = ({ photos }: PhotoLibraryProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="photoLibrary">
      <SiteHead title={message.page.photoLibrary} />
      <Informative className="mb-4" header={message.page.photoLibrary} />
      <PhotoLibrary photos={photos} />
    </AuthenticatedLayout>
  );
};

export default PhotoLibraryPage;
