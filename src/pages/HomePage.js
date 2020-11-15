import React from 'react'

import PageHeading from '../components/PageHeading';
import Link from '../components/Link';


const HomePage = () => {
    return (
        <div className="dog-index-page" style={{ padding: '3rem' }}>
            <PageHeading title={'Ding Dog'} />

            <div style={{ textAlign: 'left', width: '60%', lineHeight: 1.7 }}>
                <p>
                    Ding Dog helps you find a home for a dog that really needs
                    one.
                </p>
                <p>
                    You can browse through dogs that currently available on the
                    <Link path='/'> Dogs Trust</Link> site, save your favourites
                    and
                    <Link path='/signup'> set up alerts</Link> when new dogs become
                    available.
                </p>
                <p>
                    Or, if your heart needs warming you can browse through dogs <Link to='/adopted-dogs'>who have already found their forever homes.</Link>
                </p>
            </div>
        </div>
    );
};

export default HomePage

