import { actionTypes } from '../store/actionTypes';


const INITIAL_STATE = {
	pending: null,
	error: null,
	following: null,
	follower: null,
};

export default function (state = INITIAL_STATE, action) {

	switch (action.type) {
		case actionTypes.GET_FOLLOWING_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.GET_FOLLOWING_SUCCESS:
			return {
				...state,
				pending: null,
				error: null,
				following: action.payload,
			};

		case actionTypes.GET_FOLLOWING_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

		case actionTypes.GET_FOLLOWER_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.GET_FOLLOWER_SUCCESS:
			return {
				...state,
				pending: null,
				error: null,
				follower: action.payload,
			};

		case actionTypes.GET_FOLLOWER_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};


		case actionTypes.CREATE_FOLLOWING_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.CREATE_FOLLOWING_SUCCESS:
			return {
				...state,
				pending: null,
				error: null,
				following: action.payload,
			};

		case actionTypes.CREATE_FOLLOWING_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

		case actionTypes.DELETE_FOLLOWING_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.DELETE_FOLLOWING_SUCCESS:
			return {
				...state,
				pending: null,
				error: null,
				following: action.payload,
			};

		case actionTypes.DELETE_FOLLOWING_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

		case actionTypes.UPDATE_FOLLOWING_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.UPDATE_FOLLOWING_SUCCESS:
			return {
				...state,
				pending: null,
				error: null,
				following: action.payload,
			};

		case actionTypes.UPDATE_FOLLOWING_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

	}

	return state;
};

