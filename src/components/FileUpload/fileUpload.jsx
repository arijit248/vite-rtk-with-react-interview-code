import { useState, useRef } from "react";

const FileUpload = () => {
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    console.log(fileInputRef.current, "fileInputRef.current");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setFileName(file.name);
    } else {
      setImage("");
      setFileName("");
    }
  };
  return (
    <>
      <h3>File Upload</h3>
      <input
        type="file"
        id="myFile"
        name="filename"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button type="button" onClick={handleButtonClick}>
        Upload File
      </button>
      <img
        src={image}
        alt={fileName}
        style={{ width: "70px", height: "70px" }}
      />
      {fileName && <p>Selected File: {fileName}</p>}
    </>
  );
};

export default FileUpload;
