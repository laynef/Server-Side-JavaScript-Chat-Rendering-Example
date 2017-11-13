import axios from 'axios';
import { actionTypes } from '../store/actionTypes';
import { apiHost, apiBase } from '../../../config/config';
import { getJSONHeader } from './token';


export function getBlog(userId) {
	return function(dispatch) {
		dispatch({ type: actionTypes.GET_BLOG_PENDING });
		axios.get(`${apiHost}${apiBase}/blog/user/${userId}`, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${userId}`] = response.data;
				dispatch({
					type: actionTypes.GET_BLOG_SUCCESS,
					payload: format,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.GET_BLOG_ERROR,
					payload: error,
				});
			});
	};
};

export function createBlog(data, userId) {
	return function(dispatch) {
		dispatch({ type: actionTypes.CREATE_BLOG_PENDING });
		axios.post(`${apiHost}${apiBase}/blog/user`, data, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${userId}`] = response.data;
				dispatch({
					type: actionTypes.CREATE_BLOG_SUCCESS,
					payload: format,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.CREATE_BLOG_ERROR,
					payload: error,
				});
			});
	};
};

export function updateBlog(data, id, userId) {
	return function(dispatch) {
		dispatch({ type: actionTypes.UPDATE_BLOG_PENDING });
		axios.patch(`${apiHost}${apiBase}/blog/${id}/user/${userId}`, data, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${userId}`] = response.data;
				dispatch({
					type: actionTypes.UPDATE_BLOG_SUCCESS,
					payload: format,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.UPDATE_BLOG_ERROR,
					payload: error,
				});
			});
	};
};

export function deleteBlog(id, userId) {
	return function(dispatch) {
		dispatch({ type: actionTypes.DELETE_BLOG_PENDING });
		axios.delete(`${apiHost}${apiBase}/blog/${id}/user/${userId}`, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${userId}`] = response.data;
				dispatch({
					type: actionTypes.DELETE_BLOG_SUCCESS,
					payload: format,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.DELETE_BLOG_ERROR,
					payload: error,
				});
			});
	};
};
