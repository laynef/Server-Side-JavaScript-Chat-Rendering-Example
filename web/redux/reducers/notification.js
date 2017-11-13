import { actionTypes } from '../store/actionTypes';


const INITIAL_STATE = {
	pending: null,
	error: null,
	data: null,
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case actionTypes.GET_NOTIFICATION_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.GET_NOTIFICATION_SUCCESS:
			return {
				...state,
				pending: null,
				error: null,
				data: action.payload,
			};

		case actionTypes.GET_NOTIFICATION_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

		case actionTypes.LOGOUT_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.LOGOUT_SUCCESS:
			return INITIAL_STATE;

		case actionTypes.LOGOUT_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

	}

	return state;
};

