import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
type Props = {};
function NotFoundBlog({}: Props) {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center">
      <div className="text-9xl font-bold">
        <span className="text-blue-500">O</span>
        <span className="text-red-500">o</span>
        <span className="text-yellow-500">p</span>
        <span className="text-blue-500">p</span>
        <span className="text-green-500">s</span>
      </div>
      <div className="mt-20 text-center space-y-4">
        <h1 className="text-4xl font-bold">The blog you are looking for is not found 🍀🍀</h1>
        <p className="">
          Try this{' '}
          <Link as={NextLink} href="/blog" color="warning" underline="always" showAnchorIcon isBlock>
            link
          </Link>{' '}
          to go back to the blog page
        </p>
      </div>
    </div>
  );
}

export default NotFoundBlog;
