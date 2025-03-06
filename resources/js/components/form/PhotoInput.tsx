import { useContext } from 'react';
import { RiDeleteBinLine, RiImageAddLine } from '@remixicon/react';

import { PhotoMetadata } from '@/types';
import Field from '@/components/form/Field';
import FormContext from '@/contexts/FormContext';
import PhotoLibraryDialog from '@/components/PhotoLibraryDialog';
import useMessage from '@/hooks/useMessage';
import useSwitch from '@/hooks/useSwitch';

interface PhotoInputProps {
  label: string;
  name: string;
  photos: PhotoMetadata[];
}

const PhotoInput = ({ photos, label, name }: PhotoInputProps) => {
  const message = useMessage();
  const form = useContext(FormContext);
  const [enabled, enable, disable] = useSwitch();

  const filename = form.data[name];

  const onRemoveFile = () => form.setData(name, null);
  const onSelectFile = (selected: string) => form.setData(name, selected);

  return (
    <Field name={name}>
      <span>{label}</span>
      <div className="flex gap">
        <button type="button" className="flex-1 solid" onClick={enable}>
          <RiImageAddLine size={18} />
          {filename ?? message.admin.photoLibrary.open}
        </button>
        {filename && (
          <button type="button" className="icon" onClick={onRemoveFile}>
            <RiDeleteBinLine size={18} />
          </button>
        )}
      </div>
      <PhotoLibraryDialog
        photos={photos}
        enable={enable}
        enabled={enabled}
        disable={disable}
        onSelect={onSelectFile}
      />
    </Field>
  );
};

export default PhotoInput;
