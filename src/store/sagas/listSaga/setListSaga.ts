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
  const { id, fieldName, changeLoading, handleChangeActive } = action.payload;
  
  try {
    changeLoading();
    const resp = yield call(createList, id, fieldName);
    const lists: IList[] = yield call(getAllLists, id);
    yield put(getAlllists(lists));
    toast.success(resp.statusText);
    changeLoading();
    handleChangeActive()
  } catch (err: unknown) {
    console.log(err);
  }
  
}
function* deleteListSaga(
  action: PayloadAction<IDeleteListSaga>
): Generator<any, void, any> {
  const { listid, boardId, changeLoading } = action.payload;
 
  try {
    changeLoading();
    const resp: string = yield call(deleteList, listid);
    const lists: IList[] = yield call(getAllLists, boardId);
    yield put(getAlllists(lists));
    toast.success(resp);
    changeLoading();
  } catch (err: unknown) {
    console.log(err);
  }
  
}
function* changeListSaga(
  action: PayloadAction<IChangeListSaga>
): Generator<any, void, any> {
  const { listid, name, boardId } = action.payload;
  try {
    yield call(changeLists, listid, { name });
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
