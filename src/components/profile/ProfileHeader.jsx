import React from 'react';

export default function ProfileHeader({ user }) {
    return (
        <div className="profile-header">
            <img src={user.image} alt={'Profile picture of ' + user.name} className="main-profile-pic rounded-circle" />
            <h2 className="username">@{user.username}</h2>
        </div>
    );
}
