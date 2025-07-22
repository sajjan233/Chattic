import React from 'react';

const ToggleTheme = ({ darkMode, setDarkMode }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-blue-600 text-white rounded shadow"
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>
    </div>
  );
};

export default ToggleTheme;