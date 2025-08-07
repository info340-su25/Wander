import React, { useState } from 'react';
import Footer from '../Footer';

function CreateNewLog(props) {
    const log = props.logData;

    const [destination, setDestination] = useState(log.destination || '');
    const [rating, setRating] = useState(log.rating || '');
    const [comments, setComments] = useState(log.comments || '');
    const [tags, setTags] = useState(log.tags || []);
    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleClick = (event) => {
        event.preventDefault();
        handleSubmit(event);
    }

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };
    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };
    const handleCommentsChange = (event) => {
        setComments(event.target.value);
    };
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setFile(files);
    };
    const handleTagChange = (event) => {
        const tags = Array.from((event.target.selectedOptions).map(option => option.value));
        setTags(tags);
    };

    return (
        <div>
            <header className="log-header">
                <nav>
                <ul>
                    <li><a href="menu.html" className="btn"><span className="material-symbols-outlined">menu</span></a></li>
                </ul>
                </nav>
            </header>

            <main className="log-container">
                <div className="log-content">

                    <h1 className="log-title">Create a new log</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="log-form">
                            <label htmlFor="destination" className="form-label">Destination</label>
                            <input type="text" id="destination" className="search-input" placeholder="Search" value={destination} onChange={handleDestinationChange} />
                        </div>

                        <div className="log-form">
                            <label htmlFor="attachments" className="form-label">Upload Attachments</label>
                            <div className="upload-box">
                                <input type="file" multiple onChange={handleFileChange} />
                                <span className="material-symbols-outlined upload-plus">add</span>
                            </div>
                        </div>

                        <div className="log-form">
                            <label htmlFor="rating" className="form-label">Give this destination a rating</label>
                            <input type="text" id="rating" className="rating-input" placeholder="Give a rating out of 5" value={rating} onChange={handleRatingChange} />
                        </div>

                        <div className="log-form">
                            <label htmlFor="comments" className="form-label">Comments</label>
                            <textarea id="comments" className="comments-textarea" placeholder="Write any comments" value={comments} onChange={handleCommentsChange} />
                        </div>

                        <div className="log-form">
                            <label htmlFor="tags" className="form-label">Tags</label>
                            <select id="tags" className="tags-select" multiple value={tags} onChange={handleTagChange}>
                                <option value="group-friendly">Group-friendly</option>
                                <option value="fee-required">Fee required</option>
                                <option value="no-fee-required">No fee required</option>
                                <option value="scenic">Scenic</option>
                                <option value="historic">Historic</option>
                                <option value="shopping-friendly">Shopping friendly</option>
                                <option value="walking-friendly">Walking friendly</option>
                                <option value="not-walking-friendly">Not walking friendly</option>
                            </select>
                        </div>

                        <button type="submit" className="post-button" onClick={handleClick}>Post</button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default CreateNewLog;