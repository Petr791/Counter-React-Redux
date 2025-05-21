import {
	COUNTER_INCREMENT,
	COUNTER_DECREMENT,
	COUNTER_RESET,

	COUNTER_SAVE_LOADING,
	COUNTER_SAVE_LOADING_SUCCESS,
	COUNTER_SAVE_LOADING_ERROR,

	COUNTER_LOADING,
	COUNTER_LOADING_SUCCESS,
	COUNTER_LOADING_ERROR
} from './constants';

import {
	API
} from './api'

export const load = () => {
	return (dispatch) => {

		dispatch({
			type: COUNTER_LOADING
		});

		API.getCounter()
			.then(data => {
				dispatch({
					type: COUNTER_LOADING_SUCCESS,
					payload: data.counter
				});
			})
			.catch((error) => {
				console.log(error);
				dispatch({
					type: COUNTER_LOADING_ERROR
				});
			})
	}
}

export const save = (counter) => {
	return (dispatch) => {

		dispatch({
			type: COUNTER_SAVE_LOADING
		});

		let objBody = {
			id: 4,
			count: counter,
		}

		API.saveCounter(objBody)
			.then(data => {
				dispatch({
					type: COUNTER_SAVE_LOADING_SUCCESS,
					payload: data.reminder.count
				});
			})
			.catch((error) => {
				console.log(error);
				dispatch({
					type: COUNTER_SAVE_LOADING_ERROR
				});
			})

	}
}


export const increment = () => {
	return {
		type: COUNTER_INCREMENT
	}
}

export const decrement = () => {
	return {
		type: COUNTER_DECREMENT
	}
}

export const reset = () => {
	return {
		type: COUNTER_RESET
	}
}