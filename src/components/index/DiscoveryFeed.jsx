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
				{ src: "/img/timo-volz-4M25kv8v7_0-unsplash.jpg", alt: "Taipei 101 Night" }],
			text: "An iconic skyscraper with stunning city views from the observatory. The high-speed elevator is impressive, and the architecture is a must-see. The mall at the base offers luxury shopping and great dining options. It can get crowded, and ticket prices are a bit steep, but overall, a worthwhile experience if you're visiting Taipei.",
			tags: [
				{ label: "Scenic", className: "dark-pink-btn" },
				{ label: "Group-friendly", className: "" },
				{ label: "Fee required", className: "dark-blue-btn" }],
			timestamp: "Posted 2 hrs ago"
		},
		{
			userImg: "/img/hanna_pan.jpg",
			userName: "Hanna",
			place: "Cathedral of Santa Maria del Fiore",
			location: "Florence, Italy",
			rating: "4.5/5",
			images: [
				{ src: "/img/richard-gabriel-moritz-hG-M8RSJXTo-unsplash.jpg", alt: "Outside roof underview of Cathedral of Santa Maria del Fiore" },
				{ src: "/img/alex-ghizila-k5NVjNCPR48-unsplash.jpg", alt: "Paintings in the roof of the Cathedral of Santa Maria del Fiore" }],
			text: "A breathtaking symbol of Florence with its iconic dome and intricate façade. Climbing to the top offers panoramic views of the city—very worth the hike! I will caution that the stairway up is quite claustrophobic. However, the interior is beautiful, though less ornate than the outside. Lines can be long, so booking in advance is a good idea.",
			tags: [
				{ label: "Scenic", className: "dark-pink-btn" },
				{ label: "Group-friendly", className: "" },
				{ label: "Fee required", className: "dark-blue-btn" }],
			timestamp: "Posted 2 hrs ago"
		},
		{
			userImg: "/img/sinval-carvalho-K4o9sLBFdPk-unsplash.jpg",
			userName: "Justin",
			place: "Horseshoe Bend",
			location: "Page, Arizona",
			rating: "3.9/5",
			images: [
				{ src: "/img/hans-isaacson-DFfQz3e3ONg-unsplash.jpg", alt: "Taipei 101 Day" }],
			text: "Horseshoe Bend is definitely a sight to see, the view of the Colorado River curving around the sandstone is something you don’t see every day. I’m glad I went, but I wouldn’t say it was life-changing. The overlook area can get really crowded, and it was tough to find a spot without other people in the way. Also, be prepared for the short hike in the heat (bring water, sunscreen, and good shoes). Still, it’s a beautiful natural wonder and worth a quick stop if you’re nearby, just maybe not something I’d travel hours out of my way to see again.",
			tags: [
				{ label: "Scenic", className: "dark-blue-btn" },
				{ label: "Accessible", className: "dark-pink-btn" },
				{ label: "Quick stop", className: "" }],
			timestamp: "Posted 3 days ago"
		},
		{
			userImg: "/img/rizky-sabriansyah-B0Ajo9Y4bhE-unsplash.jpg",
			userName: "Lily",
			place: "Arashiyama Bamboo Grove",
			location: "Kyoto, Japan",
			rating: "4.3/5",
			images: [
				{ src: "/img/duonguyen-fsJ0basri8U-unsplash.jpg", alt: "People walking through a path with towering bamboos" },
				{ src: "/img/fynn-geerdsen-SLbdSTZBx6M-unsplash.jpg", alt: "Empty pathway with just towering bamboos" }],
			text: "Walking through the Arashiyama Bamboo Grove feels like stepping into another world. The towering bamboo stalks swaying in the breeze create such a peaceful, almost surreal atmosphere. It's a photographer's dream and a must-see if you're visiting Kyoto. The crowds during the day takes away a bit of the tranquility. I recommend going early in the morning or on a weekday. Still, totally worth the visit!",
			tags: [
				{ label: "Outdoor", className: "" },
				{ label: "Peaceful", className: "dark-blue-btn" }],
			timestamp: "Posted 10 days ago"
		},
		
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
