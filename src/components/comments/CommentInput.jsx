import React, { useState } from 'react';

export default function CommentInput() {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        console.log("Comment submitted:", text);
    };
    

    return (
        <form className="comment-input-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Add a comment"
            />
            <button type="submit">
                <span className="material-symbols-outlined">send</span>
            </button>
        </form>
    );
}
