import React from 'react';
import '../Card/Card.css';
import Card from '../Card/Card';

const Favorites = ({ favorites, favoriteCard }) => {
	const showfavorites = favorites.map(fav => {
		return <Card info={fav} key={fav.created} favoriteCard={favoriteCard} />;
	});

	return (
		<main className="card-container">
			{!favorites.length ? <h2 className="no-favorites">No Favorites Available</h2> : showfavorites}
		</main>
	);
};

export default Favorites;
