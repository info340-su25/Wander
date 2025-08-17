import React from 'react';
import DiscoveryCard from './DiscoveryCard';

export default function DiscoveryFeed({ cards, onLike, onSave }) {
	const cardElements = cards.map((card) => (
		<DiscoveryCard
			key={card.id}
			{...card}
			onLike={() => onLike(card.id)}
			onSave={() => onSave(card.id)}
		/>
	));

	return (
		<section>
			<h2 className="discovery-feed">DISCOVERY FEED</h2>
			<div className="discovery-card-container">
				<div className="row g-0 px-3">
					{cardElements}
				</div>
			</div>
		</section>
	);
}
