import React from 'react';

export default function Comment(props) {
    const { profileImg, username, text } = props;

    return (
        <div className="comment">
            <img src={profileImg} alt={"Profile of " + username} className="comment-profile" />
            <div className="comment-content">
                <p className="comment-username">{username}</p>
                <p className="comment-text">{text}</p>
                <p className="comment-reply">Reply</p>
            </div>
        </div>
    );
}

