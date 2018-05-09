import { UPDATE_TIME, SHOW_SECONDS }  from './../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
	case UPDATE_TIME:
		return Object.assign({}, state, action.payload);
	case SHOW_SECONDS:
		return Object.assign({}, state, action.payload);
    
	default:
		return state;
	}
}