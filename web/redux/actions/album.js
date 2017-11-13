import axios from 'axios';
import { actionTypes } from '../store/actionTypes';
import { apiHost, apiBase, host } from '../../../config/config';
import { getJSONHeader } from './token';
import { extend } from 'lodash';


export function getAlbum(id) {
	return function(dispatch) {
		dispatch({ type: actionTypes.GET_ALBUM_PENDING });
		axios.get(`${apiHost}${apiBase}/album/${id}`, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${id}`] = response.data;
				dispatch({
					type: actionTypes.GET_ALBUM_SUCCESS,
					payload: format,
				});
				window.__data.albums.data = window.__data.albums.data === null ? format : extend(window.__data.albums.data, format);
				axios.post(`${host}/set`, {
					redux: window.__data,
					token: window.__token,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.GET_ALBUM_ERROR,
					payload: error,
				});
			});
	};
};

export function createAlbum(data) {
	return function(dispatch) {
		dispatch({ type: actionTypes.CREATE_ALBUM_PENDING });
		axios.post(`${apiHost}${apiBase}/album`, data, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${response.data.id}`] = response.data;
				dispatch({
					type: actionTypes.CREATE_ALBUM_SUCCESS,
					payload: format,
				});
				window.__data.albums.data = window.__data.albums.data === null ? format : extend(window.__data.albums.data, format);
				axios.post(`${host}/set`, {
					redux: window.__data,
					token: window.__token,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.CREATE_ALBUM_ERROR,
					payload: error,
				});
			});
	};
};

export function uploadImages(file, albumId, userId) {
	return function(dispatch) {
		dispatch({ type: actionTypes.FILE_UPLOAD_PENDING });
		let form = new FormData();
		form.append('file', file);
		axios.post(`${apiHost}${apiBase}/images/album/${albumId}/user/${userId}`, form, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${albumId}`] = response.data;
				dispatch({
					type: actionTypes.FILE_UPLOAD_SUCCESS,
					payload: format,
				});
				window.__data.albums.data = window.__data.albums.data === null ? format : extend(window.__data.albums.data, format);
				axios.post(`${host}/set`, {
					redux: window.__data,
					token: window.__token,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.FILE_UPLOAD_ERROR,
					payload: error,
				});
			});
	};
};

export function uploadAudio(file, albumId, userId) {
	return function(dispatch) {
		dispatch({ type: actionTypes.FILE_UPLOAD_PENDING });
		let form = new FormData();
		form.append('file', file);
		axios.post(`${apiHost}${apiBase}/audio/album/${albumId}/user/${userId}`, form, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${albumId}`] = response.data;
				dispatch({
					type: actionTypes.FILE_UPLOAD_SUCCESS,
					payload: format,
				});
				window.__data.albums.data = window.__data.albums.data === null ? format : extend(window.__data.albums.data, format);
				axios.post(`${host}/set`, {
					redux: window.__data,
					token: window.__token,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.FILE_UPLOAD_ERROR,
					payload: error,
				});
			});
	};
};

export function uploadVideo(file, albumId, userId) {
	return function(dispatch) {
		dispatch({ type: actionTypes.FILE_UPLOAD_PENDING });
		let form = new FormData();
		form.append('file', file);
		axios.post(`${apiHost}${apiBase}/video/album/${albumId}/user/${userId}`, form, getJSONHeader())
			.then((response) => {
				let format = {};
				format[`${albumId}`] = response.data;
				dispatch({
					type: actionTypes.FILE_UPLOAD_SUCCESS,
					payload: format,
				});
				window.__data.albums.data = window.__data.albums.data === null ? format : extend(window.__data.albums.data, format);
				axios.post(`${host}/set`, {
					redux: window.__data,
					token: window.__token,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.FILE_UPLOAD_ERROR,
					payload: error,
				});
			});
	};
};

