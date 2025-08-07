import React, { useState } from 'react';
import CommentOverlay from '../comments/CommentOverlay';

export default function DiscoveryCard(props) {
	const { userImg, userName, place, location, rating, images, text, tags, timestamp, likes, liked, saved, onLike, onSave } = props;
	const [showComments, setShowComments] = useState(false);

	const dummyComments = [
		{profileImg: '/img/nicole.jpeg',
			username: 'nicoleham_',
			text: 'Taipei was so fun!!'},
		{profileImg: '/img/hanna_pan.jpg',
			username: 'hannapan',
			text: 'Wow!! This looks so awesome :)) Glad you had fun'}];

	let likeClass = 'material-symbols-outlined like-icon';
	if (liked) {
		likeClass += ' liked';
	}

	let bookmarkClass = 'material-symbols-outlined bookmark-icon';
	if (saved) {
		bookmarkClass += ' saved';
	}

	const handleOpenComments = () => {
		setShowComments(true);
	};
	
	return (
		<div className="col-12 col-md-6 col-xl-4 mb-4">
			<div className="discovery-card">
				<div className="card-header">
					<div className="user-info">
						<img src={userImg} alt={"Profile picture of " + userName} className="profile-pic" />
						<div className="user-text">
						<p><strong>{userName}</strong> reviewed <strong>{place}</strong></p>
						<p className="location"><span className="material-symbols-outlined">location_on</span>{location}</p>
						</div>
					</div>
					<div className="rating">{rating}</div>
				</div>

				<div className="card-body">
					<div className="card-images">
						{images.map((img, idx) => (
							<img key={idx} src={img.src} alt={img.alt} />
						))}
					</div>
					<p className="card-text">{text}</p>
					<div className="tags">
						{tags.map((tag, idx) => (
							<span key={idx} className={'tag ' + tag.className}>{tag.label}</span>
						))}
					</div>
				</div>

				<div className="card-footer">
					<div className="footer-icons">
						<button className={likeClass} onClick={onLike} aria-label="Like post">
							favorite
						</button>
						<button className="material-symbols-outlined chat-icon" onClick={handleOpenComments} aria-label="View comments" >
							chat_bubble
						</button>
					</div>
					<button className={bookmarkClass} onClick={onSave} aria-label="Save post">
						bookmark
					</button>
				</div>

				<div className="timestamp">{timestamp}</div>
			</div>

			{showComments && (<CommentOverlay comments={dummyComments} onClose={() => setShowComments(false)} />)}
		</div>
	);
}
