import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Player = ({ category, movie }) => (
  <div>
    <h1>
      Categoria:
      {category.name}
    </h1>
    <h2>
      Filme:
      {movie.title}
    </h2>
  </div>
);

const mapStateToProps = (state) => ({
  category: state.movieReducer.selectedCategory,
  movie: state.movieReducer.selectedMovie,
});

Player.propTypes = {
  category: PropTypes.shape.isRequired,
  movie: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, null)(Player);
