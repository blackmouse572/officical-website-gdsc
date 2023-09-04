import EditorNavbar from '@components/editor-nav';
import Editor from '@components/editor/editor';
import { absoluteUrl, generateOgImage } from '@lib/helper';
import { Post } from '@prisma/client';
import { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await fetch(absoluteUrl(`/api/blog/${slug}`), {
    next: {
      revalidate: 5,
      tags: ['blog'],
    },
  });
  return await res.json();
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  const previosImage = (await parent).openGraph?.images || [];

  if (!post) {
    return {
      title: 'Not Found',
      description: 'Not Found',
    };
  }

  return {
    title: post.title,
    description: post.content,
    image: generateOgImage(post.title),
    url: absoluteUrl(`/blog/${post.slug}`),
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: absoluteUrl(`/blog/${post.slug}`),
      title: post.title,
      description: post.content,
      images: [
        ...previosImage,
        {
          url: generateOgImage(post.title),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      site_name: 'Next.js Blog Example',
    },
  };
}

async function EditBlogPage(props: Props) {
  console.log('props', props);
  const blog = await getPostBySlug(props.params.slug);
  if (!blog) {
    return notFound();
  }
  return (
    <div>
      <EditorNavbar />
      <Editor post={blog} />
    </div>
  );
}

export default EditBlogPage;
