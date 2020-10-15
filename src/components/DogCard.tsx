import React, { useState } from 'react';
import styled from 'styled-components';

import { dateParser } from '../libs/helpers';

interface T {
    name: string;
    breed: string;
    imgSrc: string;
    location: string;
    isAdopted: boolean;
    dateAdded: Date;
    adoptedAt: Date;
};

const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    width: 250px;
    height: 300px;
    padding: 1rem 0;
    margin-bottom: 2rem;
    box-shadow: 0px 0px 9px 1px rgb(0, 0, 0, 0.1);
    cursor: pointer;
`;

const DogCard = ({ name, breed, imgSrc, location, dateAdded, isAdopted, adoptedAt  }: T) => {

    console.log('%cDogCard.tsx line:29 isAdopted', 'color: #007acc;', isAdopted);
    const [showFront, setShowFront] = useState(true);

    return (
        <Card className="dog-card" onClick={() => setShowFront(!showFront)}>
            {showFront ? (
                <>
                    <img loading="lazy" src={imgSrc} alt={`${name}`} height="150px" />
                    <h1>{name}</h1>
                    <h3> {breed} </h3>
                    {
                        isAdopted ?
                        <p>{`Apopted on ${dateParser(adoptedAt)}`}</p>

                        : <p>{`Added on ${dateParser(dateAdded)}`}</p>

                    }
                </>
            ) : (
                <Card>
                    <h2> {breed} </h2>
                    <p> {location}</p>
                </Card>
            )}
        </Card>
    );
};

export default DogCard;
