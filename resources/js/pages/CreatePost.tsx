import { PhotoMetadata } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import PostForm from '@/components/PostForm';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

interface CreatePostProps {
  photos: PhotoMetadata[];
}

const CreatePost = ({ photos }: CreatePostProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="posts">
      <SiteHead title={message.page.createPost} />
      <PostForm heading={message.page.createPost} photos={photos} />
    </AuthenticatedLayout>
  );
};

export default CreatePost;
