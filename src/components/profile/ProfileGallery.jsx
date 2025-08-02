import React from 'react';

export default function ProfileGallery({ posts }) {
    return (
        <div className="container-fluid px-0">
            <div className="row g-0">
                {posts.map((post, idx) => (
                    <div className="col-4 col-md-3" key={idx}>
                        <img src={post.src} alt={post.alt} className="img-fluid post-img" />
                    </div>
                ))}
            </div>
        </div>
    );
}