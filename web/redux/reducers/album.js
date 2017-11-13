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
		case actionTypes.GET_ALBUM_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.GET_ALBUM_SUCCESS:
			data = state.data == null ? {} : state.data;
			return {
				...state,
				pending: null,
				error: null,
				data: extend({}, data, action.payload),
			};

		case actionTypes.GET_ALBUM_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

		case actionTypes.FILE_UPLOAD_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.FILE_UPLOAD_SUCCESS:
			data = state.data == null ? {} : state.data;
			return {
				...state,
				pending: null,
				error: null,
				data: extend({}, data, action.payload),
			};

		case actionTypes.FILE_UPLOAD_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

		case actionTypes.CREATE_ALBUM_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};

		case actionTypes.CREATE_ALBUM_SUCCESS:
			data = state.data == null ? {} : state.data;
			return {
				...state,
				pending: null,
				error: null,
				data: extend({}, data, action.payload),
			};

		case actionTypes.CREATE_ALBUM_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload,
			};

	}

	return state;
};

