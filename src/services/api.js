import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const baseURL = 'https://api.thesootr.com/';
export const http2 = 'https://api.thesootr.com/uploads/';
// export const http2 =
//   'https://thesootr.s3.ap-south-1.amazonaws.com/Admin/Storyimage/';


export const httpvideo =
  'https://thesootr.s3.ap-south-1.amazonaws.com/Admin/video/thumb/';


const http = axios.create({
  baseURL: 'https://api.thesootr.com/',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
http.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@USER_TOKEN');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
export default http;
