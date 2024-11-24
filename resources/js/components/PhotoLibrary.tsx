import { useEffect, useState } from "react";
import {
  RiDeleteBinLine,
  RiUploadCloud2Line,
  RiZoomInLine,
} from "@remixicon/react";
import { useForm } from "@inertiajs/react";
import { filesize } from "filesize";
import clsx from "clsx";

import { PhotoMetadata } from "@/types";
import Informative from "@/components/base/Informative";
import FormattedDate from "@/components/base/FormattedDate";
import Dialog from "@/components/base/Dialog";
import useMessage from "@/hooks/useMessage";

interface PhotosProps {
  photos: PhotoMetadata[];
  selected?: string | null;
  onZoomIn: (filename: string) => void;
  onDelete: (filename: string) => void;
  onSelect?: (filename: string | null) => void;
}

const accept = "image/jpeg, image/png, image/svg+xml, image/webp";

const Photos = ({
  photos,
  selected,
  onDelete,
  onSelect,
  onZoomIn,
}: PhotosProps) =>
  photos.map((photo) => (
    <div key={photo.name} className="flex-column gap">
      <div
        className={clsx("photo-thumbnail", {
          selectable: onSelect,
          selected: photo.name === selected,
        })}
        onClick={() => (onSelect ?? onZoomIn)(photo.name)}
      >
        <img src={photo.name} alt="thumbnail" />
      </div>
      <div className="flex items-center justify-between gap">
        <div className="flex-column ml-1">
          <small>{filesize(photo.size)}</small>
          <small className="muted">
            <FormattedDate date={new Date(photo.lastModified)} format="PPPp" />
          </small>
        </div>
        <div className="flex gap">
          <button
            type="button"
            className="icon"
            onClick={() => onZoomIn(photo.name)}
          >
            <RiZoomInLine size={18} />
          </button>
          <button
            type="button"
            className="icon"
            onClick={() => onDelete(photo.name)}
          >
            <RiDeleteBinLine size={18} />
          </button>
        </div>
      </div>
    </div>
  ));

const fileRoute = (file: string) =>
  route("photoLibrary.destroy", { file: file.split("/").at(-1) });

interface PhotoLibraryProps {
  photos: PhotoMetadata[];
  selected?: string | null;
  setSelected?: (name: string | null) => void;
}

const PhotoLibrary = ({ photos, selected, setSelected }: PhotoLibraryProps) => {
  const message = useMessage();
  const form = useForm({ file: null as File | null });
  const [zoomIn, setZoomIn] = useState("");
  const [deleted, setDeleted] = useState("");

  useEffect(() => {
    if (!form.data.file) return;

    form.post(route("photoLibrary.upload"));
    form.reset();
  }, [form.data.file]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    event.target.files &&
    event.target.files.length &&
    form.setData({ file: event.target.files.item(0) });

  const dismissZoomInPhoto = () => setZoomIn("");
  const dismissDeletePhoto = () => setDeleted("");
  const onDeletePhoto = () => deleted && form.delete(fileRoute(deleted));

  const error = form.errors.file;
  const classNames = clsx("dialog", { visible: zoomIn });

  return (
    <div className="flex-1 flex-column gap-2 overflow">
      <div className="flex-column gap">
        <div className="flex items-center gap-1">
          <div>
            <label htmlFor="photo" className="button primary">
              <RiUploadCloud2Line size={18} />
              {message.upload}
            </label>
            <input
              id="photo"
              type="file"
              className="d-none"
              accept={accept}
              onChange={onChange}
            />
          </div>
          <span className="muted">{message.admin.photoLibrary.info}</span>
        </div>
        {error && <small className="danger">{error}</small>}
      </div>
      <div className="photo-library">
        <Photos
          photos={photos}
          selected={selected}
          onZoomIn={setZoomIn}
          onDelete={setDeleted}
          onSelect={setSelected}
        />
      </div>
      <Dialog
        title={message.admin.photoLibrary.deleteFileModal.header}
        visible={deleted}
        dismiss={dismissDeletePhoto}
        onConfirm={onDeletePhoto}
      >
        <Informative>
          {message.admin.photoLibrary.deleteFileModal.info}
        </Informative>
      </Dialog>
      <div className={classNames} onClick={dismissZoomInPhoto}>
        <img className="photo-preview" src={zoomIn} alt="preview" />
      </div>
    </div>
  );
};

export default PhotoLibrary;
