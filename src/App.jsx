import { useState } from 'react';
import UploadImage from './components/uploadImage';
import NavBar from './components/navbar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <div className={`flex flex-col items-center min-h-screen ${isDarkMode ? 'bg-gradient-to-r from-purple-900  to-gray-900' : 'bg-gradient-to-r from-purple-600 to-blue-500'} transition-transform transform`}>
        <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        
        <div className="flex justify-center items-center flex-grow">
          <UploadImage isDarkMode={isDarkMode} />
        </div>

        <footer className="p-4 text-white text-center">
          &copy; 2024. All rights reserved to: Pankaj Rana & Sagar
        </footer>
      </div>
    </>
  );
}

export default App;
