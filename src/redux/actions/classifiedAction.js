import AsyncStorage from '@react-native-async-storage/async-storage';
//import {RNToasty} from 'react-native-toasty';
import http from './../../services/api';
import {GET_CLASSIFIED} from './../types';

export const GetClassifiedApi = loading => dispatch => {
  loading && loading(true);
  http
    .get(`classified/classified`)
    .then(async response => {
      console.log('response?.data  classified', response?.data);
      if (response.success) {
        dispatch({
          type: GET_CLASSIFIED,
          payload: response?.data?.data,
        });
        loading && loading(false);
      } else {
        loading && loading(false);
        console.log('classified not fatch');
      }
    })
    .catch(error => {
      if (error.response.data) {
        console.log('classified error');
      }
      loading && loading(false);
    });
};
