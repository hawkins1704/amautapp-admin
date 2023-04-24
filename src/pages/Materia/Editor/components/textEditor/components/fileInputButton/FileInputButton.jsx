import React, { useRef } from 'react'

const FileInputButton = ({onChange, className}) => {
    const fileInputRef = useRef(null);

    const handleClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      onChange(file);
    };
  
    return (
      <>
        <button onClick={handleClick} className={className} >Seleccionar imagen</button>
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </>
    );
}

export default FileInputButton