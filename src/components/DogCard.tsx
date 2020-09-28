import React, { useState } from 'react';

import { dateParser } from '../libs/helpers';

interface DogCardProps {
    name: string,
    breed: string,
    imgSrc: string,
    location: string,
    dateAdded: Date,
}

const DogCard: React.FunctionComponent<DogCardProps> = ({
        name,
        breed,
        imgSrc,
        location, dateAdded
    }) => {
    const [showFront, setShowFront] = useState(true);
    return (
        <div
            className="dog-card"
            style={style}
            onClick={() => setShowFront(!showFront)}
        >
            {showFront ? (
                <>
                    <img
                        loading="lazy"
                        src={imgSrc}
                        alt={`${name}`}
                        height='150px'
                    />
                    <h1>{name}</h1>
                    <p>{`Added on ${dateParser(dateAdded)}`}</p>
                </>
            ) : (
                <div>
                    <h2> {breed} </h2>
                    <p> {location}</p>
                </div>
            )}
        </div>
    );
};

const style = {
    background: '#fff',
    borderRadius: '10px',
    width: '250px',
    height: '300px',
    padding: '1rem 0',
    marginBottom: '2rem',
    boxShadow: '0px 0px 9px 1px rgb(0, 0, 0, 0.1)',
    marginRight: '15px',
    cursor: 'pointer',
};

export default DogCard;
