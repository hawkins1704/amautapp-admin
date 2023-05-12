import React, { useRef, useState } from 'react'
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const FileInputButton = ({onChange, className}) => {
    const fileInputRef = useRef(null);

    const handleClick = () => {
      fileInputRef.current.click();
      
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      console.log("VALUE DE INPUT FILE: ",fileInputRef.current.value)
      onChange(file);
      fileInputRef.current.value="";
      console.log("VALUE DE INPUT FILE DESPUES: ",fileInputRef.current.value)
    };
  
    return (
      <>
        <button onClick={handleClick} className={className} >Seleccionar imagen <ImageSearchIcon sx={{marginLeft:'8px'}}/></button>
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          multiple
        />
      </>
    );
}

export default FileInputButton