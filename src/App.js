import React from 'react';
import './App.css';

import {Switch,  Router, Route, Link } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import DogIndexPage from './pages/DogIndexPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';

import { history } from './services';
;

export const NotFound = () => {
    return (
        <div style={{ color: 'black' }}>
            <p>This is not the route youre looking for</p>


            <Link to={'/'}>Take me home James</Link>
        </div>
    );
};


function App() {
    return (
        <div className="App">
            <Router
                history={history}
            >
                <header className="App-header">
                    <Navbar/>
                </header>

                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route exact path={'/dogs'} component={DogIndexPage} />
                    <Route exact path={'/adopted-dogs'} component={() => (<DogIndexPage isAdoptedPage/>)} />
                    <Route exact path={'/signup'} component={SignUpPage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>

            <footer >
                &reg; Ding Dong Ltd 2020
            </footer>
        </div>
    );
}

export default App;
