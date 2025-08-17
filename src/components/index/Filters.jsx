import React, { useState } from 'react';

export default function Filters({ selectedTag, setSelectedTag, showTrending, setShowTrending }) {
	const [showTags, setShowTags] = useState(false);

	const allTags = [
		"Scenic",
		"Group-friendly",
		"Fee required",
		"Accessible",
		"Quick stop",
		"Outdoor",
		"Peaceful"
	];

	function toggleTrending() {
		setShowTrending((prev) => !prev);
	}

	function toggleTagPanel() {
		setShowTags((prev) => !prev);
	}

	function handleTagClick(tag) {
		if (selectedTag === tag) {
			setSelectedTag(null);
		} else {
			setSelectedTag(tag);
		}
	}

	let trendingBtnClass = "filter-btn";
	if (showTrending) {
		trendingBtnClass += " dark-blue-btn";
	}

	let tagButtons = null;
	if (showTags) {
		tagButtons = (
			<div className="tag-scroll-container">
				{allTags.map((tag) => {
					let className = "filter-btn dark-pink-btn";
					if (selectedTag === tag) {
						className += " active";
					}

					return (
						<button
							key={tag}
							className={className}
							onClick={() => handleTagClick(tag)}
						>
							{tag}
						</button>
					);
				})}
			</div>
		);
	}

	return (
		<section className="filters">
			<button className={trendingBtnClass} onClick={toggleTrending}>
				<span className="material-symbols-outlined">trending_up</span> Trending
			</button>

			<button className="filter-btn" disabled>
				<span className="material-symbols-outlined">location_on</span> Nearby
			</button>

			<button className="filter-btn dark-pink-btn" onClick={toggleTagPanel}>
				<span className="material-symbols-outlined">filter_alt</span> Filter by
			</button>

			{selectedTag && (
				<button className="filter-btn selected-tag-btn" onClick={() => setSelectedTag(null)}>
					<span className="selected-tag-text">{selectedTag}</span>
					<span className="material-symbols-outlined close-icon">close</span>
				</button>
			)}

			{tagButtons}
		</section>
	);
}
