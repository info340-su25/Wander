import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfileGallery from './ProfileGallery';
import Footer from '../Footer';
import Header from '../index/Header';

export default function Profile(props) {
    const profileData = props.profileData;

    return (
        <>
            <Header openMenu={props.openMenu} />

            <main className="container text-center profile-body">
                <h1>{profileData.name}</h1>
                <ProfileHeader user={profileData.user} />
                <ProfileStats stats={profileData.stats} />
                <ProfileGallery posts={profileData.posts} />
            </main>

            <Footer />
        </>
    );
}
