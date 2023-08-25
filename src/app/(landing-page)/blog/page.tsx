import { allBlogs } from '.contentlayer/generated';
import HorizontalBlogView from '@components/horizontal-blog-view';
import NewsDisplayer from '@components/news-displayer';
import VericalBlogView from '@components/vertical-blog-view';
import { Divider } from '@nextui-org/divider';
import { compareDesc, parseISO } from 'date-fns';
import { Metadata } from 'next';

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
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 container mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NewsDisplayer
          className="col-span-2"
          header={{
            title: 'News',
            href: '/news',
          }}
        >
          <div className="grid grid-cols-[40%_60%] gap-2">
            <div className="">
              {posts.map((post) => {
                return <VericalBlogView key={post.slug} isWithDescription isWithImage blog={post} />;
              })}
            </div>
            <div className="">
              {posts.map((post) => {
                return <HorizontalBlogView key={post.slug} blog={post} />;
              })}
            </div>
          </div>
        </NewsDisplayer>
        <div className="">
          <NewsDisplayer
            header={{
              title: 'Hots',
              href: '/hot',
            }}
          >
            {posts.map((post) => {
              return (
                <>
                  <HorizontalBlogView key={post.slug} blog={post} isWithImage />
                  <Divider />
                </>
              );
            })}
          </NewsDisplayer>
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
