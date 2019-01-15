import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function MovieLinkCard(props) {
    const { movie } = props;
    const link = `/pc-se/film/${movie.id}`;
    return (
        <div>
            <NavLink to={link}>
                <img alt={movie.title} src={movie.url} className="" />
            </NavLink>
        </div>
    );
}

MovieLinkCard.propTypes = {
    movie: PropTypes.string.isRequired
};
