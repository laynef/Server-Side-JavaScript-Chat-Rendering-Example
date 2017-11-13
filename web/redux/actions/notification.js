import axios from 'axios';
import { actionTypes } from '../store/actionTypes';
import { apiHost, apiBase, host } from '../../../config/config';
import { getJSONHeader } from './token';


export function getNotifications(id) {
	return function(dispatch) {
		dispatch({ type: actionTypes.GET_NOTIFICATION_PENDING });
		axios.get(`${apiHost}${apiBase}/notifications/${id}`, getJSONHeader())
			.then((response) => {
				dispatch({
					type: actionTypes.GET_NOTIFICATION_SUCCESS,
					payload: response.data,
				});
				window.__data.notifications.data = response.data;
				axios.post(`${host}/set`, {
					redux: window.__data,
					token: window.__token,
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.GET_NOTIFICATION_ERROR,
					payload: error,
				});
			});
	};
}
