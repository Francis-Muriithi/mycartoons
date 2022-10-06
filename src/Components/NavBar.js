import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div>
     <nav className="nav">
      <a href="/" className= "site-title">My Cartoons App</a>
      <ul>
      <li><a href='/about'>About</a></li>
        <li><a href='/blog'>Blog</a></li>
      </ul>
     </nav>
    </div>
  )
}

export default NavBar