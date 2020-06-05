const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = () => {
  return fetch(URL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
};

export default getPlanets;