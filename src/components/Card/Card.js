import React from 'react';
import './Card.css';

const Card = props => {
	return (
		<section className="card">
			<h2> Name: {props.name || props.planet} </h2>
			<i class="fab fa-galactic-senate" />
			<h2> Birth year: {props.birthyear} </h2> <h2> Gender: {props.gender} </h2> <h2> Height: {props.height} </h2>{' '}
			<h2> Eye color: {props.eyecolor} </h2>{' '}
		</section>
	);
};

export default Card;
