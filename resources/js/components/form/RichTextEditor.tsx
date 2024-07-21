import { useContext } from "react";
import {
  RiBold,
  RiH2,
  RiH3,
  RiH4,
  RiItalic,
  RiListOrdered,
  RiListUnordered,
} from "@remixicon/react";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import FormContext from "@/contexts/FormContext";

const extensions = [StarterKit];

interface RichTextEditorProps {
  name: string;
  label: string;
}

const Toolbar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  const toggleH2 = () =>
    editor.chain().focus().toggleHeading({ level: 2 }).run();
  const toggleH3 = () =>
    editor.chain().focus().toggleHeading({ level: 3 }).run();
  const toggleH4 = () =>
    editor.chain().focus().toggleHeading({ level: 4 }).run();

  const toggleBold = () => editor.chain().focus().toggleBold().run();
  const toggleItalic = () => editor.chain().focus().toggleItalic().run();
  const toggleBulletList = () =>
    editor.chain().focus().toggleBulletList().run();
  const toggleOrderedList = () =>
    editor.chain().focus().toggleOrderedList().run();

  return (
    <div className="flex gap mb-1">
      <button type="button" className="icon" onClick={toggleH2}>
        <RiH2 size={18} />
      </button>
      <button type="button" className="icon" onClick={toggleH3}>
        <RiH3 size={18} />
      </button>
      <button type="button" className="icon" onClick={toggleH4}>
        <RiH4 size={18} />
      </button>
      <button type="button" className="icon" onClick={toggleBold}>
        <RiBold size={18} />
      </button>
      <button type="button" className="icon" onClick={toggleItalic}>
        <RiItalic size={18} />
      </button>
      <button type="button" className="icon" onClick={toggleBulletList}>
        <RiListUnordered size={18} />
      </button>
      <button type="button" className="icon" onClick={toggleOrderedList}>
        <RiListOrdered size={18} />
      </button>
    </div>
  );
};

const RichTextEditor = ({ name, label }: RichTextEditorProps) => {
  const form = useContext(FormContext);

  return (
    <div className="flex-column gap">
      <label htmlFor={name}>{label}</label>
      <div id={name} className="rich-text-editor">
        <EditorProvider
          slotBefore={<Toolbar />}
          extensions={extensions}
          content={form.data[name]}
          onUpdate={({ editor }) => form.setData(name, editor.getHTML())}
        />
      </div>
      {form.errors[name] && (
        <small className="danger">{form.errors[name]}</small>
      )}
    </div>
  );
};

export default RichTextEditor;
