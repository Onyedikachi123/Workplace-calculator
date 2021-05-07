import React from 'react';
import Result from './containers/Result';
import Welcome from './containers/Welcome/Welcome';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';





const Layout = props => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/search" component={Result} />
            </Switch>
        </Router>
    )
}

export default Layout;