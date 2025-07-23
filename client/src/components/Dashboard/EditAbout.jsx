import React, { useState } from 'react';

export default function EditAbout() {
  const [aboutText, setAboutText] = useState("This is about me...");

  const handleSave = () => {
    console.log('Saved:', aboutText);
    alert('About section saved (for now, just console)');
  };

  return (
    <div className="p-4">
      <h3>Edit About Section</h3>
      <textarea
        value={aboutText}
        onChange={(e) => setAboutText(e.target.value)}
        rows={6}
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={handleSave}>Save</button>
    </div>
  );
}
