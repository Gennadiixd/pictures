import * as C from './consts';
import { put, call, debounce } from "redux-saga/effects";
import { requestPictureAPI } from '../../../services/picture-service';
import { getDateTimeNow } from '../../../helpers/date-time';

const requestPictureAC = () => {
  return { type: C.GET_PICTURE_REQUEST }
}

const requestPictureSuccessAC = (picture) => {
  return {
    type: C.GET_PICTURE_SUCCESS,
    payload: {
      pictureUrl: picture.data.image_original_url,
      importDateTime: getDateTimeNow(),
      title: picture.data.title,
      id: picture.data.id,
    }
  }
}

const requestPictureErrorAC = () => {
  return { type: C.GET_PICTURE_FAIL }
}

export function* watchRequestPicture() {
  yield debounce(500, C.GET_PICTURE, fetchPictureSaga);
}

export function* fetchPictureSaga() {
  try {
    yield put(requestPictureAC());
    const data = yield call(requestPictureAPI);
    yield put(requestPictureSuccessAC(data));
  } catch (error) {
    console.log(error)
    yield put(requestPictureErrorAC());
  }
}

export function getPictureAC() {
  return { type: C.GET_PICTURE };
}

export function removeHistoryItemAC(index) {
  return {
    type: C.REMOVE_HISTORY_ITEM,
    payload: { index }
  };
}