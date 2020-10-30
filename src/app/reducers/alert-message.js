import { actionTypes } from 'app/action-types';
import { cloneDeep, remove } from 'lodash';

const login = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_ALERT_MESSAGE: {
      const newMsg = { msg: action.msg, servity: action.servity };
      const newMessages = cloneDeep([]);
      newMessages.unshift(newMsg);
      return { ...state, messages: newMessages };
    }
    case actionTypes.REMOVE_ALERT_MESSAGE: {
      const { msgIndex } = action;
      let newMessages = cloneDeep(state.messages);
      newMessages = remove(newMessages, (row, index) => {
        return index !== msgIndex;
      });
      return { ...state, messages: newMessages };
    }
    default:
      return state;
  }
};

export default login;
