import React from 'react';

export default function DiscoveryCard(props) {
  const { userImg, userName, place, location, rating, images, text, tags, timestamp } = props;

  return (
    <div className="col-12 col-md-6 col-xl-4 mb-4">
      <div className="discovery-card">
        <div className="card-header">
          <div className="user-info">
            <img src={userImg} alt={`Profile picture of ${userName}`} className="profile-pic" />
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
              <span key={idx} className={`tag ${tag.className}`}>{tag.label}</span>
            ))}
          </div>
        </div>

        <div className="card-footer">
          <div className="footer-icons">
            <span className="material-symbols-outlined">favorite</span>
            <span className="material-symbols-outlined">chat_bubble</span>
          </div>
          <span className="material-symbols-outlined bookmark-icon">bookmark</span>
        </div>

        <div className="timestamp">{timestamp}</div>
      </div>
    </div>
  );
}
