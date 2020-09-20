import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { dateParser } from '../libs/helpers';

function DogCard({name, breed, imgSrc, location, dateAdded}) {
    return (
        <div className="dog-card" style={style}>
            <img
                style={{ maxHeight: '150px'}}
                src={imgSrc}
                alt={`${name}`}
                />
            <h1>{name}</h1>
            <p>{`Added on ${dateParser(dateAdded)}`}</p>
        </div>
    )
}

DogCard.propTypes = {

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
};

export default DogCard;
