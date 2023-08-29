'use client';

import EditorJs from '@editorjs/editorjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Textarea } from '@nextui-org/react';
import { Post } from '@prisma/client';
import '@styles/editor.css';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Icons } from './icons';

interface EditorProps {
  post: Pick<Post, 'id' | 'title' | 'content' | 'authorId' | 'published'> & {
    createdAt?: Date;
    updatedAt?: Date;
  };
}
const formSchema = z.object({
  title: z.string().nonempty(),
  content: z.any().optional(),
});
type FormData = z.infer<typeof formSchema>;

function Editor({ post }: EditorProps) {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const editorRef = useRef<EditorJs>();
  const [isSaving, setIsSaving] = useState(false);
  const [isMounted, setMounted] = useState(false);

  const body = useMemo(() => formSchema.parse(post), [post]);

  const initEditor = useCallback(async () => {
    // const Editorjs = (await import('@editorjs/editorjs')).default;
    //@ts-ignore
    const Header = (await import('@editorjs/header')).default;
    //@ts-ignore
    const Embed = (await import('@editorjs/embed')).default;
    //@ts-ignore
    const Table = (await import('@editorjs/table')).default;
    //@ts-ignore
    const List = (await import('@editorjs/list')).default;
    //@ts-ignore
    const Code = (await import('@editorjs/code')).default;
    //@ts-ignore
    const LinkTool = (await import('@editorjs/link')).default;
    //@ts-ignore
    const InlineCode = (await import('@editorjs/inline-code')).default;
    //@ts-ignore
    const ImageJs = (await import('@editorjs/image')).default;
    // @ts-ignore
    const Paragraph = (await import('@editorjs/paragraph')).default;

    if (!editorRef.current) {
      const editor = new EditorJs({
        holder: 'editor',
        onReady: () => {
          setMounted(true);
          editorRef.current = editor;
        },
        placeholder: 'Write your post here...',
        inlineToolbar: true,
        data: body.content,
        tools: {
          Header: {
            class: Header,
            config: {
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          Paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
          Table: {
            class: Table,
            inlineToolbar: true,
          },
          Embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
              },
            },
          },
          List: {
            class: List,
            inlineToolbar: true,
          },
          Code: {
            class: Code,
            config: {
              highlight: true,
            },
            inlineToolbar: true,
          },
          LinkTool,
          InlineCode,
          Image: {
            class: ImageJs,
            config: {
              endpoints: {
                byFile: 'http://localhost:3000/editor/image_upload',
                byUrl: 'http://localhost:3000/editor/image_fetch',
              },
            },
          },
        },
      });
    }
  }, [body.content]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      initEditor();

      return () => {
        editorRef.current?.destroy();
        editorRef.current = undefined;
      };
    }
  }, [initEditor, isMounted]);

  const onSubmit = (data: FormData) => {
    setIsSaving(true);
    console.log(data);
    setIsSaving(false);
  };

  if (!isMounted) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <Button color="secondary">
            <Link href="/" className="flex items-center">
              <Icons.chevronLeft className="w-5 h-5 cursor-pointer inline-block" />
              <p className="font-medium">Back</p>
            </Link>
          </Button>
          <p className="text-slate-400 text-sm border border-slate-400 px-4 py-2 rounded-lg cursor-default">
            <span className="font-medium">{post.published ? 'Published' : 'Draft'}</span> on{' '}
            {post.createdAt?.toLocaleDateString()}
          </p>
        </div>
        <div className="prose prose-stone mx-auto w-[800px]">
          <Textarea
            defaultValue={post.title}
            placeholder="Enter a title for your post"
            // className={
            //   'w-full bg-transparent text-5xl font-bold focus:outline-none max-w-full h-max min-h-fit resize-none'
            // }
            variant="underlined"
            classNames={{
              input: 'text-5xl font-bold h-fit',
              base: 'h-fit',
            }}
            {...register('title')}
          />
          <div id="editor" className="w-full h-full" />
        </div>
      </div>
    </form>
  );
}

export default Editor;
