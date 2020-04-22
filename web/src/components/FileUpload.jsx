import React, { useState } from "react";

export const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const onFileChange = (e) => {
    setFiles(e.target.files);
  };

  return (
    <div>
      <label>Upload multiple files</label><br/>
      <input type="file" accept="image/*" onChange={onFileChange} />
      <p>Files:</p>
      <ul>
        {Object.keys(files).map((key) => (
          <li>{files[key].name}</li>
        ))}
      </ul>
    </div>
  );
};
