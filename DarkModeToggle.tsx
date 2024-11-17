import React from 'react';

const DarkModeToggle: React.FC = () => {
  const toggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded"
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
