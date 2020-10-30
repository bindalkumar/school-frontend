import { takeLatest } from 'redux-saga/effects';
import { getUsers, getUserDetail } from 'app/actions/users';
import { sagaTypes } from 'app/action-types';

export default function* usersWatcher() {
  yield takeLatest(sagaTypes.USER_LIST_REQUEST, getUsers);
  yield takeLatest(sagaTypes.USER_DETAIL_REQUEST, getUserDetail);
}
