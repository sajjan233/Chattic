import React from 'react';

const ToggleTheme = ({ darkMode, setDarkMode }) => {
  return (
    <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ToggleTheme;
