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
    width: 375px;
    /* height: 300px; */
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 0px 9px 1px rgb(0, 0, 0, 0.1);
    cursor: pointer;
`;

const DogCard = ({ name, breed, imgSrc, location, dateAdded, isAdopted, adoptedAt }: T) => {
    const [showFront, setShowFront] = useState(true);

    return (
        <Card className="dog-card" onClick={() => setShowFront(!showFront)}>
            {showFront ? (
                <>
                    <div className="card-header" style={{  width: '50%' }}>
                        <img

                                    loading="lazy"

                                           src={imgSrc}

                             alt={`${name}`}

                                    height="150px"

                                           style={{  maxWidth: '100%'  }}

                        />
                    </div>
                    <div className="card-body">
                        <h1>{name}</h1>
                        <h3> {breed} </h3>
                        {isAdopted ? (
                            <p>{`Apopted on ${dateParser(adoptedAt)}`}</p>
                        ) : (
                            <p>{`Added on ${dateParser(dateAdded)}`}</p>
                        )}
                    </div>
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
