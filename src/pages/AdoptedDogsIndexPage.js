import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import DogCardContainer from '../containers/DogCardContainer';
import Link from '../components/Link';
import PageHeading from '../components/PageHeading';

import * as API from '../services/API';

const AdoptedDogIndexPage = () => {
    const [dogs, setDogs] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const localDogs = window.sessionStorage.getItem('_dog_informations');
        if (localDogs) {
            setDogs(JSON.parse(localDogs));
            setLoading(false);
        } else {
            API.getDogs()
                .then(JsonResp => {
                    setDogs(JsonResp.dogs);
                    window.sessionStorage.setItem(
                        '_dog_informations',
                        JSON.stringify(JsonResp.dogs)
                    );
                    setLoading(false);
                })
                .catch(error => {
                    // show error component
                    console.log(error);
                });
        }
    }, []);

    return (
        <div className="dog-index-page" style={{ padding: '3rem' }}>
            <PageHeading title={'Ding Dog'} />

            <div style={{ textAlign: 'left', width: '60%', lineHeight: 1.7 }}>
                <p>
                    Ding Dog helps you find a home for a dog that really needs
                    one.
                </p>
                <p>
                    These very good boys have already found their homes and are definitely not dead!
                </p>
            </div>

            {loading ? (
                <Loading loadingColor={'yellow'}/>
            ) : (
                <div>
                    <DogCardContainer dogs={dogs} showAdopted />
                </div>
            )}
        </div>
    );
};

export default AdoptedDogIndexPage;