import React, { useContext, useEffect } from 'react';
import Map from 'pigeon-maps';
import Overlay from 'pigeon-overlay';
import ISSContext from '../context/ISSContext';

import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';
import loadingImg from '../assets/loading.svg';
import useTimer from '../effects/useTimer';


const ISSLocation = () => {
  const {
    isFetching, latitude, longitude, error, getCurrentISSLocation,
  } = useContext(ISSContext);

  useTimer(getCurrentISSLocation, 2000);

  // toda vez que algo no state, nas props ou no context se alterarem, essa função é disparada

  useEffect(() => {
    const now = new Date();
    document.title = now.toLocaleTimeString();
  });

  useEffect(() => {
    console.log([latitude, longitude])
  }, [latitude, longitude]);

  // sem parametro => didUpdate
  // [] => didMount
  // return () => {} => willUnmount
  // [showMap] => didUpdate

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
          {!isFetching && latitude && longitude && (
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
      {!isFetching && latitude && longitude && (
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
};

export default ISSLocation;
