import React from 'react'
import { Link } from 'react-router-dom';

// Function based Component
// Acts just like a render()
// Simpler than a Class
function Header() {
  return(
    <header style={headerStyle}>
      <h1>To-Do List</h1>
      <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
    </header>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
}

const headerStyle = {
  background: 'grey',
  color: 'white',
  textAlign: 'center',
  padding: '1em',
}

export default Header;