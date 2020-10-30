import { put, call } from 'redux-saga/effects';
import { apiURLs, actionTypes } from 'app/action-types';
import { displayAlertMessage } from 'app/actions/alert-message';
import axios from 'axios';

export function* getUsers() {
  yield put({ type: actionTypes.USER_LIST_REQUEST_PROCESSING });
  try {
    const resp = yield call(() => {
      return axios.request({
        method: 'get',
        url: apiURLs.userList,
      });
    });
    yield put({ type: actionTypes.USER_LIST_REQUEST_PROCESSED, data: resp.data });
  } catch (err) {
    yield put({ type: actionTypes.USER_LIST_REQUEST_PROCESSING_ERROR });
    yield call(displayAlertMessage, { msg: 'There is some error', servity: 'danger' });
  }
}

export function* getUserDetail(arg) {
  const { id } = arg;
  yield put({ type: actionTypes.USER_DETAIL_REQUEST_PROCESSING });
  try {
    const url = `${apiURLs.userDetail}/${id}`;
    const resp = yield call(() => {
      return axios.request({
        method: 'get',
        url,
      });
    });
    console.log('resp.data ', resp.data);
    yield put({ type: actionTypes.USER_DETAIL_REQUEST_PROCESSED, data: resp.data });
    if (resp.data?.error) {
      yield call(displayAlertMessage, { msg: resp.data?.error, servity: 'danger' });
    }
  } catch (err) {
    yield put({ type: actionTypes.USER_DETAIL_REQUEST_PROCESSING_ERROR });
    yield call(displayAlertMessage, { msg: 'There is some error', servity: 'danger' });
  }
}
