export const DATA_API = 'DATA_API_SUCESS';
export const RECEIVE_ISS_LOCATION_FAILURE = 'RECEIVE_ISS_LOCATION_FAILURE';
export const NAME_SEARCHED = 'NAME_SEARCHED';
export const SUBMIT_OPTION_POPULATION = 'SUBMIT_OPTION_POPULATION';
export const inicialState = {
  showResults: false,
  data: [],
  filters:
  {
    filtered: false,
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

export function apiData(state = inicialState, action) {
  switch (action.type) {
    case DATA_API:
      return { ...state, data: action.data, showResults: true };
    case RECEIVE_ISS_LOCATION_FAILURE:
      return { ...state, data: action.error };
    case NAME_SEARCHED:
      return {
        ...state,
        filters: {
          filtered: false,
          filterByName: { name: action.planetName },
        },
      };
    case SUBMIT_OPTION_POPULATION:
      return {
        ...state,
        filters: {
          filtered: true,
          filterByName: { name: '' },
          filterByNumericValues: [
            ...state.filters.filterByNumericValues,
            {
              column: action.column,
              comparison: action.comparison,
              value: action.value,
            }],
        },
      };
    default:
      return state;
  }
}