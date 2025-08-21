import CreateNewTrip from "../components/create-new-trip/CreateNewTrip";
import newTripData from "../components/create-new-trip/tripData";

// const newTripData = {
//     title: 'Rome',
//     destination: 'Rome',
//     description: 'A week exploring the architecture, shopping, and food!',
//     attractions: "Colosseum, Trevi Fountain, Pantheon, Spanish Steps, Saint Peter's Basilica",
//     collaborators: 'n1coleh@uw.edu'
// };

export default function CreateNewTripPage({ openMenu, addTrip }) {
    return <CreateNewTrip newTripData={newTripData} openMenu={openMenu} addTrip={addTrip}/>;
}