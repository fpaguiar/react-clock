import { UPDATE_TIME }  from './../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case UPDATE_TIME:
            return Object.assign({}, state, action.payload);
    
        default:
            return state;
    }
}