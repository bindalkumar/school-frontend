import { actionTypes } from 'app/action-types';

const users = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_LIST_REQUEST_PROCESSING:
      return {
        ...state, userListProcessing: true, userListErr: false, users: [],
      };
    case actionTypes.USER_LIST_REQUEST_PROCESSED:
      return {
        ...state, userListProcessing: false, userListErr: false, users: action.data,
      };
    case actionTypes.USER_LIST_REQUEST_PROCESSING_ERROR:
      return {
        ...state, userListProcessing: false, userListErr: true, users: [],
      };
    case actionTypes.USER_DETAIL_REQUEST_PROCESSING:
      return {
        ...state, userDetailProcessing: true, userDetailErr: false, user: {},
      };
    case actionTypes.USER_DETAIL_REQUEST_PROCESSED:
      return {
        ...state, userDetailProcessing: false, userDetailErr: false, user: action.data,
      };
    case actionTypes.USER_DETAIL_REQUEST_PROCESSING_ERROR:
      return {
        ...state, userDetailProcessing: false, userDetailErr: true, user: {},
      };
    default:
      return state;
  }
};

export default users;
