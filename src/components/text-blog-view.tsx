import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import { Blogs, allAuthors } from 'contentlayer/generated';
import { formatDistanceToNow, parseISO } from 'date-fns';
import vn from 'date-fns/locale/vi';
import { Icons } from './icons';
type TextBlogViewProps = {
  blog: Blogs;
  isWithImage?: boolean;
  isWithDescription?: boolean;
} & React.ComponentProps<typeof Card> & {
    children?: never;
  };

function getAuthorByPost(post: Blogs) {
  return allAuthors.find((author) => author.name === post.author);
}

function TextBlogView({ blog, className, isWithImage, isWithDescription, ...props }: TextBlogViewProps) {
  const author = getAuthorByPost(blog);
  const timeDistance = formatDistanceToNow(parseISO(blog.date), {
    addSuffix: true,
    locale: vn,
  });
  return (
    <Card shadow="none" isPressable className="group" {...props}>
      <CardBody>
        <section className="flex gap-2">
          {isWithImage && (
            <div className="relative aspect-square">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                className="aspect-square object-cover md:max-w-[4rem]"
                width={300}
              />
            </div>
          )}
          <div className="">
            <h3 className="font-medium group-hover:underline  text-base">{blog.title}</h3>

            {isWithDescription && <p className="text-gray-800 md:text-sm text-xs line-clamp-2">{blog.description}</p>}

            <div className="flex items-center gap-1 mt-2">
              <p className="text-gray-500 text-xs">{timeDistance}</p>
              <Icons.dot className="text-gray-500" size={12} />
              <p className="text-gray-500 text-xs">
                by &nbsp;
                <Link href={`${author?.slug}`} className="text-blue-500 text-xs">
                  {author?.name}
                </Link>
              </p>
            </div>
          </div>
        </section>
      </CardBody>
    </Card>
  );
}

export default TextBlogView;
export type { TextBlogViewProps };
