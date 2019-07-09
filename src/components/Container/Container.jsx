import React from 'react';
import Card from '../Card/Card.jsx';
import './Container.css';

const Container = ({ data, favoriteCard }) => {
	console.log(data)
	const findData = data.map(item => {
		return <Card info={item} key={item.created} favoriteCard={favoriteCard} />;
	});

	return <main className="card-container"> {findData} </main>;
};

export default Container;
