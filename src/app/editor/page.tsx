'use client';
import EditorNavbar from '@components/editor-nav';
import { Icons } from '@components/icons';
import { toTitleCase } from '@lib/helper';
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Link, Textarea } from '@nextui-org/react';
import { Spacer } from '@nextui-org/spacer';
import { Metadata } from 'next';
import { useMemo, useState } from 'react';
import slugtify from 'slugify';
type Props = {};

export const metadata: Metadata = {
  title: 'New blog',
};

function EditorPage({}: Props) {
  const [isOpen, onOpenChange] = useState(true);
  const [title, setTitle] = useState('');

  const slug = useMemo(() => {
    return slugtify(title, {
      locale: 'vi',
      lower: true,
    });
  }, [title]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _title = title.length > 0 ? toTitleCase(title) : 'Untitled';
    //Todo: create new blog here
    onOpenChange(false);
  };

  return (
    <div className="container mx-auto">
      <EditorNavbar />
      <Spacer y={5} />

      <form onSubmit={onSubmit}>
        <Card className="max-w-sm mx-auto" shadow="sm">
          <CardHeader>
            <section className="py-2 px-3">
              <h3 className="text-xl font-bold">Create new blog</h3>
              <p className="text-sm text-stone-400 mt-1">
                Before you start, please make sure you have read our{' '}
                <Link href={'/docs'} className="text-sm">
                  documentation
                </Link>{' '}
                and our{' '}
                <Link href={'/terms'} className="text-sm">
                  terms of service
                </Link>
                .
              </p>
            </section>
          </CardHeader>
          <Divider />
          <CardBody className="space-y-4">
            <Input
              label="Title"
              placeholder="Enter a title for your blog"
              description={`The url will be: ${slug}`}
              size="sm"
              required
              isRequired
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              label="Blog description"
              placeholder='Overall content of the blog. e.g. "This is a blog about..."'
              description="This will be used for preview content"
              maxLength={40}
              size="sm"
            />
          </CardBody>
          <Divider />
          <CardFooter className="flex gap-unit-sm justify-end">
            <Button color={'primary'} startContent={<Icons.add />} type={'submit'}>
              Create
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default EditorPage;
