import React, { useState } from 'react';

function CreateNewTrip(props) {
    const newTripData = props.newTripData;

    const [title, setTitle] = useState(newTrip.title || '');
    const [destination, setDestination] = useState(newTripData.destination || '');
    const [description, setDescription] = useState(newTripData.description || '');
    const [attractions, setAttractions] = useState(newTripData.attractions || []);
    const [collaborators, setCollaborators] = useState(newTripData.collaborators || '');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleClick = (event) => {
        event.preventDefault();
        handleSubmit(event);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    };
    const handleDestinationChange = (event) => {
        setDestination(event.target.value)
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    };
    const handleAttractionsChange = (event) => {
        setAttractions(event.target.value)
    };
    const handleCollaboratorsChange = (event) => {
        setCollaborators(event.target.value)
    };

    return (
        <div>
            <header className="trip-header">
                <nav>
                    <ul>
                        <li><a href="menu.html" className="btn"><span className="material-symbols-outlined">menu</span></a></li>
                    </ul>
                </nav>
            </header>

            <main className="trip-content">
                <h1 className="trip-title">Create a new trip</h1>

                <form onSubmit={handleSubmit}>

                    <div className="trip-form">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="title-input" placeholder="Enter a title" value={title} onChange={handleTitleChange}/>
                    </div>

                    <div className="trip-form">
                        <label htmlFor="destination" className="form-label">Destination</label>
                        <input type="text" className="search-input" placeholder="Search" value={destination} onChange={handleDestinationChange}/>
                    </div>


                    <div className="trip-form">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="comments-textarea" placeholder="Add a short description" value={description} onChange={handleDescriptionChange}/>
                    </div>

                    <div className="trip-form">
                        <label htmlFor="add-attractions" className="form-label">Add Attractions</label>
                        <input type="text" className="search-input" placeholder="Search" value={attractions} onChange={handleAttractionsChange}/>
                    </div>

                    <div className="trip-form">
                        <label htmlFor="collaborators" className="form-label">Invite Collaborators</label>
                        <input type="text" className="invite-input" placeholder="Enter an email" value={collaborators} onChange={handleCollaboratorsChange} />
                    </div>

                    <button type="submit" className="add-button" onClick={handleClick}>Add</button>
                </form>
            </main>

            <Footer />
        </div>
    );
}

export default CreateNewTrip;