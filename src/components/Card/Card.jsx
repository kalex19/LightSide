import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = props => {
	const { favoriteCard, info } = props;
	const cardInfo = [];
	for (let key in info) {
		if (key !== 'id' && key !== 'name' && key != 'favorite') {
			cardInfo.push(
				<p>
					{key.toUpperCase()}: {info[key]}
				</p>
			);
		}
	}
	return (
		<section className="card">
			<button onClick={e => favoriteCard(info.id)}>
				<i className={`fab fa-galactic-senate favorite-btn ${info.favorite && 'favorite'}`}> Favorite </i>
			</button>
			<h2>
				<span className="headers"> Name: </span> {info.name}
			</h2>
			{cardInfo}
		</section>
	);
};

Card.propTypes = {
	props: PropTypes.string
};

export default Card;
