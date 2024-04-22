import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav style={{ backgroundColor: '#4267B2', padding: '1rem', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          </li>
          <li style={{ display: 'inline' }}>
            <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>Profile</Link>
          </li>
        </ul>
      </div>
      <div style={{ position: 'relative' }}>
        <img src="/profilePhoto.jpg" alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }} onClick={toggleDropdown} />
        {dropdownOpen && (
          <div style={{ position: 'absolute', top: '50px', right: 0, backgroundColor: 'white', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', borderRadius: '4px', zIndex: 1 }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li><Link to="/settings" style={{ textDecoration: 'none', color: 'black', padding: '8px 12px', display: 'block' }} onClick={closeDropdown}>Settings</Link></li>
              <li><Link to="/logout" style={{ textDecoration: 'none', color: 'black', padding: '8px 12px', display: 'block' }} onClick={closeDropdown}>Logout</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
