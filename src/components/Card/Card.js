import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <section className="card">
            <h2>Name: {props.name || props.planet}</h2>
            <button className='favorited'><span role="img">🤩</span></button>
            <h2>Birth year: {props.birthyear}</h2>
            <h2>Gender: {props.gender}</h2>
            <h2>Height: {props.height}</h2>
            <h2>Eye color: {props.eyecolor}</h2> */}
        </section>
    )
}

Card.propTypes = {
    props: PropTypes.string
}

export default Card;