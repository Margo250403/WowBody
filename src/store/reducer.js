import {PROBLEM_ZONE, ITM_INDEX, ACTIVE_LEVEL, WEIGHT, HEIGHT, AGE} from './types';

const initialState = {
    problemZone: '',
    age: '',
    height: '',
    weight: '',
    activeLevel: '',
    itmIndex: '',
    loader: true
};
export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROBLEM_ZONE:
            return {...state, problemZone: action.payload};
        case ITM_INDEX:
            return {...state, itmIndex: action.payload};
        case ACTIVE_LEVEL:
            return {...state, activeLevel: action.payload};
        case WEIGHT:
            return {...state, weight: action.payload};
        case HEIGHT:
            return {...state, height: action.payload};
        case AGE:
            return {...state, age: action.payload};
        default:
            return state;
    }
};
