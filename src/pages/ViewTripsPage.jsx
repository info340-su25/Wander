import ViewTrips from "../components/view-trips/ViewTrips";
import React, { useEffect, useState } from "react";
import { db } from "../main";
import { ref, onValue, update } from 'firebase/database';
import tripsData from "../components/view-trips/viewTripData";

// const tripsData = [
//     {id: 1, place: 'Rome', alt: "Colosseum in Rome, Italy", path: '/img/david-kohler-VFRTXGw1VjU-unsplash.jpg'},
//     {id: 2, place: 'Lisbon', alt: "Tram car in Lisbon, Portugal", path: '/img/aayush-gupta-ljhCEaHYWJ8-unsplash.jpg'},
//     {id: 3, place: 'Nice', alt: "Fountain park in Nice, France", path: '/img/nick-karvounis-2rsK_rdiDJ8-unsplash.jpg'},
//     {id: 4, place: 'Tokyo', alt: "Tokyo Tower in Tokyo, Japan", path: '/img/louie-martinez-IocJwyqRv3M-unsplash.jpg'},
//     {id: 5, place: 'Phuket', alt: "Boats in blue water traveling between mountains in Phuket, Thailand", path: '/img/mike-swigunski-Of_u2aPwugw-unsplash.jpg'},
//     {id: 6, place: 'Cairo', alt: "Great Pyramids in Cairo, Egypt", path: '/img/chris-andrawes-75q9AxjIUr8-unsplash.jpg'},
//     {id: 7, place: 'Shanghai', alt: "The Bund in Shanghai, China", path: '/img/li-yang-5h_dMuX_7RE-unsplash.jpg'},
//     {id: 8, place: 'Fiji', alt: "Sandy beach in Fiji", path: '/img/nicolas-weldingh-Gg2VVz2ycAc-unsplash.jpg'}
// ];

export default function ViewTripsPage({ openMenu, trips }) {
    // const [trips, setTrips] = useState(tripsData);
    // FIREBASE GAHHHHH come back to this
    // useEffect(() => {
	// 	const tripsRef = ref(db, 'trips');
	// 	onValue(tripsRef, (snapshot) => {
	// 		const data = snapshot.val();
	// 		if (data) {
	// 			const loadedTrips = Object.entries(data).map(([key, trip]) => ({
	// 				...trip,
	// 				fbKey: key
	// 			}));
	
	// 			loadedTrips.sort((a, b) => b.id - a.id);
	// 			setTrips((prevTrips) => [loadedTrips, ...prevTrips]);
	// 		}
	// 	});
	// }, []);

    return <ViewTrips tripsData={trips} openMenu={openMenu}/>;
}