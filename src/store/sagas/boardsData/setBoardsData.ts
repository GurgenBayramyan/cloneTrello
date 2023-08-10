import { call, put, takeLatest } from "redux-saga/effects";
import { getBoard, setBoard } from "services/autication";
import { getBoardDataAction, setBoardDataAction } from "store/actionTypes";
import { IBoardData, ICurrentGetBoardData } from "store/slices/boardSlice/boarSliceTypes";
import { loading,  setBoardData, setCurrentBoardData, setError } from "store/slices/boardSlice/boardSlice";
import { IActionCreateBoardSaga, IActionGetBoardDatas } from "store/types";


function* setBoardSaga(action: IActionCreateBoardSaga) {
    
    const {boardTitle,navigate,bg} = action.payload;
    const  data:IBoardData = yield call(setBoard,boardTitle,bg);
    yield  put(setBoardData(data));
    yield  navigate(`/${data.id}`)
}
function* getBoardSaga(action:IActionGetBoardDatas ) {
    const id = action.payload
    yield put(loading(true));
    const data:ICurrentGetBoardData = yield call(getBoard,id);
    if(data.error){
       yield put(setError(true))
    }
    yield put(setCurrentBoardData(data));
    yield put(loading(false));
   
}
export function* watchSetBoardSaga() {
    yield takeLatest(setBoardDataAction, setBoardSaga)
    yield takeLatest(getBoardDataAction,getBoardSaga)
}