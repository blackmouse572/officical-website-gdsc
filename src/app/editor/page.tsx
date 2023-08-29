import Editor from '@/components/editor';
import EditorNavbar from '@components/editor-nav';
import { Spacer } from '@nextui-org/spacer';

type Props = {};

function EditorPage({}: Props) {
  return (
    <div className="container mx-auto">
      <EditorNavbar />
      <Spacer y={5} />
      <Editor
        post={{
          id: '2',
          authorId: '1',
          title: 'Hello World',
          content: null,
          published: false,
          createdAt: new Date(),
        }}
      />
    </div>
  );
}

export default EditorPage;
