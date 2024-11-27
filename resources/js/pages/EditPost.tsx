import { PhotoMetadata, Post, PageProps } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";
import PostForm from "@/components/PostForm";

interface EditPostProps extends PageProps {
  post: Post;
  photos: PhotoMetadata[];
}

const EditPage = ({ post, photos }: EditPostProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="posts">
      <SiteHead title={message.page.editPost} />
      <PostForm heading={message.page.editPost} post={post} photos={photos} />
    </AuthenticatedLayout>
  );
};

export default EditPage;
