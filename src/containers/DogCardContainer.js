import React from 'react';
import DogCard from '../components/DogCard';
import Paginator from '../components/Paginator';
import styled from 'styled-components';

const Container = styled.div`
    margin-left: 3rem;
`;

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
            <div>
                <Container className="dog-card-container">
                    <Paginator
                        itemsPerPage={8}
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1.25rem',
                        }}
                    >
                        {renderDogCards(dogs)}
                    </Paginator>
                </Container>
            </div>
        </>
    );
};

export default DogCardContainer;
