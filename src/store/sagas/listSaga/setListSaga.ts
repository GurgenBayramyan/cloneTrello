import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  changeLists,
  createList,
  deleteList,
  getAllLists,
} from "services/listsServices";
import {
  changeListAction,
  createListAction,
  deleteListAction,
  setAllListAction,
} from "store/actionTypes";
import { getAlllists } from "store/slices/listSlice/listSlice";
import { IList } from "store/slices/listSlice/listSliceTypes";
import {
  IChangeListSaga,
  ICreateListSaga,
  IDeleteListSaga,
  ISetAllListSaga,
} from "types";

function* setAllListSaga(action: PayloadAction<ISetAllListSaga>) {
  const { id } = action.payload;
  try {
    const lists: IList[] = yield call(getAllLists, id);
    yield put(getAlllists(lists));
  } catch (err: unknown) {}
}
function* createListSaga(
  action: PayloadAction<ICreateListSaga>
): Generator<any, void, any> {
  const { id, fieldName, changeLoading } = action.payload;
  changeLoading();
  try {
    const resp = yield call(createList, id, fieldName);
    const lists: IList[] = yield call(getAllLists, id);
    yield put(getAlllists(lists));
    toast.success(resp.statusText);
  } catch (err: unknown) {
    console.log(err);
  }
  changeLoading();
}
function* deleteListSaga(
  action: PayloadAction<IDeleteListSaga>
): Generator<any, void, any> {
  const { Listid, boardId, changeLoading } = action.payload;
  changeLoading();
  try {
    const resp: string = yield call(deleteList, Listid);
    const lists: IList[] = yield call(getAllLists, boardId);
    yield put(getAlllists(lists));
    toast.success(resp);
  } catch (err: unknown) {
    console.log(err);
  }
  changeLoading();
}
function* changeListSaga(
  action: PayloadAction<IChangeListSaga>
): Generator<any, void, any> {
  const { Listid, name, boardId } = action.payload;
  try {
    const resp = yield call(changeLists, Listid, { name });
    const lists: IList[] = yield call(getAllLists, boardId);
    yield put(getAlllists(lists));
  } catch (err: unknown) {
    console.log(err);
  }
}
export function* watchSetListSaga() {
  yield takeLatest(setAllListAction.type, setAllListSaga);
  yield takeLatest(createListAction.type, createListSaga);
  yield takeLatest(deleteListAction.type, deleteListSaga);
  yield takeLatest(changeListAction, changeListSaga);
}
