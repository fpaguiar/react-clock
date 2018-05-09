import { UPDATE_TIME, SHOW_DATE, SHOW_SECONDS, UPDATE_DATE } from './types';

export const updateTime = time => {
	return {
		type: UPDATE_TIME,
		payload: {
			time
		}
	};
};

export const updateDate = date => {
	return {
		type: UPDATE_DATE,
		payload: {
			date
		}
	};
};

export const showDate = shouldShowDate => {
	return {
		type: SHOW_DATE,
		payload: {
			shouldShowDate
		}
	};
};

export const showSeconds = shouldShowSeconds => {
	return {
		type: SHOW_SECONDS,
		payload: {
			shouldShowSeconds
		}
	};
};