import React, { useState } from 'react';

export default function EditHero() {
  const [title, setTitle] = useState("Hi, I'm Sajjan");
  const [subtitle, setSubtitle] = useState("I build awesome apps.");

  const handleSave = () => {
    console.log('Saved:', title, subtitle);
    alert('Hero section saved (functionality not wired yet)');
  };

  return (
    <div className="p-4">
      <h3>Edit Hero Section</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control my-2" />
      <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="form-control my-2" />
      <button onClick={handleSave} className="btn btn-primary">Save</button>
    </div>
  );
}
