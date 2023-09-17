import { generateOgImage } from '@lib/helper';
import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Link as NextLink } from '@nextui-org/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import vn from 'date-fns/locale/vi';
import NextImage from 'next/image';
import { TextBlogViewProps } from './horizontal-blog-view';
import { Icons } from './icons';

type Props = TextBlogViewProps;

function VericalBlogView({ blog, ...props }: Props) {
  const timeDistance = formatDistanceToNow(new Date(blog.updatedAt), {
    addSuffix: true,
    locale: vn,
  });
  const author = blog;
  return (
    <Card isPressable shadow="none" {...props}>
      <CardBody>
        <Image
          src={blog.ogImage || generateOgImage(blog.title)}
          alt={blog.title}
          width={300}
          height={200}
          as={NextImage}
          className="aspect-video"
        />
        <h3 className="mt-1">
          <NextLink underline="hover" href={`/blog/${blog.slug}`} className="text-gray-800 text-xl font-medium">
            {blog.title}
          </NextLink>
        </h3>
        <div className="flex items-center gap-1 mt-2">
          <p className="text-gray-500 text-xs">{timeDistance}</p>
          <Icons.dot className="text-gray-500" size={12} />
          <p className="text-gray-500 text-xs">
            by &nbsp;
            <NextLink href={`/author/${blog.author?.id}`} className="text-blue-500 text-xs">
              {blog.author?.name}
            </NextLink>
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default VericalBlogView;
