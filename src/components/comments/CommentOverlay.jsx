import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';

export default function CommentOverlay({ comments, onClose }) {
    return (
        <div className="comment-overlay">
            <div className="comment-header" onClick={onClose}>
                <div className="close-bar"></div>
                <h2>Comments</h2>
            </div>

            <div className="comment-body">
                <div className="comment-list">
                    {comments.map((comment, index) => (
                        <Comment key={index} {...comment} />
                    ))}
                </div>
                <CommentInput />
            </div>
        </div>
    );
}
