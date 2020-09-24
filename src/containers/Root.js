import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Switch } from 'react-router';

import { history } from '../services';

export default class Root extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return (
            <Router history={history}>
                <Switch>{this.props.routes}</Switch>
            </Router>
        );
    }
}

Root.propTypes = {
    routes: PropTypes.object,
};
