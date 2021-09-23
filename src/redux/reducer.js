export const GET_TOKEN = 'GET_TOKEN';
export const GET_VERIFY_KEY = 'GET_VERIFY_KEY';
export const GET_ID = 'GET_ID';
export const GET_PROFILE = 'GET_PROFILE';
export const GET_LINK = 'GET_LINK';
export const GET_SOCIAL_LINK = 'GET_SOCIAL_LINK';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_ORDER_HISTORY = 'GET_ORDER_HISTORY';
export const GET_PURCHASE_IMAGE = 'GET_PURCHASE_IMAGE';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const IS_IMAGE_UPDATED = 'IS_IMAGE_UPDATED';
export const CHECK_UPDATE = 'CHECK_UPDATE';
// export const

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

export const getProduct = product => ({
  type: GET_PRODUCT,
  payload: product,
});

export const updateProduct = id => ({
  type: UPDATE_PRODUCT,
  payload: id,
});
export const getOrderhistory = orderhistory => ({
  type: GET_ORDER_HISTORY,
  payload: orderhistory,
});

export const getPurchaseImage = purchaseImage => ({
  type: GET_PURCHASE_IMAGE,
  payload: purchaseImage,
});

export const updateIMAGE = img => ({
  type: UPDATE_IMAGE,
  payload: img,
});

export const isImageUpdated = () => ({
  type: IS_IMAGE_UPDATED,
});

export const check_update = () => ({
  type: CHECK_UPDATE,
});

const initialState = {
  token: null,
  verifyKey: null,
  id: null,
  profile: null,
  link: null,
  flag: 'false',
  removeProfile: false,
  products: [],
  orders: [],
  purchaseImage: [],
  updateImg: [],
  check_update: false,
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
    case GET_PRODUCT: {
      console.log('IN PROFILE REDUCER >>>', payload, '>>');
      // console.log('IN PROFILE REDUCER', payload);
      return {
        ...state,
        products: payload,
      };
    }
    case UPDATE_PRODUCT: {
      console.log('update product');
      console.log('Before Products >>>>>>>>>>>>');
      const newProduct = state.products.map(e => {
        if (e.id == payload) {
          let obj = e;
          obj.purchase_status = 1;
          return obj;
        } else {
          return e;
        }
      });
      console.log('payload >>>>>>>>>>>', payload);
      console.log('newProduct>>>>>', newProduct);
      // console.log(">>new product",newProduct)
      // console.log("OUR NEW PRODUCT",newProduct)
      return {
        ...state,
        products: newProduct,
      };
    }
    case GET_ORDER_HISTORY: {
      return {
        ...state,
        orders: payload,
      };
    }

    case GET_PURCHASE_IMAGE: {
      return {
        ...state,
        purchaseImage: payload,
      };
    }

    case UPDATE_IMAGE: {
      return {
        ...state,
        updateImg: payload,
      };
    }

    case CHECK_UPDATE: {
      console.log('REDUCER >?????????????????');
      return {
        ...state,
        check_update: !state.check_update,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
