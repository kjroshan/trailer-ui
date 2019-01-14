import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import store from '../../store';
import Header from '../components/header';
import Footer from '../components/footer';
import MovieInfo from '../components/movie-info';
import MovieList from '../components/movie-list';

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
                                <MovieInfo movieId={match.params.movieId} key={match.params.movieId} />
                            )}
                        />
                        <Route path="/" component={MovieList} />

                    </Switch>
                    <Footer />
                </div>
            </Provider>
        );
    }
}

