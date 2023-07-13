import { getUSerData } from "helpers";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUserDataAction } from "store/actionTypes";
import { setUserData } from "store/slices/contentSlice/contentSlice";

function* setUserSaga():Generator<any, void> {
    const data = yield call(getUSerData)
    yield put(setUserData(data))
}

export function* watchUserSaga() {
    yield takeLatest(getUserDataAction,setUserSaga)
}