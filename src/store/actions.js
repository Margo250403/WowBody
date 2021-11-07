import {PROBLEM_ZONE, AGE, HEIGHT, WEIGHT, ACTIVE_LEVEL, ITM_INDEX} from './types';

export const problemZone = (data) => {
    return function (dispatch) {
        dispatch({type: PROBLEM_ZONE, payload: data});
    };
};
export const age = (data) => {
    return function (dispatch) {
        dispatch({type: AGE, payload: data});
    };
};
export const height = (data) => {
    return function (dispatch) {
        dispatch({type: HEIGHT, payload: data});
    };
};
export const weight = (data) => {
    return function (dispatch) {
        dispatch({type: WEIGHT, payload: data});
    };
};
export const activeLevel = (data) => {
    return function (dispatch) {
        dispatch({type: ACTIVE_LEVEL, payload: data});
    };
};
export const itmIndex = (data) => {
    return function (dispatch) {
        dispatch({type: ITM_INDEX, payload: data});
    };
};
