import React from "react";

export default function Navigation({ openMenu }) {
    return (
        <nav>
            <ul>
                <li>
                    <button onClick={openMenu} className="btn material-symbols-outlined">menu</button>
                </li>
            </ul>
        </nav>
    );
}