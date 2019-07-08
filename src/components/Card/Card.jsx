import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = props => {
	const { favoriteCard, id, favorite } = props;
	return (
		<section className="card">
			<button className={`${favorite && 'active'}`} onClick={e => favoriteCard(id)}>
				<i className="fab fa-galactic-senate favorite-btn"> Favorite </i>
			</button>
			<h2>
				<span className="headers"> Name: </span> {props.name}
			</h2>
			<article>
				{props.birthyear ? (
					<h2>
						<span className="headers"> Birthyear: </span> {props.birthyear}
					</h2>
				) : null}
				{props.model ? (
					<h2>
						<span className="headers"> Model: </span> {props.model}
					</h2>
				) : null}
				{props.terrain ? (
					<h2>
						<span className="headers"> Terrain: </span> {props.terrain}
					</h2>
				) : null}
			</article>
			<article>
				{props.gender ? (
					<h2>
						<span className="headers"> Gender: </span> {props.gender}
					</h2>
				) : null}
				{props.diameter ? (
					<h2>
						<span className="headers"> Diameter: </span> {props.diameter}
					</h2>
				) : null}
				{props.class ? (
					<h2>
						<span className="headers"> Class: </span> {props.class}
					</h2>
				) : null}
			</article>

			<article>
				{props.height ? (
					<h2>
						<span className="headers"> Height: </span> {props.height}
					</h2>
				) : null}

				{props.passengers ? (
					<h2>
						<span className="headers"> Passengers: </span> {props.passengers}
					</h2>
				) : null}

				{props.population ? (
					<h2>
						<span className="headers"> Population: </span> {props.population}
					</h2>
				) : null}

				{props.eyecolor ? (
					<h2>
						<span className="headers"> Eye color: </span> {props.eyecolor}
					</h2>
				) : null}
			</article>
		</section>
	);
};

Card.propTypes = {
	props: PropTypes.string
};

export default Card;
