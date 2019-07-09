import React from 'react';
import Card from '../Card/Card.jsx';
import './Container.css';
import PropTypes from 'prop-types';

const Container = ({ data, favoriteCard }) => {
	const findData = data.map(item => {
		return <Card info={item} key={item.created} favoriteCard={favoriteCard} />;
	});

	return <main className="card-container">{findData}</main>;
};

Container.propTypes = {
	data: PropTypes.array,
	favoriteCard: PropTypes.func
};

export default Container;
