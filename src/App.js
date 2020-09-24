import React from 'react';
import './App.css';

import Root from './containers/Root';

import { navigate } from './routes/paths';
import { history } from './services';
import routes from './routes';

const style = {
    background: '#F3F2F2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: '50px',
    padding: '0 10rem',
    // color: '#000',
    fontSize: '1.5rem',
};

const linkSyle = {
    margin: '0 1rem',
    cursor: 'pointer',
};

export const NavBar = ({ history }) => {
    return (
        <div style={style}>
            <div style={linkSyle} onClick={() => navigate(history, 'home')}>
                {' '}
                Home
            </div>
            <div
                style={linkSyle}
                onClick={() => navigate(history, 'dogsIndex')}
            >
                Dogs
            </div>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar history={history} />
            </header>
            <Root routes={routes} history={history} />
        </div>
    );
}

export default App;
