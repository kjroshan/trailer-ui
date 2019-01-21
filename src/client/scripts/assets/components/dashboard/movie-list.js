import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import MovieLinkCard from './movie-link-card';

class MovieList extends PureComponent {
    renderMovieLinks(movies) {
        return map(movies, (movie) => {
            return (
                <li className="" key={movie.id}>
                    <MovieLinkCard movie={movie} />
                </li>
            );
        });
    }

    render() {
        const { movies } = this.props;

        return (
            <div id="movie-list" className="">
                <section className="">
                    <div className="">
                        <ul style={{ listStyle: 'none', margin: '0 -20px 0 0', boxSizing: 'border-box' }}>
                            {this.renderMovieLinks(movies)}
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

MovieList.propTypes = {
    movies: PropTypes.instanceOf(Array).isRequired
};

export default MovieList;
