import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function DogCard({name, breed, imgSrc, location, dateAdded}) {
    return (
        <div className="dog-card">
            <h1>{name}</h1>
            <img
                src={imgSrc}
                alt={`${name}`}
                onClick={(() => alert(`${name} says foow foow!!`))}
            />
            <p>{`Added on ${dateAdded}`}</p>
        </div>
    )
}

DogCard.propTypes = {

}

export default DogCard;
