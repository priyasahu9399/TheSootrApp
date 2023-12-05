import AsyncStorage from '@react-native-async-storage/async-storage';
import http from './../../services/api';
import {GET_POLL_QUESTION} from './../types';

export const GetPollQuestionApi = loading => dispatch => {
  loading && loading(true);

  http
    .get(`http://thesootr.com:50001/thesootrapi/get_poll_question`) //http://15.207.244.141:3000/
    .then(async response => {
      console.log('question', response);
      if (response.data.success) {
        dispatch({
          type: GET_POLL_QUESTION,
          payload: response.data,
        });
        loading && loading(false);
      } else {
        console.log('PollQuestion not fatch');
        loading && loading(false);
      }
    })
    .catch(error => {
      if (error.response.data) {
        console.log('PollQuestion error', error);
      }
      loading && loading(false);
    });
};
