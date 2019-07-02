import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <section className="card">
            <h2>Name: {props.name}</h2>
            {console.log(props.terrain)}
            <button className='favorited'><span role="img">🤩</span></button>
            <h2>{props.birthyear || props.terrain || props.model}</h2>
            <h2>{props.gender || props.diameter || props.vehicle_class}</h2>
            <h2>{props.height || props.population || props.passengers}</h2>
            <h2>{props.eyecolor}</h2> */}
        </section>
    )
}

Card.propTypes = {
    props: PropTypes.string
}

export default Card;