import React from 'react';

export default function Header({ openMenu }) {
    return (
        <header>
            <h1>Wander</h1>
            <nav>
                <ul>
                    <li>
                        <button onClick={openMenu} className="btn material-symbols-outlined">menu</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}