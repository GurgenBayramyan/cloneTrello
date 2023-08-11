import { call, put, takeLatest } from "redux-saga/effects";
import { getAllBoards, getBoard, setBoard } from "services/autication";
import { getAllBoardsAction, getBoardDataAction, setBoardDataAction } from "store/actionTypes";
import { IBoardData, ICurrentGetBoardData } from "store/slices/boardSlice/boarSliceTypes";
import { loading,  setAllBoards,  setBoardData, setCurrentBoardData, setError, setUpdate } from "store/slices/boardSlice/boardSlice";
import { IActionCreateBoardSaga, IActionGetBoardDatas } from "store/types";


function* setBoardSaga(action: IActionCreateBoardSaga) {
    const {boardTitle,navigate,bg} = action.payload;
    yield put(setUpdate(true))
    const  data:IBoardData = yield call(setBoard,boardTitle,bg);
    yield  put(setBoardData(data));
    yield  navigate(`/board/${data.id}`)
    yield put(setUpdate(false))
}
function* getBoardSaga(action:IActionGetBoardDatas ) {
    const id = action.payload
    const data:ICurrentGetBoardData = yield call(getBoard,id);
    if(data.error){
       yield put(setError(true))
    }
    yield put(setCurrentBoardData(data));
    yield put(loading(false));
   
}

function* getAllboardsSaga (action:any){
    const data:IBoardData[] = yield call(getAllBoards);
    yield put(setAllBoards(data));
}
export function* watchSetBoardSaga() {
    yield takeLatest(setBoardDataAction, setBoardSaga)
    yield takeLatest(getBoardDataAction,getBoardSaga)
    yield takeLatest(getAllBoardsAction,getAllboardsSaga)
}