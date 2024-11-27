import { useState } from "react";

import { PhotoMetadata } from "@/types";
import Dialog from "@/components/base/Dialog";
import PhotoLibrary from "@/components/PhotoLibrary";
import useMessage from "@/hooks/useMessage";

interface PhotoLibraryDialogProps {
  photos: PhotoMetadata[];
  enabled: boolean;
  enable: () => void;
  disable: () => void;
  onSelect: (filename: string) => void;
}

const PhotoLibraryDialog = ({
  enabled,
  disable,
  photos,
  onSelect,
}: PhotoLibraryDialogProps) => {
  const message = useMessage();
  const [selected, setSelected] = useState<string | null>(null);

  const onConfirm = () => {
    disable();
    setSelected(null);
    selected && onSelect(selected);
  };

  return (
    <Dialog
      fullscreen
      visible={enabled}
      dismiss={disable}
      onConfirm={onConfirm}
      title={message.admin.photoLibrary.open}
    >
      <PhotoLibrary
        photos={photos}
        selected={selected}
        setSelected={setSelected}
      />
    </Dialog>
  );
};

export default PhotoLibraryDialog;
