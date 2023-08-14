import { filterForId } from "helpers";
import { toast } from "react-toastify";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { deleteBoard, getAllBoards, getBoard, setBoard } from "services/autication";
import { deleteBoardAction, getAllBoardsAction, getBoardDataAction, setBoardDataAction } from "store/actionTypes";
import { allBordersSelector } from "store/selectors";
import { IBoardData, IBoardInitialState, ICurrentGetBoardData } from "store/slices/boardSlice/boarSliceTypes";
import { loading,  setAllBoards,  setBoardData, setCurrentBoardData, setError, setUpdate } from "store/slices/boardSlice/boardSlice";
import { setDeleteBoardShow } from "store/slices/popupsSlice/popupSlice";
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
function* deleteBoardSaga (action:any){
    const {id,navigate} = action.payload
    const allBoards:IBoardData[]= yield select(allBordersSelector);
    const CurrentID:number = yield select(state=>state.boardSlice.currentBoard.id)
    const filteredArray =  filterForId(allBoards,id);
    const status:number = yield call(deleteBoard,id);
    yield put(setAllBoards(filteredArray));
    yield put(setDeleteBoardShow(false));
    if(id === CurrentID){
        yield navigate('/')
    }
    
    toast.success("boardDeleted sucsess", {
    })
}
export function* watchSetBoardSaga() {
    yield takeLatest(setBoardDataAction, setBoardSaga)
    yield takeLatest(getBoardDataAction,getBoardSaga)
    yield takeLatest(getAllBoardsAction,getAllboardsSaga)
    yield takeLatest(deleteBoardAction,deleteBoardSaga)
}