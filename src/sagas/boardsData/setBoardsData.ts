import { Navigate, useNavigate } from "react-router-dom";
import { call, put, takeLatest } from "redux-saga/effects";
import { setBoard } from "services/autication";
import { setBoardDataAction } from "store/actionTypes";
import { IBoardData } from "store/slices/boardSlice/boarSliceTypes";
import { setBoardData } from "store/slices/boardSlice/boardSlice";
import navigateTo from "./navigateRout";

function* setBoardSaga(action: any):Generator<any, void> {
    const {boardTitle} = action.payload
    const data = yield call(setBoard,boardTitle);
    yield  put(setBoardData(data as IBoardData));
    navigateTo(`${boardTitle}`)
}
export function* watchSetBoardSaga() {
    yield takeLatest(setBoardDataAction, setBoardSaga)
}