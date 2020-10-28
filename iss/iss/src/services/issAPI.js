const ISS_BASE_API = 'http://api.open-notify.org';

// Aqui com uma sintaxe diferente para darmos uma relembrada em promises! :)
const getCurrentISSLocation = () => (
  fetch(`${ISS_BASE_API}/iss-now.json`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCurrentISSLocation;
