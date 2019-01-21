import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieList from '../components/dashboard/movie-list';
import { fetchMovies } from '../../store/actions';

class DashboardController extends PureComponent {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <MovieList movies={this.props.movies} />
        );
    }
}

DashboardController.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.instanceOf(Array)
};

DashboardController.defaultProps = {
    movies: []
};

const mapStateToProps = state => ({
    movies: state.appStore.movies
});

export default connect(mapStateToProps, { fetchMovies })(DashboardController);
