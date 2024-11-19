import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import PostForm from "@/components/PostForm";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

const CreatePost = () => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="posts">
      <SiteHead title={message.page.createPost} />
      <PostForm heading={message.page.createPost} />
    </AuthenticatedLayout>
  );
};

export default CreatePost;
