import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectMovie from '../actions/movieAction';

class Sidebar extends React.Component {
  render() {
    const { categories, mySelectMovie } = this.props;

    return (
      <aside>
        {
          categories.map((category) => (
            <div key={ category.id }>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map((movie) => (
                    <li key={ movie.id }>
                      {movie.title}
                      {' '}
                      was released in
                      {' '}
                      {movie.released}
                      <button
                        type="button"
                        onClick={ () => mySelectMovie(category, movie) }
                      >
                        Selecionar
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    );
  }
}

Sidebar.propTypes = {
  categories: PropTypes.shape.isRequired,
  mySelectMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.movieReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  mySelectMovie: (category, movie) => dispatch(selectMovie(category, movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
