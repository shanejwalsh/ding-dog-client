import React from 'react';
import DogCard from '../components/DogCard';
import Paginator from '../components/Paginator';
import styled from 'styled-components';

const Container = styled.div`
    margin-left: 3rem;
`;

const renderDogCards = (dogs = []) => {
    return dogs.map(dog => {
        const {
             _id,
             imgSrc,
             name,
             location,
             breed,
             addedAt,
             isAdopted,
             adoptedAt
        } = dog;

        return (
            <DogCard
                key={_id}
                location={location}
                name={name}
                imgSrc={imgSrc}
                breed={breed}
                dateAdded={addedAt}
                isAdopted={isAdopted}
                adoptedAt={adoptedAt}
                onClick={name}
            />
        );
    });
};

const DogCardContainer = ({ dogs, showAdopted }) => {

    const dogsToDisplay = showAdopted ?
        dogs.filter(dog => dog.isAdopted)
        : dogs.filter(dog => !dog.isAdopted);

    return (
        <>
            <div>
                <Container className="dog-card-container">
                    <Paginator
                        itemsPerPage={10}
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1.25rem',
                        }}
                    >
                        {renderDogCards(dogsToDisplay)}
                    </Paginator>
                </Container>
            </div>
        </>
    );
};

export default DogCardContainer;
