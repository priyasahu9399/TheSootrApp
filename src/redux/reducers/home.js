import {
  GET_PHOTO,
  GET_PHOTO_Detail,
  GET_CATEGORY,
  GET_AUTO_SLIDER,
  MOST_READ,
  GET_VIDEO_List,
  GET_VIDEO,
  GET_SCROLL_NEWS,
  GET_NEWS_POST_DETAIL,
  TAJA_NEWS,
  GET_POST_FEATURES,
  GET_COMPLAINT,
  SEARCH_DATA,
} from '../types';
const initialState = {
  photodetail:null,
  getVideolist: null,
  mostRead: null,
  GetAutoSlider: null,
  getCategory: null,
  getphotos: null,
  getVideo: null,
  getScrollnews: null,
  getnewspostdetail: null,
  tajanews: null,
  getpostfeature: null,
  getcomplaint: null,
  searchdata: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTO:
      return {
        ...state,
        getphotos: action.payload,
      };
    case GET_PHOTO_Detail:
      return {
        ...state,
        photodetail: action.payload,
      };

    case GET_VIDEO_List:
      return {
        ...state,
        getVideolist: action.payload,
      };

    case GET_VIDEO:
      return {
        ...state,
        getVideo: action.payload,
      };

    case SEARCH_DATA:
      return {
        ...state,
        searchdata: action.payload,
      };

    case GET_COMPLAINT:
      return {
        ...state,
        getcomplaint: action.payload,
      };
    case TAJA_NEWS:
      return {
        ...state,
        tajanews: action.payload,
      };

    case MOST_READ:
      return {
        ...state,
        mostRead: action.payload,
      };
    case GET_AUTO_SLIDER:
      return {
        ...state,
        GetAutoSlider: action.payload,
      };

    case GET_CATEGORY:
      return {
        ...state,
        getCategory: action.payload,
      };

    case GET_POST_FEATURES:
      return {
        ...state,
        getpostfeature: action.payload,
      };

    case GET_SCROLL_NEWS:
      return {
        ...state,
        getScrollnews: action.payload,
      };

    case GET_NEWS_POST_DETAIL:
      return {
        ...state,
        getnewspostdetail: action.payload,
      };

    default:
      return state;
  }
};
