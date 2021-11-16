import {PROBLEM_ZONE, ITM_INDEX, WEIGHT, HEIGHT} from './types';

const initialState = {
    problemZone: '',
    height: '',
    weight: '',
    itmIndex: '',
    loader: true
};
export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROBLEM_ZONE:
            return {...state, problemZone: action.payload};
        case ITM_INDEX:
            return {...state, itmIndex: action.payload};
        case WEIGHT:
            return {...state, weight: action.payload};
        case HEIGHT:
            return {...state, height: action.payload};
        default:
            return state;
    }
};
