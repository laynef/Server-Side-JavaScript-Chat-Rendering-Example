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
		case actionTypes.GET_COMMENT_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.GET_COMMENT_SUCCESS:
			data = state.data == null ? {} : state.data;
			return {
				...state,
				pending: null,
				error: null,
				data: extend({}, data, action.payload),
			};

		case actionTypes.GET_COMMENT_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

		case actionTypes.CREATE_COMMENT_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.CREATE_COMMENT_SUCCESS:
			data = state.data == null ? {} : state.data;
			return {
				...state,
				pending: null,
				error: null,
				data: extend({}, data, action.payload),
			};

		case actionTypes.CREATE_COMMENT_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

		case actionTypes.DELETE_COMMENT_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.DELETE_COMMENT_SUCCESS:
			data = state.data == null ? {} : state.data;
			return {
				...state,
				pending: null,
				error: null,
				data: extend({}, data, action.payload),
			};

		case actionTypes.DELETE_COMMENT_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

		case actionTypes.UPDATE_COMMENT_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.UPDATE_COMMENT_SUCCESS:
			data = state.data == null ? {} : state.data;
			return {
				...state,
				pending: null,
				error: null,
				data: extend({}, data, action.payload),
			};

		case actionTypes.UPDATE_COMMENT_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

	}

	return state;
};

