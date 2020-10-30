import { combineReducers } from 'redux';
import alertMessage from './alert-message';
import users from './users';

const reducers = combineReducers({
  alertMessage, users,
});

export default reducers;
