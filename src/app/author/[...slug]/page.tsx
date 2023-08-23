import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allAuthors } from '../../../../.contentlayer/generated';
import { Icons } from '../../../components/icons';

type Props = {
  params: {
    slug: string[];
  };
};

async function getAuthorFromParams(params: Props['params']) {
  const slug = params?.slug?.join('/');
  const author = allAuthors.find((author) => author.slugAsParams === slug);

  if (!author) {
    null;
  }

  return author;
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allAuthors.map((author) => ({
    slug: author.slugAsParams.split('/'),
  }));
}

async function AuthorDetailPage({ params }: Props) {
  const author = await getAuthorFromParams(params);
  if (!author) return notFound();

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link href="/blog" className={'absolute left-[-200px] top-14 hidden xl:inline-flex'}>
        <Button>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Button>
      </Link>
      <div>
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">{author.name}</h1>
      </div>
      {author.avatar && (
        <Image
          src={author.avatar}
          alt={author.name}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog">
          <Button>
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            See all posts
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default AuthorDetailPage;
