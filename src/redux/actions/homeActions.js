import AsyncStorage from '@react-native-async-storage/async-storage';
import http from './../../services/api';
import {
  GET_CATEGORY,
  GET_POST_FEATURES,
  GET_AUTO_SLIDER,
  MOST_READ,
  GET_PHOTO_Detail,
  GET_PHOTO,
  GET_VIDEO,
  GET_VIDEO_List,
  GET_SCROLL_NEWS,
  GET_NEWS_POST_DETAIL,
  TAJA_NEWS,
  SEARCH_DATA,
} from './../types';
import {RNToasty} from 'react-native-toasty';

export const GetCategoryApi = navigation => dispatch => {
  http
    .get(`thesootrapi/get_homepage_category`) // apply in drawer and scrollheading page
    .then(async response => {
      if (response?.data?.success) {
        dispatch({
          type: GET_CATEGORY,
          payload: response,
        });
      } else {
        console.log('category else', response?.data);
      }
    })
    .catch(error => {
      console.log('category error', error?.response?.data);
    });
};
export const GetPostFeatureApi = () => dispatch => {
  http
    .get(`story/getFeaturedPostAll`) // apply in drawer and scrollheading page
    .then(async response => {
      if (response?.data?.success) {
        dispatch({
          type: GET_POST_FEATURES,
          payload: response?.data?.data,
        });
      } else {
        console.log('getFeaturedPostAll else', response?.data);
      }
    })
    .catch(error => {
      console.log('getFeatured error', error?.response?.data);
    });
};
export const GetAutoSliderApi = navigation => dispatch => {
  http
    .get(`story/getFeaturedPost`) // apply in auto slider
    .then(async response => {
      if (response?.data?.success) {
        dispatch({
          type: GET_AUTO_SLIDER,
          payload: response?.data?.data,
        });
        // navigation && navigation.navigate('NewDetails');
        // console.log('GetAutoSliderApi', response?.data);
      } else {
        console.log('GetAutoSliderApi else', response?.data);
      }
    })
    .catch(error => {
      console.log('GetAutoSliderApi  error', error?.response?.data);
    });
};

export const GetMostReadApi = (page, navigation) => dispatch => {
  http
    .get(`story/getMostReadPost/${page}`) // apply in home page most read
    .then(async response => {
      if (response?.data?.success) {
        dispatch({
          type: MOST_READ,
          payload: response?.data,
        });
        navigation && navigation.navigate('NewDetails');
      } else {
        console.log('GetMostReadApi else', response?.data);
      }
    })
    .catch(error => {
      console.log('getMostReadPost  error', error?.response?.data);
    });
};

export const GetTajaNewsApi = navigation => dispatch => {
  http
    .get(`story/getLatestPost`)
    .then(async response => {
      if (response?.data?.success) {
        dispatch({
          type: TAJA_NEWS,
          payload: response?.data?.data,
        });
        navigation && navigation.navigate('NewDetails');
      } else {
      }
    })
    .catch(error => {});
};
export const GetPhotosApi = () => dispatch => {
  http
    .get(`story/getGalleryPost`) // apply in home page photos
    .then(async response => {
      if (response.data?.success) {
        dispatch({
          type: GET_PHOTO,
          payload: response?.data,
        });
      } else {
        console.log('getGalleryPost else', response?.data);
      }
    })
    .catch(error => {
      console.log('GetPhotos  error', error?.response?.data);
    });
};

export const GetVideoApi = () => dispatch => {
  http
    .get(`video/homepageVideo`) // apply in home page video
    .then(async response => {
      if (response?.data?.success) {
        dispatch({
          type: GET_VIDEO,
          payload: response?.data?.data,
        });
      } else {
        console.log('homepageVideo else', response?.data);
      }
    })
    .catch(error => {
      console.log('homepageVideo   error', error?.response?.data);
    });
};

export const GetVideolistApi = (navigation, cb) => dispatch => {
  cb && cb(true);
  http
    .get(`video/getLatestVideoScroll/1`) // apply in video page list
    .then(async response => {
      if (response?.data?.success) {
        dispatch({
          type: GET_VIDEO_List,
          payload: response?.data?.data,
        });
        console.log('GetVideolistApi success');
        cb && cb(false);
      } else {
        console.log('GetVideolistApi else', response?.data);
        cb && cb(false);
      }
    })
    .catch(error => {
      console.log('GetVideolistApi   error', error?.response?.data);
      cb && cb(false);
    });
};

export const GetScrollNewsApi = navigation => dispatch => {
  http
    .get(`story/getNewsScroll`)
    .then(async response => {
      if (response?.data?.success) {
        dispatch({
          type: GET_SCROLL_NEWS,
          payload: response?.data,
        });
        navigation && navigation.navigate('NewDetails');
      } else {
        console.log('scroll news else', error?.response?.data);
      }
    })
    .catch(error => {
      console.log('scroll news error', error?.response?.data);
    });
};

export const GetNewsDetailApi = (id, navigation) => async dispatch => {
  http
    .get(`story/get_post_details/${id}`)
    .then(async response => {
      if (response?.data?.success) {
        dispatch({
          type: GET_NEWS_POST_DETAIL,
          payload: response?.data,
        });
        navigation && navigation.navigate('NewDetails');
      } else {
        console.log('GetNewsDetailApi  esle', response?.data);
      }
    })
    .catch(error => {
      console.log('new Details  error', error);
    });
};

export const PostPhotosDetailsApi = (id, navigation) => async dispatch => {
  http.get(`story/get_gallery_post_details/${id}`) // apply in home page photos
    .then(async response => {

      if (response?.data?.success) {
        console.log('photo detail', response?.data?.data);
        dispatch({
          type: GET_PHOTO_Detail,
          payload: response?.data?.data,
        });
        console.log('PhotosDetails  success');
        navigation && navigation?.navigate('PhotoDetails');
      } else {
        console.log('PhotosDetails  els', response?.data);
      }
    })
    .catch(error => {
      console.log('PhotosDetails  errors', error?.response?.data);
    });
};

// export const ComplaintApi = () => dispatch => {
//   http
//     .get(`complaint`) // apply in home page
//     .then(async response => {
//       // console.log('Complain', response);
//       if (response?.data?.success) {
//         dispatch({
//           type: GET_COMPLAINT,
//           payload: response?.data?.data,
//         });
//         RNToasty.Success({
//           title: response?.data,
//         });
//         console.log('Complain', response?.data);
//       } else {
//         RNToasty.Info({
//           title: response?.data,
//         });
//         console.log('Complain', response?.data);
//       }
//     })
//     .catch(error => {
//       RNToasty.Error({
//         title: error?.response?.data,
//       });
//       console.log('complaint', error?.response?.data);
//     });
// };

export const SearchApi = post => dispatch => {
  console.log('post', post);
  http
    .post(`story/searchStory`, {
      params: {
        parameter: post,
      },
    })
    .then(async response => {
      if (response?.data?.success) {
        dispatch({
          type: SEARCH_DATA,
          payload: response?.data?.data,
        });
        console.log('search  success');
      } else {
        console.log('search', response?.data);
      }
    })
    .catch(error => {
      console.log('search ', error?.response?.data);
    });
};
