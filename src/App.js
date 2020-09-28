import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Root from './containers/Root';

import { history } from './services';
import routes from './routes';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar history={history} />
            </header>
            <Root routes={routes} history={history} />
        </div>
    );
}

export default App;
