import React from 'react';
import Card from '../Card/Card.js';
import './Container.css';

const Container = ({
    data
}) => {
    const findData = data.map(item => {
        {console.log(data)}

        return <Card
<<<<<<< HEAD
            name={item.name}
            birthyear={item.birth_year}
            gender={item.gender}
            height={item.height}
            eyecolor={item.eye_color}
            model={item.model}
            terrain={item.terrain}
            diameter={item.diameter}
            population={item.population}
            class={item.vehicle_class}
            passengers={item.passengers}
=======
        name = {
            item.name
        }
        birthyear = {
            item.birth_year
        }
        gender = {
            item.gender
        }
        height = {
            item.height
        }
        eyecolor = {
            item.eye_color
        }
        model = {
            item.model
        }
        class = {
            item.vehicle_class
        }
        passengers = {
            item.passengers
        }
        favorites = {
            data.favorites
        }
>>>>>>> 69e111519ed6b53133c5c53841204500a45ca389
        />
    })
    return ( <
        main className = "card-container" > {
            findData
        } <
        /main>
    )
}

export default Container;