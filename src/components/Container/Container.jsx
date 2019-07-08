import React from 'react';
import Card from '../Card/Card';
import './Container.css';
import Loading from '../Loading/Loading';

const Container = ({ data, favoriteCard }) => {
	const findData = data.map(item => {
		return <Card info={item} key={item.created} favoriteCard={favoriteCard} />;
	});

	return <main className="card-container">{findData}</main>;
};

export default Container;
