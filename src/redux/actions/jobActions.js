import AsyncStorage from '@react-native-async-storage/async-storage';
import {RNToasty} from 'react-native-toasty';
import http from './../../services/api';
import {GET_JOBS} from './../types';

export const GetJobsApi = loading => async dispatch => {
  loading && loading(true);
  http
    .get(`job/getJob`)
    .then(async response => {
      if (response?.data?.success) {
        dispatch({
          type: GET_JOBS,
          payload: response?.data?.data,
        });
        loading && loading(false);
        RNToasty.Success({
          title: response?.data?.message,
        });
      } else {
        RNToasty.Info({
          title: response?.data?.message,
        });
        loading && loading(false);
      }
    })
    .catch(error => {
      RNToasty.Error({
        title: error?.response?.data?.message,
      });
      loading && loading(false);
    });
};
