import React from 'react';
import { Route, Switch } from 'react-router';
import Link from '../components/Link';
import paths from './paths'

import DogIndexPage from '../pages/DogIndexPage';
import HomePage from '../pages/HomePage'

export const NotFound = () => {
    return (
        <div style={{ color: 'black' }}>
            <p>This is not the route youre looking for</p>


            <Link>Take me home James</Link>
        </div>
    );
};

export default (
    <Switch>
        <Route exact path={paths.home} component={HomePage} />
        <Route exact path={paths.dogsIndex} component={DogIndexPage} />
        <Route component={NotFound} />
    </Switch>
);
