import starWarsApi from '../services/starWarsApi';

const REQUEST_DATA = 'REQUEST_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';
const RECEIVE_FAIL = 'RECEIVE_FAIL';

const requestData = () => ({
  type: REQUEST_DATA,
});

const receiveData = (data) => ({
  type: RECEIVE_DATA,
  data,
});

const receiveFail = (error) => ({
  type: RECEIVE_FAIL,
  error,
});


function fetchStarWarsApi(search) {
  return (dispatch) => {
    dispatch(requestData());

    return starWarsApi(search)
      .then(
        (data => {
          dispatch(receiveData(data.results))
        }),
        (error) => dispatch(receiveFail(error.message))
      );
  };
};

export default fetchStarWarsApi;