export const GET_TOKEN = 'GET_TOKEN';
export const GET_VERIFY_KEY = 'GET_VERIFY_KEY';
export const GET_ID = 'GET_ID';
export const GET_PROFILE = 'GET_PROFILE';
export const GET_LINK = 'GET_LINK';
export const GET_SOCIAL_LINK = 'GET_SOCIAL_LINK';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';

export const getAuthToken = token => ({
  type: GET_TOKEN,
  payload: token,
});

export const getVerifyKey = verifyKey => ({
  type: GET_VERIFY_KEY,
  payload: verifyKey,
});

export const getId = id => ({
  type: GET_ID,
  payload: id,
});

export const getProfile = profile => ({
  type: GET_PROFILE,
  payload: profile,
});
// export const getAuthToken = token => async dispatch => {
//   dispatch({
//     type: 'GET_TOKEN',
//     payload: 'token',
//   });
// };
export const getLink = link => ({
  type: GET_LINK,
  payload: link,
});

export const getSocialFlag = flag => ({
  type: GET_SOCIAL_LINK,
  payload: flag,
});

export const getRemoveProfile = removeProfile => ({
  type: REMOVE_PROFILE,
  payload: removeProfile,
});
const initialState = {
  token: null,
  verifyKey: null,
  id: null,
  profile: null,
  link: null,
  flag: 'false',
  removeProfile: false,
};

const rootReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case GET_VERIFY_KEY:
      return {
        ...state,
        verifyKey: payload,
      };
    case GET_ID: {
      return {
        ...state,
        id: payload,
      };
    }
    case GET_PROFILE: {
      return {
        ...state,
        profile: payload,
      };
    }
    case GET_LINK: {
      return {
        ...state,
        link: payload,
      };
    }
    case GET_SOCIAL_LINK: {
      return {
        ...state,
        flag: payload,
      };
    }
    case REMOVE_PROFILE: {
      return {
        ...state,
        removeProfile: payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
