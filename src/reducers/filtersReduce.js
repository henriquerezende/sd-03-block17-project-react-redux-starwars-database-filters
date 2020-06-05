import {
  FILTER_BY_NAME,
  FILTER_BY_NUMERIC_VALUE,
  DELETE_FILTER,
} from '../actions/index';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAME: {
      return {
        ...state,

        filterByName: {
          name: action.payload,
        },
      };
    }

    case FILTER_BY_NUMERIC_VALUE: {
      const { column, comparison, value } = action.payload;
      return {
        ...state,
        filterByNumericValues:
          state.filterByNumericValues[0].column === ''
            ? [{ column, comparison, value }]
            : [...state.filterByNumericValues, { column, comparison, value }],
      };
    }

    case DELETE_FILTER: {
      console.log(action);
      return {
        ...state,
        filterByNumericValues:
          state.filterByNumericValues.filter((filtereds) => filtereds.column !== action.payload),
      };
    }

    default:
      return state;
  }
};