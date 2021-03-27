import React, { useReducer } from "react";
import Context from "./Context";
import { SHOW_RESULTS, RESET, SET_LENGTH } from "./types";
import Reducer from "./Reducer";

const State = (props) => {
  const initialState = {
    gallons: 0,
    weight: 0,
    lengths: {},
    length: 0,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Set Alert
  const showResults = (time, rate) => {
    // Diameters are in inches, weight is pounds per foot.
    const sizes = [
      { ID: 2, OD: 2.375, weight: 0.803 },
      { ID: 2.5, OD: 2.875, weight: 1.267 },
      { ID: 3, OD: 3.5, weight: 1.66 },
      { ID: 3.5, OD: 4, weight: 1.996 },
      { ID: 4, OD: 4.5, weight: 2.363 },
      { ID: 5, OD: 5.563, weight: 2.874 },
      { ID: 6, OD: 6.625, weight: 4.164 },
      { ID: 8, OD: 8.625, weight: 6.268 },
      { ID: 10, OD: 10.75, weight: 8.886 },
    ];
    // Inner Diameters
    const IDs = [2, 2.5, 3, 4, 5, 6, 8];
    // 231 in^3 == 1 gallon of water
    const volume = time * rate * 231;
    const gallons = (time * rate).toFixed(2);
    const weight = (gallons * 8.33).toFixed(2);
    let results = {};
    sizes.map((e) => {
      results = Object.assign(
        {
          [e.ID]: {
            length: (volume / (Math.PI * Math.pow(0.5 * e.ID, 2)) / 12).toFixed(
              2
            ),
            // A=2πrh+2πr2
            SA: (
              2 *
                Math.PI *
                (0.5 * e.OD) *
                (volume / (Math.PI * Math.pow(0.5 * e.ID, 2)) / 12) +
              2 * Math.PI * Math.pow(0.5 * e.OD, 2)
            ).toFixed(2),
            PW: (
              (volume / (Math.PI * Math.pow(0.5 * e.ID, 2)) / 12) *
              e.weight
            ).toFixed(2),
          },
        },
        results
      );
    });
    dispatch({
      type: SHOW_RESULTS,
      payload: { weight, gallons, results: results, result: results["2"] },
    });
  };

  const setLength = (length) => {
    dispatch({ type: SET_LENGTH, payload: length });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  return (
    <Context.Provider
      value={{
        gallons: state.gallons,
        weight: state.weight,
        results: state.results,
        result: state.result,
        showResults,
        reset,
        setLength,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
