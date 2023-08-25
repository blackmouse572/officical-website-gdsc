import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Link as NextLink } from '@nextui-org/link';
import { Blogs, allAuthors } from 'contentlayer/generated';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import vn from 'date-fns/locale/vi';
import parseISO from 'date-fns/parseISO';
import { TextBlogViewProps } from './horizontal-blog-view';
import { Icons } from './icons';

type Props = TextBlogViewProps;
function getAuthorByPost(post: Blogs) {
  return allAuthors.find((author) => author.name === post.author);
}

function VericalBlogView({ blog, ...props }: Props) {
  const timeDistance = formatDistanceToNow(parseISO(blog.date), {
    addSuffix: true,
    locale: vn,
  });
  const author = getAuthorByPost(blog);
  return (
    <Card isPressable shadow="none" {...props}>
      <CardBody>
        <Image src={blog.coverImage} alt={blog.title} width={300} className="aspect-video" />
        <h3 className="mt-1">
          <NextLink underline="hover" href={`${blog.slug}`} className="text-gray-800 text-xl font-medium">
            {blog.title}
          </NextLink>
        </h3>
        <div className="flex items-center gap-1 mt-2">
          <p className="text-gray-500 text-xs">{timeDistance}</p>
          <Icons.dot className="text-gray-500" size={12} />
          <p className="text-gray-500 text-xs">
            by &nbsp;
            <NextLink href={`${author?.slug}`} className="text-blue-500 text-xs">
              {author?.name}
            </NextLink>
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default VericalBlogView;
