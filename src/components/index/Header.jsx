import React from 'react';

export default function Header() {
  return (
    <header>
      <h1>Wander</h1>
      <nav>
        <ul>
          {/* <li><a href="#" className="btn"><span className="material-symbols-outlined">notifications</span></a></li> */}
          <li><a href="menu.html" className="btn"><span className="material-symbols-outlined">menu</span></a></li>
        </ul>
      </nav>
    </header>
  );
}