import { RiDeleteBinLine, RiImageAddLine } from "@remixicon/react";

import { InertiaForm } from "@/types";

interface FileInputProps {
  accept?: string;
  help?: string;
  label: string;
  name: string;
  inertiaForm: InertiaForm;
}

const FileInput = ({
  label,
  name,
  help,
  inertiaForm: form,
  accept = "image/jpeg, image/png, image/svg+xml, image/webp",
}: FileInputProps) => {
  const setFile = (file: File | null) => form.setData(name, file);

  const changeFile = (files: FileList | null) => {
    const [file] = files ?? [];

    if (!file) return setFile(null);

    if (accept.includes(file.type)) setFile(file);
  };

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) =>
    changeFile(event.target.files);

  const onDragDropFile = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();
    changeFile(event.dataTransfer?.files);
  };

  const url = form.data[name] ? URL.createObjectURL(form.data[name]) : null;

  return (
    <div className="flex-column gap">
      <label htmlFor={name}>{label}</label>
      <div className="file-input">
        <input
          type="file"
          name={name}
          accept={accept}
          onChange={onSelectFile}
          onDrag={onDragDropFile}
          onDragOver={onDragDropFile}
          onDragLeave={onDragDropFile}
        />
        <RiImageAddLine size={36} />
        {help}
      </div>
      {url && (
        <div className="image-preview">
          <img src={url} alt="preview" />
          <button
            type="button"
            className="icon"
            onClick={() => changeFile(null)}
          >
            <RiDeleteBinLine size={18} />
          </button>
        </div>
      )}
      {form.errors[name] && (
        <small className="danger">{form.errors[name]}</small>
      )}
    </div>
  );
};

export default FileInput;
