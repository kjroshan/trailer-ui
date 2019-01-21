import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import store from '../../store';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import TrailerController from '../controllers/trailer-controller';
import DashboardController from '../controllers/dashboard-controller';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/pc-se/film/:movieId"
                            render={({ match }) => (
                                <TrailerController movieId={match.params.movieId} key={match.params.movieId} />
                            )}
                        />
                        <Route path="/" component={DashboardController} />
                    </Switch>
                    <Footer />
                </div>
            </Provider>
        );
    }
}

