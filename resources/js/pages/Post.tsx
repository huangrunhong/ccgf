import { PageProps, Post } from "@/types";
import PageLayout from "@/layouts/PageLayout";
import SiteHead from "@/components/base/SiteHead";

interface PostProps extends PageProps {
  post: Post;
}

const PostPage = ({ post }: PostProps) => (
  <PageLayout className="post">
    <SiteHead title={post.title} />
    <section>
      <h2 className="mt-10 mb-4">{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </section>
  </PageLayout>
);

export default PostPage;
