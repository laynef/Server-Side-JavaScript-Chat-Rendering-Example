import axios from 'axios';
import { actionTypes } from '../store/actionTypes';
import { apiHost, apiBase, host } from '../../../config/config';
import { getJSONHeader } from './token';
import { extend } from 'lodash';


export function getReview(id) {
	return function(dispatch) {
		dispatch({ type: actionTypes.GET_REVIEW_PENDING });
		axios.get(`${apiHost}${apiBase}/review/${id}`, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${id}`] = response.data;
				dispatch({
					type: actionTypes.GET_REVIEW_SUCCESS,
					payload: format,
				});
				window.__data.reviews.data = window.__data.reviews.data === null ? format : extend(window.__data.reviews.data, format);
				axios.post(`${host}/set`, {
					redux: window.__data,
					token: window.__token,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.GET_REVIEW_ERROR,
					payload: error,
				});
			});
	};
};

export function createReview(data) {
	return function(dispatch) {
		dispatch({ type: actionTypes.CREATE_REVIEW_PENDING });
		axios.post(`${apiHost}${apiBase}/review`, data, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${response.data.otherId}`] = response.data;
				dispatch({
					type: actionTypes.CREATE_REVIEW_SUCCESS,
					payload: format,
				});
				window.__data.reviews.data = window.__data.reviews.data === null ? format : extend(window.__data.reviews.data, format);
				axios.post(`${host}/set`, {
					redux: window.__data,
					token: window.__token,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.CREATE_REVIEW_ERROR,
					payload: error,
				});
			});
	};
};

export function updateReview(data, id) {
	return function(dispatch) {
		dispatch({ type: actionTypes.UPDATE_REVIEW_PENDING });
		axios.patch(`${apiHost}${apiBase}/review/${id}`, data, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${id}`] = response.data;
				dispatch({
					type: actionTypes.UPDATE_REVIEW_SUCCESS,
					payload: format,
				});
				window.__data.reviews.data = window.__data.reviews.data === null ? format : extend(window.__data.reviews.data, format);
				axios.post(`${host}/set`, {
					redux: window.__data,
					token: window.__token,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.UPDATE_REVIEW_ERROR,
					payload: error,
				});
			});
	};
};

export function deleteReview(id) {
	return function(dispatch) {
		dispatch({ type: actionTypes.DELETE_REVIEW_PENDING });
		axios.delete(`${apiHost}${apiBase}/review/${id}`, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${id}`] = response.data;
				dispatch({
					type: actionTypes.DELETE_REVIEW_SUCCESS,
					payload: format,
				});
				window.__data.reviews.data = window.__data.reviews.data === null ? format : extend(window.__data.reviews.data, format);
				axios.post(`${host}/set`, {
					redux: window.__data,
					token: window.__token,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.DELETE_REVIEW_ERROR,
					payload: error,
				});
			});
	};
};
