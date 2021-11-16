import {PROBLEM_ZONE, AGE, HEIGHT, WEIGHT, ACTIVE_LEVEL, ITM_INDEX} from './types';

export const problemZone = (data) => {
    return function (dispatch) {
        dispatch({type: PROBLEM_ZONE, payload: data});
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
export const itmIndex = (data) => {
    return function (dispatch) {
        dispatch({type: ITM_INDEX, payload: data});
    };
};
