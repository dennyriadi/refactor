import { createAction } from 'redux-actions';
import { PEOPLE_GET_REQUESTED } from './types';

export const getPeople = createAction(PEOPLE_GET_REQUESTED);
