import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { User } from '@nextui-org/user';
import clsx from 'clsx';
import { Blogs, allAuthors } from '../../.contentlayer/generated';
import { Icons } from './icons';

type Props = {
  blog: Blogs;
} & React.ComponentProps<typeof Card>;

function getAuthorByPost(post: Blogs) {
  return allAuthors.find((author) => author.name === post.author);
}

function TextBlogView({ blog, className, ...props }: Props) {
  const author = getAuthorByPost(blog);
  return (
    <Card className={clsx('', className)} shadow="sm" isPressable {...props}>
      <CardHeader>
        <User
          classNames={{
            name: 'font-medium',
          }}
          name={author?.name}
          description={
            <Link isExternal href={author?.slugAsParams} className="text-xs hover:underline">
              @{author?.slugAsParams}
            </Link>
          }
          avatarProps={{ src: blog.coverImage }}
        />
      </CardHeader>
      <CardBody className="space-y-2">
        <h3 className="text-2xl font-bold">{blog.title}</h3>
        <p className="line-clamp-2 text-sm text-slate-400">{blog.description}</p>
      </CardBody>
      <CardFooter className="justify-end text-sm text-foreground-300 space-x-1 cursor-default">
        <p className="text-foreground-300 text-xs">4 min read</p>
        <Icons.dot />
        <div className="flex items-center space-x-1">
          <Icons.eye className="inline-block mr-1" size={18} />
          <p>1.2k</p>
        </div>
        <Icons.dot />
        <div className="flex items-center space-x-1">
          <Icons.heart className="inline-block mr-1" size={18} />
          <p>1.2k</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default TextBlogView;
