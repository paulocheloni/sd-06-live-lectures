import React from 'react';

import ISSContext from './ISSContext';
import { getCurrentISSLocation, getCurrentPeopleInSpace } from '../services/issAPI';

class Provider extends React.Component {
  constructor() {
    super();

    this.state = {
      error: null,
      isFetching: false,
      latitude: 0,
      longitude: 0,
      showMap: true,
      peopleInSpace: [],
    };

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.handleAPIError = this.handleAPIError.bind(this);
    this.handleCurrentISSSuccess = this.handleCurrentISSSuccess.bind(this);
    this.handleToggleMap = this.handleToggleMap.bind(this);
    this.fetchPeopleInSpace = this.fetchPeopleInSpace.bind(this);
    this.handlePeopleInSpaceSuccess = this.handlePeopleInSpaceSuccess.bind(this);
  }

  fetchISSLocation() {
    this.setState({ isFetching: true }, () => {
      getCurrentISSLocation()
        .then(
          this.handleCurrentISSSuccess, // tratamento do retorno da api
          this.handleAPIError, // tratamento do retorno da api
        );
    });
  }

  fetchPeopleInSpace() {
    this.setState({ isFetching: true }, () => {
      getCurrentPeopleInSpace()
        .then(
          this.handlePeopleInSpaceSuccess, // tratamento do retorno da api
          this.handleAPIError, // tratamento do retorno da api
        );
    });
  }

  handlePeopleInSpaceSuccess(response) {
    this.setState({ peopleInSpace: response.people, isFetching: false });
  }

  handleCurrentISSSuccess(location) {
    const { iss_position: { latitude, longitude } } = location;

    this.setState({
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      isFetching: false,
    });
  }

  handleAPIError(error) {
    this.setState({
      error: error.message,
      isFetching: false,
    });
  }

  handleToggleMap() {
    this.setState(({ showMap }) => ({ showMap: !showMap }));
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider value={{
        ...this.state,
        getCurrentISSLocation: this.fetchISSLocation,
        getPeopleInSpace: this.fetchPeopleInSpace,
        toggleMap: this.handleToggleMap,
      }}
      >
        {children}
      </ISSContext.Provider>
    );
  }
}

export default Provider;
