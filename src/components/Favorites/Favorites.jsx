import React from 'react';
import 'Card.css';

const Favorites = ({ favorites }) => {
	const showfavorites = favorites.map(fav => {
		return (
			<Card
				name={fav.name}
				birthyear={fav.birth_year}
				terrain={fav.terrain}
				diameter={fav.diameter}
				population={fav.population}
				gender={fav.gender}
				height={fav.height}
				eyecolor={fav.eye_color}
				model={fav.model}
				class={fav.vehicle_class}
				passengers={fav.passengers}
			/>
		);
	});

	return (
		<main className="card-container">
			{!favorites.length && <h1>No Favorites Available</h1>}
			{favorites.length && showfavorites}
		</main>
	);
};

export default Favorites;
