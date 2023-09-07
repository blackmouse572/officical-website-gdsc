import BasicOgImage from '@/app/og/basic-og';
import { Metadata } from 'next';
type Props = {};

export const metadata: Metadata = {
  title: 'New blog',
};

function EditorPage({}: Props) {
  return (
    <div className="container mx-auto min-h-screen">
      {/* <EditorNavbar />
      <Spacer y={5} />
      <section className="max-w-2xl mx-auto">
        <NewPostForm />
      </section> */}
      <BasicOgImage title={'Hello world'} />
    </div>
  );
}

export default EditorPage;
