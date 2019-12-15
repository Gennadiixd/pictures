import { createSelector } from 'reselect';
import * as M from './models';
const { getIn } = require('immutable');

export const getErrorSelector = (state) => {
  return state.picture.get('error');
}

export const getLoadingSelector = (state) => {
  return state.picture.get('loading');
}

export const getInitStateSelector = (state) => {
  return state.picture.get('initState');
}

export const getHistory = (state) => {
  return state.picture.get('history').toJS();
}

export const getPictureDataSelector = (state) => {
  const history = getIn(state, ['picture', 'history'], M.history);
  if (history.size !== 0) {
    return history.get(-1);
  }
  return M.history.get(-1);
}

export const getPictureSelector = createSelector(
  getPictureDataSelector,
  getErrorSelector,
  (historyElement, error) => {
    if (error) {
      return M.error;
    }
    return historyElement.toJS();
  });