import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';

import { history } from '../services';

export default class Root extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return (
            <Router
            history={history}
            >
                {this.props.routes}
            </Router>
        );
    }
}

Root.propTypes = {
    routes: PropTypes.object,
};
