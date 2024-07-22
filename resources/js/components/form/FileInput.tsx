import { useContext } from "react";
import { RiDeleteBinLine, RiImageAddLine } from "@remixicon/react";

import FormContext from "@/contexts/FormContext";

const image = "image/jpeg, image/png, image/svg+xml, image/webp";

interface FileInputProps {
  accept?: string;
  help?: string;
  label: string;
  name: string;
  url?: string | null;
}

const FileInput = ({
  label,
  name,
  help,
  url,
  accept = image,
}: FileInputProps) => {
  const form = useContext(FormContext);

  const changeFile = (files: FileList | null) => {
    const [file] = files ?? [];

    if (!file) return form.setData(name, file);

    if (accept.includes(file.type)) form.setData(name, file);
  };

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) =>
    changeFile(event.target.files);

  const onDragDropFile = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();
    changeFile(event.dataTransfer?.files);
  };

  const onRemoveFile = () => {
    form.setData(name, null);
    form.setData("remove_" + name, true);
  };

  const preview = form.data[name] ? URL.createObjectURL(form.data[name]) : url;

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
      {preview && !form.data["remove_" + name] && (
        <div className="image-preview">
          <img src={preview} alt="preview" />
          <button type="button" className="icon" onClick={onRemoveFile}>
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
