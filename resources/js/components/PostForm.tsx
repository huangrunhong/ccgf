import { Link, useForm } from "@inertiajs/react";

import { Post } from "@/types";
import Form from "@/components/form/Form";
import Informative from "@/components/base/Informative";
import Input from "@/components/form/Input";
import RichTextEditor from "@/components/form/RichTextEditor";
import useMessage from "@/hooks/useMessage";

interface PostFormProps {
  post?: Post;
  heading: string;
}

const PostForm = ({ heading, post }: PostFormProps) => {
  const form = useForm({
    slug: post?.slug ?? "",
    title: post?.title ?? "",
    content: post?.content ?? "",
  });
  const message = useMessage();

  const submit = () =>
    post
      ? form.post(route("posts.update", { id: post.id }))
      : form.post(route("posts.store"));

  return (
    <Form form={form} onSubmit={submit}>
      <Informative className="mb-1" header={heading} />
      <Input label="Slug" name="slug" />
      <Input label={message.admin.posts.title} name="title" />
      <RichTextEditor name="content" label={message.admin.posts.content} />
      <div className="flex gap justify-end mt-2">
        <Link className="button action" href={route("posts")}>
          {message.cancel}
        </Link>
        <button className="primary">{message.admin.post.publish}</button>
      </div>
    </Form>
  );
};

export default PostForm;
