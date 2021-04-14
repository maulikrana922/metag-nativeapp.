export const GET_TOKEN = 'GET_TOKEN';
export const GET_VERIFY_KEY = 'GET_VERIFY_KEY';
export const GET_ID = 'GET_ID';
export const GET_PROFILE = 'GET_PROFILE';

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

const initialState = {
  token: null,
  verifyKey: null,
  id: null,
  profile: null,
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
    default:
      return state;
  }
};

export default rootReducer;
