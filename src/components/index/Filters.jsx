import React from 'react';

export default function Filters() {
	return (
		<section className="filters">
			<button className="filter-btn">
				<span className="material-symbols-outlined">trending_up</span> Trending
			</button>
			<button className="filter-btn dark-blue-btn">
				<span className="material-symbols-outlined">location_on</span> Nearby
			</button>
			<button className="filter-btn dark-pink-btn">
				<span className="material-symbols-outlined">filter_alt</span> Filter by
			</button>
		</section>
	);
}
