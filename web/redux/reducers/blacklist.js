import { actionTypes } from '../store/actionTypes';
import { extend } from 'lodash';


const INITIAL_STATE = {
	pending: null,
	error: null,
	data: null,
};

export default function (state = INITIAL_STATE, action) {
	let data = null;
	switch (action.type) {
		case actionTypes.GET_BLACK_LIST_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.GET_BLACK_LIST_SUCCESS:
			data = state.data == null ? {} : state.data;
			return {
				...state,
				pending: null,
				error: null,
				data: extend({}, data, action.payload),
			};

		case actionTypes.GET_BLACK_LIST_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

		case actionTypes.CREATE_BLACK_LIST_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.CREATE_BLACK_LIST_SUCCESS:
			data = state.data == null ? {} : state.data;
			return {
				...state,
				pending: null,
				error: null,
				data: extend({}, data, action.payload),
			};

		case actionTypes.CREATE_BLACK_LIST_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

		case actionTypes.UPDATE_BLACK_LIST_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.UPDATE_BLACK_LIST_SUCCESS:
			data = state.data == null ? {} : state.data;
			return {
				...state,
				pending: null,
				error: null,
				data: extend({}, data, action.payload),
			};

		case actionTypes.UPDATE_BLACK_LIST_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

	}

	return state;
};

