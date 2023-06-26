import React from 'react';
import './styles/Navbar.css'

function Navbar({ currentPage, setCurrentPage }) {

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav>
      <ul>
        <li className={currentPage === 'home' ? 'active' : ''}>
          <button onClick={() => handlePageChange('home')}>Home</button>
        </li>
        <li className={currentPage === 'about' ? 'active' : ''}>
          <button onClick={() => handlePageChange('about')}>About Me</button>
        </li>
        <li className={currentPage === 'cats' ? 'active' : ''}>
          <button onClick={() => handlePageChange('cats')}>My Cats</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
