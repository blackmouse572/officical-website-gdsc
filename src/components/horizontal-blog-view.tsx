import { generateOgImage } from '@lib/helper';
import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import { Link as NextLink } from '@nextui-org/link';
import { Post, User } from '@prisma/client';
import { formatDistanceToNow } from 'date-fns';
import vn from 'date-fns/locale/vi';
import { Icons } from './icons';
type HorizontalBlogViewProps = {
  blog: Post & {
    author: Pick<User, 'id' | 'name' | 'image'>;
  };
  isWithImage?: boolean;
  isWithDescription?: boolean;
} & React.ComponentProps<typeof Card> & {
    children?: never;
  };

function HorizontalBlogView({ blog, className, isWithImage, isWithDescription, ...props }: HorizontalBlogViewProps) {
  const timeDistance = formatDistanceToNow(new Date(blog.createdAt), {
    addSuffix: true,
    locale: vn,
  });

  return (
    <Card shadow="none" className="w-full" {...props}>
      <CardBody>
        <section className="flex gap-2">
          {isWithImage && (
            <div className="relative aspect-square">
              <Image
                src={blog.ogImage || generateOgImage(blog.title)}
                alt={blog.title}
                as={NextImage}
                className="aspect-square object-cover md:max-w-[4rem]"
                width={300}
              />
            </div>
          )}
          <div className="">
            <NextLink
              color={'foreground'}
              href={`/blog/${blog.slug}`}
              className="font-medium text-base"
              underline="hover"
            >
              {blog.title}
            </NextLink>

            {isWithDescription && <p className="text-gray-800 md:text-sm text-xs line-clamp-2">{blog.description}</p>}

            <div className="flex items-center gap-1 mt-2">
              <p className="text-gray-500 text-xs">{timeDistance}</p>
              <Icons.dot className="text-gray-500" size={12} />
              <p className="text-gray-500 text-xs">
                by &nbsp;
                <NextLink href={`${blog.author?.id}`} className="text-blue-500 text-xs">
                  {blog.author?.name}
                </NextLink>
              </p>
            </div>
          </div>
        </section>
      </CardBody>
    </Card>
  );
}

export default HorizontalBlogView;
export type { HorizontalBlogViewProps as TextBlogViewProps };
