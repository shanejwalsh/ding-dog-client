import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { dateParser } from '../libs/helpers';

function DogCard({name, breed, imgSrc, location, dateAdded}) {

    const [showFront, setShowFront] = useState(true)
    return (
        <div className="dog-card" style={style} onClick={() => setShowFront(!showFront)}  >
            {
                showFront ?
                <>
                    <img
                        loading='lazy'
                        style={{ height: '150px'}}
                        // data-src={imgSrc}
                        src={imgSrc}
                        alt={`${name}`}
                    />
                    <h1>{name}</h1>
                    <p>{`Added on ${dateParser(dateAdded)}`}</p>
                </>
                :
                <div>
                <h2> {breed}  </h2>
                <p> {location}</p>
            </div>
            }
        </div>
    )
}

DogCard.propTypes = {
    name: PropTypes.string,
    breed: PropTypes.string,
    imgSrc: PropTypes.string,
    location: PropTypes.string,

}

const style = {
    background: '#fff',
    borderRadius: '10px',
    width: '250px',
    // maxHeight: '5rem',
    padding: '1rem 0',
    marginBottom: '2rem',
    boxShadow: '0px 0px 9px 1px rgb(0, 0, 0, 0.1)',
    marginRight: '15px',
    cursor: 'pointer',
};

export default DogCard;
