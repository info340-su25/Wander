import React, { useState, useEffect } from 'react'; 
import Header from '../components/index/Header';
import SearchBar from '../components/index/SearchBar';
import Filters from '../components/index/Filters';
import DiscoveryFeed from '../components/index/DiscoveryFeed';
import Footer from '../components/Footer';
import { ref, onValue, update } from 'firebase/database';
import { db } from '../main';

export default function Home({ openMenu }) {
	const [cards, setCards] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedTag, setSelectedTag] = useState(null);
	const [showTrending, setShowTrending] = useState(false);

	useEffect(() => {
		const cardsRef = ref(db, 'cards');
		onValue(cardsRef, (snapshot) => {
			const data = snapshot.val();
			if (data) {
				const loadedCards = Object.entries(data).map(([key, card]) => ({
					...card,
					fbKey: key
				}));
	
				loadedCards.sort((a, b) => b.id - a.id);
				setCards(loadedCards);
			}
		});
	}, []);
	
	function toggleLike(id) {
		const updated = [];
	
		for (const card of cards) {
			if (card.id === id) {
				const updatedCard = { ...card };
				updatedCard.liked = !updatedCard.liked;
				updatedCard.likes += updatedCard.liked ? 1 : -1;
	
				const cardRef = ref(db, `cards/${card.fbKey}`);
				update(cardRef, {
					liked: updatedCard.liked,
					likes: updatedCard.likes
				});
	
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
	
				const cardRef = ref(db, `cards/${card.fbKey}`);
				update(cardRef, {
					saved: updatedCard.saved
				});
	
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
