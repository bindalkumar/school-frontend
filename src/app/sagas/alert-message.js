import { takeLatest } from 'redux-saga/effects';
import { removeAlertMessage } from 'app/actions/alert-message';
import { sagaTypes } from 'app/action-types';

export default function* alertMessageWatcher() {
  yield takeLatest(sagaTypes.REMOVE_ALERT, removeAlertMessage);
}
