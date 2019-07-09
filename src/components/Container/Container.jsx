import React from 'react';
import Card from '../Card/Card';
import './Container.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Container = ({ data, favoriteCard, handleClick, num }) => {
	const backBtn = (
		<Link to={'/'} className="back-btn">
			<i class="fab fa-jedi-order"> Home </i>
		</Link>
	);

	const findData = data.slice(0, num).map(item => {
		return <Card info={item} key={item.created} favoriteCard={favoriteCard} />;
	});

	return (
		<main className="card-container">
			{findData}
			{backBtn}
			<button className="showMoreBtn" onClick={e => handleClick(e)}>
				Show More
			</button>
		</main>
	);
};

Container.propTypes = {
	data: PropTypes.array,
	favoriteCard: PropTypes.func
};

export default Container;
