import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from '../components/index/Header';
import SearchBar from '../components/index/SearchBar';
import Filters from '../components/index/Filters';
import DiscoveryFeed from '../components/index/DiscoveryFeed';
import Footer from '../components/Footer';
import fullCardData from '../components/index/cardData';

export default function Home({ openMenu, cards, setCards }) {
	// const [cards, setCards] = useState(fullCardData);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedTag, setSelectedTag] = useState(null);
	const [showTrending, setShowTrending] = useState(false);

	function toggleLike(id) {
		const updated = [];

		for (const card of cards) {
			if (card.id === id) {
				const updatedCard = { ...card };
				if (updatedCard.liked) {
					updatedCard.liked = false;
					updatedCard.likes -= 1;
				} else {
					updatedCard.liked = true;
					updatedCard.likes += 1;
				}
				updated.push(updatedCard);
			} else {
				updated.push(card);
			}
		}

		setCards(updated);
	}

	function toggleSave(id) {
		const updated = [];

		for (const card of cards) {
			if (card.id === id) {
				const updatedCard = { ...card };
				updatedCard.saved = !updatedCard.saved;
				updated.push(updatedCard);
			} else {
				updated.push(card);
			}
		}

		setCards(updated);
	}

	// Filtering logic
	const filteredCards = [];
	for (const card of cards) {
		let matchesTag = true;
		if (selectedTag !== null) {
			matchesTag = false;
			for (const tag of card.tags) {
				if (tag.label === selectedTag) {
					matchesTag = true;
					break;
				}
			}
		}

		let matchesSearch = true;
		const lowerSearch = searchTerm.toLowerCase();
		if (
			!card.place.toLowerCase().includes(lowerSearch) &&
			!card.location.toLowerCase().includes(lowerSearch) &&
			!card.text.toLowerCase().includes(lowerSearch)
		) {
			matchesSearch = false;
		}

		if (matchesTag && matchesSearch) {
			filteredCards.push(card);
		}
	}

	let displayedCards = filteredCards;
	if (showTrending) {
		displayedCards = [...filteredCards].sort((a, b) => b.likes - a.likes);
	}

	return (
		<>
			<Header openMenu={openMenu} />
			<main>
				<SearchBar search={searchTerm} setSearch={setSearchTerm} />
				<Filters
					selectedTag={selectedTag}
					setSelectedTag={setSelectedTag}
					showTrending={showTrending}
					setShowTrending={setShowTrending}
				/>
				<DiscoveryFeed cards={displayedCards} onLike={toggleLike} onSave={toggleSave} />
			</main>
			<Footer />
		</>
	);
}
