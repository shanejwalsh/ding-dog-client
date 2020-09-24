import React from 'react';
import PropTypes from 'prop-types';
import DogCard from '../components/DogCard';
import Paginator from '../components/Paginator';

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
        );
    });
};

const DogCardContainer = ({ dogs }) => {
    return (
        <>
            <div style={wrapperStyle}>
                <div className="dog-card-container" style={style}>
                    <Paginator
                        itemsPerPage={8}
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignContent: 'flex-end',
                        }}
                    >
                        {renderDogCards(dogs)}
                    </Paginator>
                </div>
            </div>
        </>
    );
};

const wrapperStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
};

const style = {
    padding: '3rem',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100 %',
};

export default DogCardContainer;
