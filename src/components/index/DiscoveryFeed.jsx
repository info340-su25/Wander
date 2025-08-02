import React from 'react';
import DiscoveryCard from './DiscoveryCard';

export default function DiscoveryFeed() {
  const cardData = [
    {
      userImg: "/img/nicole.jpeg",
      userName: "Nicole",
      place: "Taipei 101",
      location: "Taipei, Taiwan",
      rating: "4.6/5",
      images: [
        { src: "/img/vas-qhu2nFWqVEU-unsplash.jpg", alt: "Taipei 101 Day" },
        { src: "/img/timo-volz-4M25kv8v7_0-unsplash.jpg", alt: "Taipei 101 Night" },
      ],
      text: "An iconic skyscraper with stunning city views from the observatory. The high-speed elevator is impressive, and the architecture is a must-see. The mall at the base offers luxury shopping and great dining options. It can get crowded, and ticket prices are a bit steep, but overall, a worthwhile experience if you're visiting Taipei.",
      tags: [
        { label: "Scenic", className: "dark-pink-btn" },
        { label: "Group-friendly", className: "" },
        { label: "Fee required", className: "dark-blue-btn" },
      ],
      timestamp: "Posted 2 hrs ago"
    },
    // You can add more cards here...
  ];

  return (
    <section>
      <h2 className="discovery-feed">DISCOVERY FEED</h2>
      <div className="discovery-card-container">
        <div className="row g-0 px-3">
          {cardData.map((card, index) => (
            <DiscoveryCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
