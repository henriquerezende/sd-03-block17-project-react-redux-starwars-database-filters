import {
  REQUEST_PLANETS,
  FETCH_PLANETS_SUCESS,
  FETCH_PLANETS_FAILURE,
} from '../actions/fetchPlanetsAction';
import { TYPE_NAME } from '../actions/SearchTextAction';

const INITIAL_STATE = {
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  },
  isFetching: true,
  data: [],
  error: '',
};

function dataReducer(state, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return ({ ...state, isFetching: true });
    case FETCH_PLANETS_SUCESS:
      return ({
        ...state,
        isFetching: false,
        data: [...action.planets],
      });
    case FETCH_PLANETS_FAILURE:
      return ({
        ...state,
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}

function filtersReducer(filters, action) {
  switch(action.type) {
    case TYPE_NAME:
      return {
        ...filters,
        filterByName: { name: action.text },
      };
    default:
      return filters;
  }
}

const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_PLANETS:
    case FETCH_PLANETS_SUCESS:
    case FETCH_PLANETS_FAILURE:
      return dataReducer(state, action);
    case TYPE_NAME:
      return {
        ...state,
        filters: filtersReducer(state.filters, action),
      };
    default:
      return state;
  }
};

export default Reducer;
