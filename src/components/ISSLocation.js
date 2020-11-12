import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import Overlay from 'pigeon-overlay';

import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';
import loadingImg from '../assets/loading.svg';

import { fetchISSLocation } from '../actions';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;

    this.timer = setInterval(
      getCurrentISSLocation,
      2000,
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

    return (
      <div>
        <div className="map">
          <Map
            center={[0, 0]}
            defaultWidth={450}
            height={450}
            minZoom={1.5}
            maxZoom={8}
            zoom={1.5}
          >
            {!isFetching && isLocationPresent && (
              <Overlay anchor={[latitude, longitude]}>
                <img src="https://www.flaticon.com/svg/static/icons/svg/2619/2619499.svg" width={24} height={24} alt="corn marker" />
              </Overlay>
            )}
          </Map>
        </div>
        {isFetching && (
          <img
            src={loadingImg}
            width={24}
            height={24}
            alt="loading"
          />
        )}
        {!isFetching && isLocationPresent && (
          <section className="lat-long-section">
            <div className="lat-long">
              <img
                className="lat-long-img"
                src={latitudeImg}
                width={24}
                height={24}
                alt="latitude"
              />
              <span>{latitude}</span>
            </div>
            <div className="lat-long">
              <img
                className="lat-long-img"
                src={longitudeImg}
                width={24}
                height={24}
                alt="longitude"
              />
              <span>{longitude}</span>
            </div>
          </section>
        )}
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
