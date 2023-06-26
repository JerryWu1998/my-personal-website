import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutMe from './AboutMe';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutMe />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="content">{renderPage()}</div>
    </div>
  );
}

export default App;
