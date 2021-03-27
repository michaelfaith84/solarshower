import { SHOW_RESULTS, RESET, SET_LENGTH } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_RESULTS:
      return { ...state, ...action.payload };
    case RESET:
      return {
        gallons: 0,
        weight: 0,
        results: {},
        result: 0,
      };
    case SET_LENGTH:
      return { ...state, result: state.results[action.payload] };
    default:
      return state;
  }
};
