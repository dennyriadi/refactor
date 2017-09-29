import { call, put, takeLatest } from 'redux-saga/effects';
import { get } from '../apiCall';
import { PEOPLE_GET_REQUESTED, PEOPLE_GET_SUCCESSFUL } from './types';

function* onGetPeople({ payload }) {
  console.log(payload);
  const response = yield call(() => get('http://localhost:8081/api/people/'));
  if (!response.error) {
    yield put({
      type: PEOPLE_GET_SUCCESSFUL,
      payload: response,
    });
  }
}

export function* watchPeople() {
  yield takeLatest(PEOPLE_GET_REQUESTED, onGetPeople);
}
