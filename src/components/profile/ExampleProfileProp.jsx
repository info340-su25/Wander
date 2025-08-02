import Profile from './components/Profile/Profile';

const profileData = {
    name: 'Hanna',
    user: {
        name: 'Hanna',
        username: 'hannapan',
        image: '/img/hanna_pan.jpg'},
    stats: {
        posts: 4,
        followers: 168,
        following: 168},
    posts: [
        {src: '/img/richard-gabriel-moritz-hG-M8RSJXTo-unsplash.jpg',
            alt: 'Outside roof underview of Cathedral of Santa Maria del Fiore'},
        {src: '/img/alex-ghizila-k5NVjNCPR48-unsplash.jpg',
            alt: 'Paintings in the roof of the Cathedral of Santa Maria del Fiore'},
        {src: '/img/duonguyen-fsJ0basri8U-unsplash.jpg',
            alt: 'People walking through a path with towering bamboos'},
        {src: '/img/fynn-geerdsen-SLbdSTZBx6M-unsplash.jpg',
            alt: 'Empty pathway with just towering bamboos'},
    ],
};

<Profile profileData={profileData} />
