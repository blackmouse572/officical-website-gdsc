import { Blogs, allAuthors, allBlogs } from '.contentlayer/generated';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { User } from '@nextui-org/user';
import { compareDesc, parseISO } from 'date-fns';
import { Metadata } from 'next';
import Link from 'next/link';
import TextBlogView from '../../../components/text-blog-view';
import TimeDisplay from '../../../components/time-display';
import { absoluteUrl } from '../../../lib/helper';

export const metadata: Metadata = {
  title: 'Blogs',
};

function BlogPage() {
  const posts = allBlogs
    .filter((post) => post.date)
    .sort((a, b) => {
      return compareDesc(parseISO(a.date), parseISO(b.date));
    });
  const getAuthorByPost = (post: Blogs) => {
    const author = allAuthors.find((author) => author.name === post.author);
    return author;
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Blogs</h1>
      <p className="text-2xl">News and daily blogs written by us</p>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mx-auto px-3 gap-2 md:gap-4">
        {posts.map((post) => {
          const author = getAuthorByPost(post);

          return (
            <Card key={post.slug} shadow="sm" isPressable isFooterBlurred>
              <CardHeader>
                <User
                  name={author?.name ?? 'Unknown'}
                  description={
                    <Link
                      href={absoluteUrl(author?.slug ?? '')}
                      className="text-xs text-primary-500 hover:underline underline-offset-2"
                    >
                      @{author?.slugAsParams}
                    </Link>
                  }
                  avatarProps={{
                    src: author?.avatar ?? '',
                  }}
                />
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={post.coverImage}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <p className="line-clamp-2 text-sm text-white/80">{post.title}</p>
                <TimeDisplay time={post.date} />
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div>
        <TextBlogView blog={posts[0]} />
      </div>
    </main>
  );
}

export default BlogPage;
