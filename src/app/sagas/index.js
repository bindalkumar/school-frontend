import { all } from 'redux-saga/effects';
import usersWatcher from './users';
import alertMessageWatcher from './alert-message';

export default function* rootSaga() {
  yield all([
    usersWatcher(),
    alertMessageWatcher(),
  ]);
}
