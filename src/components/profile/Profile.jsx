import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfileGallery from './ProfileGallery';
import Footer from '../Footer';

export default function Profile(props) {
    const profileData = props.profileData;

    return (
        <>
            <header>
                <h1>Wander</h1>
                <nav>
                    <ul>
                        <li>
                        <a href="/menu.html" className="btn">
                            <span className="material-symbols-outlined">menu</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </header>

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
