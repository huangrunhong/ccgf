import { Post, PageProps } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";
import PostForm from "@/components/PostForm";

interface EditPostProps extends PageProps {
  post: Post;
}

const EditPage = ({ post }: EditPostProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="posts">
      <SiteHead title={message.page.editPost} />
      <PostForm heading={message.page.editPost} post={post} />
    </AuthenticatedLayout>
  );
};

export default EditPage;
