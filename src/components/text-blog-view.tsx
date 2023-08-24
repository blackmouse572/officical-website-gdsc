import { Card, CardBody } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { Blogs, allAuthors } from 'contentlayer/generated';
import { formatDistanceToNow, parseISO } from 'date-fns';
import vn from 'date-fns/locale/vi';
import { Icons } from './icons';
type Props = {
  blog: Blogs;
} & React.ComponentProps<typeof Card>;

function getAuthorByPost(post: Blogs) {
  return allAuthors.find((author) => author.name === post.author);
}

function TextBlogView({ blog, className, ...props }: Props) {
  const author = getAuthorByPost(blog);
  const timeDistance = formatDistanceToNow(parseISO(blog.date), {
    addSuffix: true,
    locale: vn,
  });
  return (
    <Card shadow="none" isPressable className="group">
      <CardBody>
        <h3 className="font-medium group-hover:underline">{blog.title}</h3>
        <div className="flex items-center gap-1">
          <p className="text-gray-500 text-xs ">{timeDistance}</p>
          <Icons.dot className="text-gray-500" size={12} />
          <p className="text-gray-500 text-xs">
            by &nbsp;
            <Link href={`${author?.slug}`} className="text-blue-500 text-xs">
              {author?.name}
            </Link>
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default TextBlogView;
