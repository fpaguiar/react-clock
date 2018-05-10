import { UPDATE_TIME, UPDATE_DATE, SHOW_SECONDS, SHOW_DATE }  from './../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
	case UPDATE_TIME:
		return Object.assign({}, state, action.payload);
	case UPDATE_DATE:
		return Object.assign({}, state, action.payload);
	case SHOW_SECONDS:
		return Object.assign({}, state, action.payload);
	case SHOW_DATE:
		return Object.assign({}, state, action.payload);
    
	default:
		return state;
	}
}