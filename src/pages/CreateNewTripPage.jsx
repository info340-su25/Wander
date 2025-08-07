import CreateNewTrip from "../components/create-new-trip/CreateNewTrip";

const newTripData = {
    title: 'Rome',
    destination: 'Rome',
    description: 'A week exploring the architecture, shopping, and food!',
    attractions: "Colosseum, Trevi Fountain, Pantheon, Spanish Steps, Saint Peter's Basilica",
    collaborators: 'n1coleh@uw.edu'
};

export default function CreateNewTripPage() {
    return <CreateNewTrip newTripData={newTripData}/>;
}