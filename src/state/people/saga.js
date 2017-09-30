import R from 'ramda';
import { call, put, takeLatest } from 'redux-saga/effects';
import qs from 'querystring';
import { get } from '../request';
import { PEOPLE_GET_REQUESTED, PEOPLE_GET_SUCCESSFUL } from './types';

const apiEndpoint = '/api/people';

function* onGetPeople({ payload }) {
  const buildAgeParam = (age, ageRange) => {
    if (!age) {
      return null;
    }

    if (!ageRange) {
      return { age };
    }

    return R.assoc(`age_${ageRange}`, age, {});
  };

  const queryParams = params => {
    if (!params) {
      return '';
    }

    const { age, ageRange, gender } = params;
    return qs.stringify(
      R.mergeAll([
        {},
        gender ? { gender } : null,
        buildAgeParam(age, ageRange),
      ])
    );
  };

  const response = yield call(() => get(`${apiEndpoint}?${queryParams(payload)}`));
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
