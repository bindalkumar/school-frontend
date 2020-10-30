import { put } from 'redux-saga/effects';
import { actionTypes } from 'app/action-types';

export function* displayAlertMessage(params) {
  yield put({
    type: actionTypes.DISPLAY_ALERT_MESSAGE,
    msg: params.msg,
    servity: params.servity,
  });
}

export function* removeAlertMessage(params) {
  yield put({
    type: actionTypes.REMOVE_ALERT_MESSAGE,
    msgIndex: params.msgIndex,
  });
}
