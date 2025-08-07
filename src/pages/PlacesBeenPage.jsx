import PlacesBeen from "../components/places-been/PlacesBeen";

const placesBeenData = [
    {id: 1, place: 'Florence', alt: "Cathedral of Santa Maria del Fiore in Florence, Italy", path: '/img/alex-ghizila-k5NVjNCPR48-unsplash.jpg'},
    {id: 2, place: 'Shanghai', alt: "The Bund in Shanghai, China", path: '/img/li-yang-5h_dMuX_7RE-unsplash.jpg'}
];

export default function PlacesBeenPage() {
    return <PlacesBeen placesBeenData={placesBeenData} />;
}