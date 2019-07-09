import React from 'react';
import '../Card/Card.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

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

Favorites.propTypes = {
	info: PropTypes.object,
	key: PropTypes.number,
	favoriteCard: PropTypes.func
};

export default Favorites;
