import { useEffect, useState } from "react";
import { RiDeleteBinLine, RiUploadCloud2Line } from "@remixicon/react";
import { useForm } from "@inertiajs/react";
import { filesize } from "filesize";
import clsx from "clsx";

import { PageProps } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import Informative from "@/components/base/Informative";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";
import Form from "@/components/form/Form";
import Field from "@/components/form/Field";
import FormattedDate from "@/components/base/FormattedDate";
import Dialog from "@/components/base/Dialog";

interface FileMetadata {
  name: string;
  size: number;
  lastModified: number;
}

interface FilesProps {
  files: FileMetadata[];
  onSelect: (name: string) => void;
  onDelete: (name: string) => void;
}

const Files = ({ files, onSelect, onDelete }: FilesProps) =>
  files.map((file) => (
    <div key={file.name} className="flex-column gap">
      <div className="media-thumbnail" onClick={() => onSelect(file.name)}>
        <img src={file.name} alt="thumbnail" />
      </div>
      <div className="flex items-center justify-between gap">
        <div className="flex-column ml-1">
          <small>{filesize(file.size)}</small>
          <small className="muted">
            <FormattedDate date={new Date(file.lastModified)} format="PPPp" />
          </small>
        </div>
        <button className="icon" onClick={() => onDelete(file.name)}>
          <RiDeleteBinLine size={18} />
        </button>
      </div>
    </div>
  ));

const fileRoute = (file: string) =>
  route("mediaLibrary.destroy", { file: file.split("/").at(-1) });

interface MediaLibraryProps extends PageProps {
  files: FileMetadata[];
}

const MediaLibrary = ({ files }: MediaLibraryProps) => {
  const message = useMessage();
  const form = useForm({ file: null as File | null });
  const [enlarged, setEnlarged] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (!form.data.file) return;

    form.post(route("mediaLibrary.upload"));
    form.reset();
  }, [form.data.file]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    event.target.files &&
    event.target.files.length &&
    form.setData({ file: event.target.files.item(0) });

  const dismissEnlarged = () => setEnlarged("");
  const dismissSelected = () => setSelected("");
  const onDeleteSelected = () => selected && form.delete(fileRoute(selected));

  const classNames = clsx("dialog", { open: enlarged });

  return (
    <AuthenticatedLayout currentPath="mediaLibrary">
      <SiteHead title={message.page.mediaLibrary} />
      <Informative className="mb-4" header={message.page.mediaLibrary} />
      <Form form={form}>
        <div className="media-upload mb-4">
          <label htmlFor="file" className="button primary mb-1">
            <RiUploadCloud2Line size={18} />
            {message.upload}
          </label>
          <Field name="file">
            <input id="file" type="file" name="file" onChange={onChange} />
          </Field>
        </div>
      </Form>
      <div className="media-library">
        <Files files={files} onSelect={setEnlarged} onDelete={setSelected} />
      </div>
      <Dialog
        title={message.admin.mediaLibrary.deleteModal.header}
        open={!!selected}
        dismiss={dismissSelected}
        onConfirm={onDeleteSelected}
      >
        <Informative>{message.admin.mediaLibrary.deleteModal.info}</Informative>
      </Dialog>
      <div className={classNames} onClick={dismissEnlarged}>
        <img className="media-preview" src={enlarged} alt="preview" />
      </div>
    </AuthenticatedLayout>
  );
};

export default MediaLibrary;
