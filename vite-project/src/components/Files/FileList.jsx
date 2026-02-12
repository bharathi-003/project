import React from "react";

const FileList = ({ files, onDownload }) => (
  <div className="file-list" style={{ maxWidth: "600px", margin: "0 auto" }}>
    {files.map(f => (
      <div key={f.id} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20220312/pngtree-laboratory-utensils-for-scientific-research-image_1061390.jpg" alt={f.name} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px" }} />
        <span>{f.name}</span>
        <button onClick={() => onDownload(f)}>Download</button>
      </div>
    ))}
  </div>
);

export default FileList;
