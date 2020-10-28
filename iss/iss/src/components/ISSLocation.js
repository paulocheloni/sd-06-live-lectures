import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import { fetchISSLocation } from '../actions';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;
    const API_FETCH_INTERVAL = 2000;

    this.timer = setInterval(
      getCurrentISSLocation,
      API_FETCH_INTERVAL,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      error,
      isFetching,
      latitude,
      longitude,
    } = this.props;
    const isLocationPresent = latitude && longitude;
    const CENTER_OF_COORDINATES = 0;

    return (
      <div>
        <div className="map">
          <Map
            center={ [CENTER_OF_COORDINATES, CENTER_OF_COORDINATES] }
            defaultWidth={ 700 }
            height={ 450 }
            minZoom={ 1 }
            maxZoom={ 8 }
            zoom={ 1 }
          >
            {
              !isFetching
              && isLocationPresent
              && <Marker anchor={ [latitude, longitude] } />
            }
          </Map>
        </div>
        {isFetching && 'Loading...'}
        {
          !isFetching
          && isLocationPresent
          && `Current ISS location: latitude = ${latitude}, longitude = ${longitude}`
        }
        {!isFetching && error}
      </div>
    );
  }
}

const mapStateToProps = ({
  issLocation: {
    error,
    isFetching,
    latitude,
    longitude,
  },
}) => (
  {
    error,
    isFetching,
    latitude,
    longitude,
  }
);

const mapDispatchToProps = (dispatch) => ({
  getCurrentISSLocation: () => dispatch(fetchISSLocation()),
});

ISSLocation.propTypes = {
  error: PropTypes.string,
  getCurrentISSLocation: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

ISSLocation.defaultProps = {
  error: null,
  latitude: null,
  longitude: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
