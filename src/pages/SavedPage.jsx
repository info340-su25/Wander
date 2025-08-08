import Saved from "../components/saved/Saved";

const savedData = [
    {id: 1, place: 'Taipei', alt: "View of Taipei 101 at night in Taipei, Taiwan", path: '/img/timo-volz-4M25kv8v7_0-unsplash.jpg'},
    {id: 2, place: 'Nice', alt: "Fountain park in Nice, France", path: '/img/nick-karvounis-2rsK_rdiDJ8-unsplash.jpg'},
    {id: 3, place: 'Lisbon', alt: "Tram car in Lisbon, Portugal", path: '/img/aayush-gupta-ljhCEaHYWJ8-unsplash.jpg'},
    {id: 4, place: 'Cannes', alt: "Rooftop view of Cannes port in Cannes, France", path: '/img/jim-thirion-5wSTD4OwPFo-unsplash.jpg'},
    {id: 5, place: 'London', alt: "View of Tower Bridge in London, England", path: '/img/charles-postiaux-Q6UehpkBSnQ-unsplash.jpg'}
];

export default function SavedPage({ openMenu }) {
    return <Saved savedData={savedData} openMenu={openMenu}/>;
}