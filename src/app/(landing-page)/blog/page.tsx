import { allBlogs } from '.contentlayer/generated';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { compareDesc, parseISO } from 'date-fns';
import { Metadata } from 'next';
import Image from 'next/image';
import TimeDisplay from '../../../components/time-display';

export const metadata: Metadata = {
  title: 'Blogs',
};

function BlogPage() {
  const posts = allBlogs
    .filter((post) => post.date)
    .sort((a, b) => {
      return compareDesc(parseISO(a.date), parseISO(b.date));
    });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Blogs</h1>
      <p className="text-2xl">News and daily blogs written by us</p>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mx-auto px-3 gap-2 md:gap-4">
        {posts.map((post) => (
          <Card key={post.slug} shadow="sm" isPressable isFooterBlurred>
            <CardHeader>
              <b>{post.title}</b>
            </CardHeader>
            <CardBody className="relative h-48">
              <Image
                src={post.coverImage}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="blur-md"
                fill
                priority
              />
              <div className="z-10">
                <p className="text-white/80">{post.title}</p>
              </div>
            </CardBody>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <TimeDisplay time={post.date} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default BlogPage;
