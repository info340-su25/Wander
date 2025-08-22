import React, { useEffect, useState } from 'react';
import Saved from "../components/saved/Saved";
import { db } from '../main';
import { ref, onValue } from 'firebase/database';
import savedData from '../components/saved/savedData';


export default function SavedPage({ openMenu }) {
    const [combinedSavedCards, setCombinedSavedCards] = useState(savedData);

    useEffect(() => {
        const cardRef = ref(db, 'cards');
        onValue(cardRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedCards = Object.entries(data).map(([key, card]) => ({
                    ...card,
                    fbKey: key
                }));

                const saved = loadedCards.filter(card => card.saved === true);

                const filtered = saved.filter(
                    (card) => !savedData.some((s) => s.place === card.place)
                );

                setCombinedSavedCards([...filtered, ...savedData]);
            }
        });
    }, []);

    return <Saved savedData={combinedSavedCards} openMenu={openMenu}/>;
}