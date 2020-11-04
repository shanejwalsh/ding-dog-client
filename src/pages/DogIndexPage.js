import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import DogCardContainer from '../containers/DogCardContainer';
import PageHeading from '../components/PageHeading';

import * as API from '../services/API';


const DogIndexPage = ({ isAdoptedPage }) => {

    const [dogs, setDogs] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { dogs } = await API.getDogs();
                setDogs(dogs)
                setLoading(false);

            } catch(error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="dog-index-page" style={{ padding: '3rem' }}>
            <PageHeading title={'Ding Dog'} />

            <div style={{ textAlign: 'left', width: '60%', lineHeight: 1.7 }}>
                <p>
                    Ding Dog helps you find a home for a dog that really needs
                    one.
                </p>

                {
                    window.location.pathname === '/adopted-dogs'
                    ?
                    <p>
                        Definitely alive dogs
                    </p>
                    :
                    <p>
                        These dogs currently need to find their forever homes.
                        Click on any dog for more information and to arrange an appointment to view or  adopt.
                    </p>
                }
            </div>

            {loading ? (
                <Loading/>
            ) : (
                <div>
                    <DogCardContainer dogs={dogs} showAdopted={isAdoptedPage} />
                </div>
            )}
        </div>
    );
};

export default DogIndexPage;
