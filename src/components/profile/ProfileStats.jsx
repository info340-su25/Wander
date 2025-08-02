import React from 'react';

export default function ProfileStats({ stats }) {
    return (
        <div className="stats-bar">
            <div className="stat">
                <strong>{stats.posts}</strong>
                <div>Posts</div>
            </div>
            <div className="stat">
                <strong>{stats.followers}</strong>
                <div>Followers</div>
            </div>
            <div className="stat">
                <strong>{stats.following}</strong>
                <div>Following</div>
            </div>
        </div>
    );
}
