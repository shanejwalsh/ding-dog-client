import React from 'react'
import PropTypes from 'prop-types'
import DogCard from '../components/DogCard';

const renderDogCards = (dogs = []) => {
    return dogs.map(dog => {
        const { _id, imgSrc, name, location, breed, addedAt } = dog;
        return (
            <DogCard
                key={_id}
                location={location}
                name={name}
                imgSrc={imgSrc}
                breed={breed}
                dateAdded={addedAt}
                onClick={name}
             />
    )
    });
};

const DogCardContainer = ({ dogs }) => {
    return renderDogCards(dogs)
};

DogCardContainer.propTypes = {

};

export default DogCardContainer

