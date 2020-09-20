import React, { useState, useEffect } from 'react'
import DogCardContainer from '../containers/DogCardContainer';

import * as API from '../services/API';

const DogIndexPage = props => {

    const [dogs, setDogs] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        API.getDogs()
        .then(JsonResp => {
            setDogs(JsonResp.dogs)
            setLoading(false);
        })
    }, []);

    return (
        loading ? <div>Loading...</div> :
        <div>
            <DogCardContainer
                dogs={dogs}
            />
        </div>
    );
}

export default DogIndexPage;


