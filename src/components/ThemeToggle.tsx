import { useState } from "react";

interface ThemeToggleProps {
  onThemeChange: (isSolarized: boolean) => void;
}

const ThemeToggle = ({ onThemeChange }: ThemeToggleProps) => {
  const [isSolarized, setIsSolarized] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isSolarized;
    setIsSolarized(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className={`relative flex items-center w-16 h-8 rounded-full transition-all duration-300 shadow-lg ${
          isSolarized
            ? 'bg-red-500 shadow-red-500/20'
            : 'bg-gray-800 shadow-gray-800/20'
        }`}
        title={isSolarized ? "Switch to Dark Theme" : "Switch to Solar Theme"}
      >
        {/* Sun icon (left side) */}
        <div className={`absolute left-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
          isSolarized ? 'opacity-50' : 'opacity-100'
        }`}>
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Moon icon (right side) */}
        <div className={`absolute right-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
          isSolarized ? 'opacity-100' : 'opacity-50'
        }`}>
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>

        {/* Sliding indicator */}
        <div className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
          isSolarized ? 'left-1' : 'right-1'
        }`}></div>
      </button>
    </div>
  );
};

export default ThemeToggle;
