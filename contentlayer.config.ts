import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import { siteConfig } from './src/configs/siteconfig';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc: { _raw: { flattenedPath: any } }) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc: { _raw: { flattenedPath: string } }) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blogs',
  filePathPattern: `blogs/**/*.mdx`, // Type of file to parse (every mdx in all subfolders)
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    author: {
      type: 'string',
      description: 'The author of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    coverImage: {
      type: 'string',
      description: 'The cover image of the post',
      required: false,
      default: siteConfig.og.image,
    },
    published: {
      type: 'boolean',
      description: 'Whether the post is published',
      required: false,
      default: false,
    },
  },
  computedFields: computedFields,
}));

export const Event = defineDocumentType(() => ({
  name: 'Events',
  filePathPattern: `events/**/*.mdx`, // Type of file to parse (every mdx in all subfolders)
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the event',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the event',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the event',
      required: true,
    },
    coverImage: {
      type: 'string',
      description: 'The cover image of the event',
      required: false,
      default: siteConfig.og.image,
    },
    published: {
      type: 'boolean',
      description: 'Whether the event is published',
      required: false,
      default: false,
    },
  },
  computedFields: computedFields,
}));

export const Author = defineDocumentType(() => ({
  name: 'Authors',
  filePathPattern: `authors/**/*.mdx`, // Type of file to parse (every mdx in all subfolders)
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
      description: 'The name of the author',
      required: true,
    },
    bio: {
      type: 'string',
      description: 'The bio of the author',
      required: true,
    },
    avatar: {
      type: 'string',
      description: 'The avatar of the author',
      required: false,
      default: siteConfig.og.image,
    },
  },
  computedFields: computedFields,
}));

export const Project = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: `projects/**/*.mdx`, // Type of file to parse (every mdx in all subfolders)
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the project',
      required: true,
    },
    coverImage: {
      type: 'string',
      description: 'The cover image of the project',
      required: false,
      default: siteConfig.og.image,
    },
    published: {
      type: 'boolean',
      description: 'Whether the project is published',
      required: false,
      default: false,
    },
  },
  computedFields: computedFields,
}));

export default makeSource({
  contentDirPath: './contents', // Source directory where the content is located
  documentTypes: [Blog, Author, Event, Project],
});
