import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { fetchMovies } from '../../store/actions';

class MovieList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        const { movies } = this.props;

        return (
            <div id="movie-list" className="">
                <section className="">
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="">
                                    <ul style={{ listStyle: 'none', margin: '0 -20px 0 0', boxSizing: 'border-box' }}>
                                        {
                                            map(movies, (movie) => {
                                                const link = `/pc-se/film/${movie.id}`;
                                                return (
                                                    <li className="" key={movie.id}>
                                                        <div>
                                                            <NavLink to={link}>
                                                                <img alt={movie.title} src={movie.url} className="" />
                                                            </NavLink>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

MovieList.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.instanceOf(Array).isRequired
};

const mapStateToProps = state => ({
    movies: state.appStore.movies
});

export default connect(mapStateToProps, { fetchMovies })(MovieList);
