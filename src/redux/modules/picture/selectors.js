import { createSelector } from 'reselect';
import * as M from './models';

export const getErrorSelector = (state) => {
  return state.picture.error;
}

export const getLoadingSelector = (state) => {
  return state.picture.loading;
}

export const getInitStateSelector = (state) => {
  return state.picture.initState;
}

export const getPictureStore = (state) => {
  if (state.picture) return state.picture
  else return M.Picture()
}

export const getPictureDataSelector = (state) => {
  if (!state.picture.history.length) return new M.Picture();
  return state.picture.history;
}

export const getPictureSelector = createSelector(
  getPictureDataSelector,
  (history) => {
    return {
      ...history[history.length - 1]
    }
  });