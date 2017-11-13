import axios from 'axios';
import { actionTypes } from '../store/actionTypes';
import { apiHost, apiBase } from '../../../config/config';
import { getJSONHeader } from './token';


export function getFullBlackList() {
	return function(dispatch) {
		dispatch({ type: actionTypes.GET_BLACK_LIST_PENDING });
		axios.get(`${apiHost}${apiBase}/black/list`, getJSONHeader())
			.then((response) => {
				let dicitionary = {};
				response.data.forEach(e => {
					dicitionary[e.id] = e;
				});
				dispatch({
					type: actionTypes.GET_BLACK_LIST_SUCCESS,
					payload: dicitionary,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.GET_BLACK_LIST_ERROR,
					payload: error,
				});
			});
	};
};

export function getOneBlackLister(id) {
	return function(dispatch) {
		dispatch({ type: actionTypes.GET_BLACK_LIST_PENDING });
		axios.get(`${apiHost}${apiBase}/black/list/${id}`, getJSONHeader())
			.then((response) => {
				let dicitionary = {};
				dicitionary[response.data.id] = response.data;
				dispatch({
					type: actionTypes.GET_BLACK_LIST_SUCCESS,
					payload: dicitionary,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.GET_BLACK_LIST_ERROR,
					payload: error,
				});
			});
	};
};

export function createBlackLister(data) {
	return function(dispatch) {
		dispatch({ type: actionTypes.CREATE_BLACK_LIST_PENDING });
		axios.post(`${apiHost}${apiBase}/black/list`, data, getJSONHeader())
			.then((response) => {
				let dicitionary = {};
				response.data.forEach(e => {
					dicitionary[e.id] = e;
				});
				dispatch({
					type: actionTypes.CREATE_BLACK_LIST_SUCCESS,
					payload: dicitionary,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.CREATE_BLACK_LIST_ERROR,
					payload: error,
				});
			});
	};
};

export function updateBlackLister(data) {
	return function(dispatch) {
		dispatch({ type: actionTypes.UPDATE_BLACK_LIST_PENDING });
		axios.post(`${apiHost}${apiBase}/black/list`, data, getJSONHeader())
			.then((response) => {
				let dicitionary = {};
				response.data.forEach(e => {
					dicitionary[e.id] = e;
				});
				dispatch({
					type: actionTypes.UPDATE_BLACK_LIST_SUCCESS,
					payload: dicitionary,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.UPDATE_BLACK_LIST_ERROR,
					payload: error,
				});
			});
	};
};


