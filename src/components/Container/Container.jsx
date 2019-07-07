import React from 'react';
import Card from '../Card/Card';
import './Container.css';

const Container = ({ data, favorites }) => {
	this.favoriteCard = e => {
		console.log(e);
		favorites(e);
	};
	const findData = data.map(item => {
		return (
			<Card
				name={item.name}
				birthyear={item.birth_year}
				terrain={item.terrain}
				diameter={item.diameter}
				population={item.population}
				gender={item.gender}
				height={item.height}
				eyecolor={item.eye_color}
				model={item.model}
				class={item.vehicle_class}
				passengers={item.passengers}
				favorites={data.favorites}
				id={Date.now()}
				favoriteCard={this.favoriteCard}
			/>
		);
	});

	return <main className="card-container"> {findData} </main>;
};

export default Container;
