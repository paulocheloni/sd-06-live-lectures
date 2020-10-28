import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

class ISSLocation extends Component {
  render() {
    const CENTER_OF_COORDINATES = 0;
    const dummyLat = 22.11;
    const dummyLong = -65.00;

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
            <Marker anchor={ [dummyLat, dummyLong] } />
          </Map>
        </div>
      </div>
    );
  }
}

// ISSLocation.propTypes = {
//   error: PropTypes.string,
//   getCurrentISSLocation: PropTypes.func.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   latitude: PropTypes.number,
//   longitude: PropTypes.number,
// };

// ISSLocation.defaultProps = {
//   error: null,
//   latitude: null,
//   longitude: null,
// };

export default ISSLocation;
