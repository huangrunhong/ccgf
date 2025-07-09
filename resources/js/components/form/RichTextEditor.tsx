import { useContext } from 'react';
import {
  RiBold,
  RiH2,
  RiH3,
  RiH4,
  RiImageAddLine,
  RiItalic,
  RiListOrdered,
  RiListUnordered,
} from '@remixicon/react';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import StarterKit from '@tiptap/starter-kit';

import { PhotoMetadata } from '@/types';
import FormContext from '@/contexts/FormContext';
import EditLinkDropdown from '@/components/form/EditLinkDropdown';
import PhotoLibraryDialog from '@/components/PhotoLibraryDialog';
import Field from '@/components/form/Field';
import useSwitch from '@/hooks/useSwitch';
import useMessage from '@/hooks/useMessage';

const extensions = [
  StarterKit,
  Image,
  Link.extend({ inclusive: false }).configure({ openOnClick: false }),
];

interface ToolbarProps {
  photos: PhotoMetadata[];
}

interface RichTextEditorProps extends ToolbarProps {
  name: string;
  label: string;
}

const Toolbar = ({ photos }: ToolbarProps) => {
  const message = useMessage();
  const { editor } = useCurrentEditor();
  const [enabled, enable, disable] = useSwitch();

  if (!editor) return null;

  const focus = () => editor.chain().focus();

  const toggleH2 = () => focus().toggleHeading({ level: 2 }).run();
  const toggleH3 = () => focus().toggleHeading({ level: 3 }).run();
  const toggleH4 = () => focus().toggleHeading({ level: 4 }).run();

  const toggleBold = () => focus().toggleBold().run();
  const toggleItalic = () => focus().toggleItalic().run();
  const toggleBulletList = () => focus().toggleBulletList().run();
  const toggleOrderedList = () => focus().toggleOrderedList().run();

  const onSelectFile = (src: string) => focus().setImage({ src }).run();

  return (
    <div className="toolbar">
      <button
        type="button"
        className="icon"
        data-tooltip={message.editor.heading2}
        onClick={toggleH2}
      >
        <RiH2 size={18} />
      </button>
      <button
        type="button"
        className="icon"
        data-tooltip={message.editor.heading3}
        onClick={toggleH3}
      >
        <RiH3 size={18} />
      </button>
      <button
        type="button"
        className="icon"
        data-tooltip={message.editor.heading4}
        onClick={toggleH4}
      >
        <RiH4 size={18} />
      </button>
      <button
        type="button"
        className="icon"
        data-tooltip={message.editor.bold}
        onClick={toggleBold}
      >
        <RiBold size={18} />
      </button>
      <button
        type="button"
        className="icon"
        data-tooltip={message.editor.italic}
        onClick={toggleItalic}
      >
        <RiItalic size={18} />
      </button>
      <button
        type="button"
        className="icon"
        data-tooltip={message.editor.bulletList}
        onClick={toggleBulletList}
      >
        <RiListUnordered size={18} />
      </button>
      <button
        type="button"
        className="icon"
        data-tooltip={message.editor.numberedList}
        onClick={toggleOrderedList}
      >
        <RiListOrdered size={18} />
      </button>
      <button type="button" className="icon" data-tooltip={message.editor.image} onClick={enable}>
        <RiImageAddLine size={18} />
      </button>
      <PhotoLibraryDialog
        photos={photos}
        enable={enable}
        enabled={enabled}
        disable={disable}
        onSelect={onSelectFile}
      />
      <EditLinkDropdown editor={editor} />
    </div>
  );
};

const RichTextEditor = ({ name, label, photos }: RichTextEditorProps) => {
  const form = useContext(FormContext);

  return (
    <Field name={name}>
      <label htmlFor={name}>{label}</label>
      <div id={name} className="rich-text-editor">
        <EditorProvider
          slotBefore={<Toolbar photos={photos} />}
          extensions={extensions}
          content={form.data[name]}
          onUpdate={({ editor }) => form.setData(name, editor.getHTML())}
        />
      </div>
    </Field>
  );
};

export default RichTextEditor;
