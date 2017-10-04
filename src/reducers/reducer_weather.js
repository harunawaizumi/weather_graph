/**
 * Created by haruna on 9/28/17.
 */
import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state] // state.concat([action.payload.data])
        default:
            return state
    }
}

// should not change state