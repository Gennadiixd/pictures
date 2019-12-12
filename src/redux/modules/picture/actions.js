import * as C from './consts';
import { put, call, takeEvery } from "redux-saga/effects";
import { requestPictureAPI } from '../../../services/picture-service';

const requestPictureAC = () => {
  return { type: C.GET_PICTURE_REQUEST }
}

const requestPictureSuccessAC = (picture) => {
  return {
    type: C.GET_PICTURE_SUCCESS,
    payload: {
      pictureUrl: picture.data.image_original_url,
      importDateTime: picture.data.import_datetime,
      title: picture.data.title
    }
  }
}

const requestPictureErrorAC = () => {
  return { type: C.GET_PICTURE_FAIL }
}

export function* watchRequestPicture() {
  yield takeEvery(C.GET_PICTURE, fetchPictureAC);
}

export function* fetchPictureAC() {
  try {
    yield put(requestPictureAC())
    const data = yield call(requestPictureAPI)
    yield put(requestPictureSuccessAC(data))
  } catch (error) {
    yield put(requestPictureErrorAC())
  }
}

export function getPictureAC() {
  return { type: C.GET_PICTURE };
}