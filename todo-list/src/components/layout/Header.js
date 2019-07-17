import React from 'react'

// Function based Component
// Acts just like a render()
// Simpler than a Class
function Header() {
  return(
    <header style={headerStyle}>
      <h1>To-Do List</h1>
    </header>
  );
}

const headerStyle= {
  background: 'grey',
  color: 'white',
  textAlign: 'center',
  padding: '1em',
}

export default Header;