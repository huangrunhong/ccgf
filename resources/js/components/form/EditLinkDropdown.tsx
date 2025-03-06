import { useEffect, useState } from 'react';
import { RiLink } from '@remixicon/react';
import { Editor } from '@tiptap/react';

import useMessage from '@/hooks/useMessage';
import Dropdown from '@/components/base/Dropdown';

const createLink = (editor: Editor) => editor.chain().focus().extendMarkRange('link');

interface EditLinkDropdownProps {
  editor: Editor;
}

const EditLinkDropdown = ({ editor }: EditLinkDropdownProps) => {
  const message = useMessage();
  const [link, setLink] = useState('');

  const node = editor.getAttributes('link');

  useEffect(() => {
    node.href ? setLink(node.href) : setLink('');
  }, [node.href]);

  const onClick = () => {
    const isLink = editor.isActive('link');

    if (!link && !isLink) {
      return editor.commands.focus();
    }

    if (!link && isLink) {
      return createLink(editor).unsetLink().run();
    }

    createLink(editor).setLink({ href: link }).run();
  };

  return (
    <Dropdown>
      <button type="button" className="icon" data-tooltip={message.editor.link}>
        <RiLink size={18} />
      </button>
      <Dropdown.Menu>
        <div className="edit-link">
          <input
            value={link}
            placeholder={message.editor.enterURL}
            onChange={(event) => setLink(event.target.value)}
          />
          <button type="button" className="primary" onClick={onClick}>
            {message.editor.setLink}
          </button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default EditLinkDropdown;
