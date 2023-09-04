import { mainNav } from '@/configs/siteconfig';
import { Icons } from '@components/icons';
import MainNavbar from '@components/navbar';
import { absoluteUrl } from '@lib/helper';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Post } from '@prisma/client';
import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getPostsBySlug(searchParams?: Record<string, any>) {
  const res = await fetch(absoluteUrl(`/api/blog`), {
    next: {
      revalidate: 5,
      tags: ['blog', 'page', 'post'],
    },
  }).then(async (res) => {
    const data = await res.json();
    return data.data as (Post & { author: { name: string; email: string } })[];
  });

  return res;
}

export const metadata: Metadata = {
  title: 'My blogs',
};
async function ProfileBlogs({ searchParams }: Props) {
  const blogs = await getPostsBySlug();
  return (
    <div className="">
      <MainNavbar items={mainNav} />
      <main className="container mx-auto py-4">
        <h3 className="text-3xl font-bold">My blogs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {blogs?.map((blog) => {
            return (
              <Card key={blog.id} isPressable className="w-full">
                <CardHeader>
                  <h3 className="text-xl font-medium">{blog.title}</h3>
                </CardHeader>
                <CardBody>
                  <p>{blog.authorId}</p>
                  <p>{blog.createdAt.toLocaleString('vi_VN')}</p>
                  <p>{blog.published}</p>
                </CardBody>
                <CardFooter className="space-x-2">
                  <Link href={`/blog/${blog.slug}`}>
                    <Button color="primary" isIconOnly variant="light">
                      <Icons.eye className="w-5 h-5 cursor-pointer" />
                    </Button>
                  </Link>
                  <Link href={`/blog/${blog.slug}/edit`}>
                    <Button color="secondary" isIconOnly variant="light">
                      <Icons.pen className="w-5 h-5 cursor-pointer" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default ProfileBlogs;
