import EditorNavbar from '@components/editor-nav';
import NewPostForm from '@components/new-post-form';
import { Spacer } from '@nextui-org/spacer';
import { Metadata } from 'next';
type Props = {};

export const metadata: Metadata = {
  title: 'New blog',
};

function EditorPage({}: Props) {
  return (
    <div className="container mx-auto">
      <EditorNavbar />
      <Spacer y={5} />
      <section className="max-w-2xl mx-auto">
        <NewPostForm />
      </section>
    </div>
  );
}

export default EditorPage;
