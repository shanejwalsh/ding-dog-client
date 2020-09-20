import React from 'react';
import { Route } from 'react-router';
import paths from './paths';

import DogIndexPage from '../pages/DogIndexPage';

export const Home = () => {
    return (
        <div style={{color: 'black'}}>
            This will be the home page
        </div>
    )
};

export default (
    <Route path='/'>
        <Route exact path={paths.home} component={Home} />
        <Route exact path={paths.dogsIndex} component={DogIndexPage} />
    </Route>
);
