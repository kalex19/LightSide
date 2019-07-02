import React from 'react';
import Card from '../Card/Card.js';
import './Container.css';

const Container = ({data}) => {
    const findData = data.map(item => {
        return <Card
            name={item.name}
            birthyear={item.birth_year}
            gender={item.gender}
            height={item.height}
            eyecolor={item.eye_color}
            model={item.model}
            class={item.vehicle_class}
            passengers={item.passengers}
            
        />
    })
    return(
        <main>
            {findData}
        </main>
    )
}

export default Container;