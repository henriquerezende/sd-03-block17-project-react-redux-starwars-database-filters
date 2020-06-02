import { REQUEST_API, RECEIVE_API, RECEIVE_API_ERROR } from '../actions/index';
  
  const INITIAL_STATE = {
    isFetching: false,
    planets: [],
    error: '',
  };
  
  const data = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case REQUEST_API:
        return {
          ...state,
          isFetching: true,
        };
      case RECEIVE_API:
        return {
          ...state,
          isFetching: false,
          planets: [...action.planets],
        }
      case RECEIVE_API_ERROR:
        return {
          ...state,
          error: action.error,
        }
      default:
        return state;
    }
  }
  
  export default data;