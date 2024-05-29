/* eslint-disable react/prop-types */
import { UploadCloudIcon } from "lucide-react";
import { useRef } from "react";

const DropArea = ({ onDragEnter, onDragOver, onDragLeave, onDrop, onChange }) => {
  const inputFile = useRef(null);

  const handleClick = () => {
    inputFile.current.click();
  };

  return (
    <div
      className="drop-area"
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={handleClick}
    >
      <div className="icon">
        <UploadCloudIcon size={48} color="#7C3AED" />
      </div>
      <strong>Adicione as fotografias</strong>
      <span>*Penas fotos que aparecem o rosto da pessoa</span>
      <span>Arraste ou clique para fazer upload</span>
      <input
        type="file"
        name="file"
        ref={inputFile}
        accept="image/*"
        onChange={onChange}
      />
    </div>
  )
};

export default DropArea;
