import { User as UserDisplay } from '@nextui-org/user';
import { Post, User } from '@prisma/client';
import { format } from 'date-fns';
import Blocks from 'editorjs-blocks-react-renderer';

type Props = {
  blog: Post & {
    author?: Partial<User>;
  };
};

function BlogRenderer({ blog }: Props) {
  return (
    <div className="prose prose-stone mx-auto">
      <h1 className="">{blog.title}</h1>
      <UserDisplay
        name={blog.author?.name}
        avatarProps={{
          src: blog.author?.image || '/images/avatar.png',
          alt: blog.author?.name || 'avatar',
        }}
        description={
          <div className="flex items-center space-x-2">
            <span>Publish {format(new Date(blog.updatedAt), 'dd/MM/yyyy')}</span>
          </div>
        }
      />
      <Blocks data={blog.content as any} />
    </div>
  );
}

export default BlogRenderer;
