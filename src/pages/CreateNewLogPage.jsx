import React from "react";
import CreateNewLog from "../components/create-new-log/CreateNewLog";

const logData = {
    destination: 'Shanghai',
    rating: '4.5',
    comments: 'Beautiful city and night life!! Food is to die for. Make sure to bring a hand fan because it can get super hot.',
    tags: ['scenic', 'walking-friendly']
};

export default function CreateNewLogPage({ openMenu, addCard }) {
    return <CreateNewLog logData={logData} openMenu={openMenu} addCard={addCard}/>;
}  