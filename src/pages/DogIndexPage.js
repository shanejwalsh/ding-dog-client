import React, { useState, useEffect } from 'react';
import DogCardContainer from '../containers/DogCardContainer';

import * as API from '../services/API';

const PageTitle = ({ title }) => {
    return (
        <h1
            className="page-title"
            style={{
                fontSize: '4.5rem',
                textAlign: 'left',
                marginTop: 0,
                marginBottom: '0.5em',
            }}
        >
            {title}
        </h1>
    );
};

export const Link = ({ href, alt, children }) => {
    return (
        <a
            style={{
                textDecoration: 'none',
                color: '#333333',
                borderBottom: '1.5px #25dca3 solid',
            }}
            href={href}
            alt={alt}
        >
            {children}
        </a>
    );
};

const DogIndexPage = props => {
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
            <PageTitle title={'Ding Dog'} />

            <div style={{ textAlign: 'left', width: '60%', lineHeight: 1.7 }}>
                <p>
                    Ding Dog helps you find a home for a dog that really needs
                    one.
                </p>
                <p>
                    You can browse through dogs that currently available on the
                    <Link href=""> Dogs Trust</Link> site, save your favourites
                    and
                    <Link href=""> set up alerts</Link> when new dogs become
                    available.
                </p>
                <p>
                    You can browse through dogs that currently available on the{' '}
                    <Link href="">Dogs Trust</Link> site, save your favourites
                    and{' '}
                    <Link href="">
                        who have already found their forever homes.
                    </Link>
                </p>
            </div>

            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <DogCardContainer dogs={dogs} />
                </div>
            )}
        </div>
    );
};

export default DogIndexPage;
