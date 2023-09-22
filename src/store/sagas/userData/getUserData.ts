import { getUSerData } from "helpers";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUserDataAction } from "store/actionTypes";
import {
  setUserData,
} from "store/slices/contentSlice/contentSlice";
import { IUserData } from "store/slices/contentSlice/contentSliceTypes";

function* setUserSaga(): Generator<any, void> {
  const data = yield call(getUSerData);
  yield put(setUserData(data as IUserData));
}

export function* watchUserSaga() {
  yield takeLatest(getUserDataAction, setUserSaga);
}
