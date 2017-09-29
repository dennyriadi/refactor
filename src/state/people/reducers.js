import { PEOPLE_GET_SUCCESSFUL } from './types';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case PEOPLE_GET_SUCCESSFUL:
      return action.payload;
    default:
      return state;
  }
};
