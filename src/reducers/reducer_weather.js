import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
    // console.log(state);
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]); //this line does the same thing with the line below
            return [action.payload.data, ...state];
    }

    return state;
}