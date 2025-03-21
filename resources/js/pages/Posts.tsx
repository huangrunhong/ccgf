import { Link } from '@inertiajs/react';
import { RiAddFill, RiEditLine } from '@remixicon/react';

import { PageProps, Post } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import DeleteLink from '@/components/base/DeleteLink';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

interface PostsProps extends PageProps {
  posts: Post[];
}

const Posts = ({ posts }: PostsProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="posts">
      <SiteHead title={message.page.posts} />
      <div className="flex items-center justify-between mb-2">
        <span className="ml-1">{posts.length} Items</span>
        <Link className="button solid" href={route('posts.create')}>
          <RiAddFill size={18} />
          {message.page.createPost}
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Slug</th>
            <th>{message.admin.posts.title}</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.slug}</td>
              <td className="flex gap-1 items-center justify-between">
                {post.title}
                <div className="flex gap">
                  <DeleteLink href={route('posts.destroy', { id: post.id })} />
                  <Link className="button icon" href={route('posts.edit', { id: post.id })}>
                    <RiEditLine size={18} />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AuthenticatedLayout>
  );
};

export default Posts;
