import { changeAllBoards, filterForId } from "helpers";
import { toast } from "react-toastify";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { deleteBoard, getAllBoards, getBoard, setBoard, setChangeBoard } from "services/autication";
import { deleteBoardAction, getAllBoardsAction, getBoardDataAction, setBoardDataAction, setBoardDataChangeAction } from "store/actionTypes";
import { allBordersSelector, idCurrentBoardSelector } from "store/selectors";
import { IBoardData, ICurrentGetBoardData } from "store/slices/boardSlice/boarSliceTypes";
import { addBoards, loading,  setAllBoards,  setBoardData, setChangeCurrentBoard, setCurrentBoard, setCurrentBoardData, setError} from "store/slices/boardSlice/boardSlice";
import { setDeleteBoardShow } from "store/slices/popupsSlice/popupSlice";
import { IActionCreateBoardSaga, IActionGetBoardDatas } from "store/types";
import { StatusCode } from "types";
import { message } from "types/constants";


function* setBoardSaga(action: IActionCreateBoardSaga) {
    const {boardTitle,navigate,bg} = action.payload;
    const  data:IBoardData = yield call(setBoard,boardTitle,bg);
    yield  put(setBoardData(data));
    yield put(addBoards(data))
    yield  navigate(`/board/${data.id}`)
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
    const CurrentID:number = yield select(idCurrentBoardSelector)
    const filteredArray =  filterForId(allBoards,id);
    const status:number = yield call(deleteBoard,id);
  
    if(status === StatusCode.OK){
        yield put(setAllBoards(filteredArray));
        
        if(id === CurrentID){
            yield navigate('/')
        }
        toast.success(message, {
        })
    }else{
        toast.error(status)
    }
    yield put(setDeleteBoardShow(false));
}
function* changeBoardsSaga (action:any){
    const {id,navigate,bg,boardTitle,patch} = action.payload;
    
    const allBoards:IBoardData[]= yield select(allBordersSelector);
    const data:ICurrentGetBoardData = yield call(setChangeBoard,id,boardTitle,bg);
    yield put(setAllBoards(changeAllBoards(id,allBoards,bg,boardTitle)));
    yield put(setChangeCurrentBoard({
        name:boardTitle,
        background:bg
    }))
    if(!(patch == id)){
        navigate(`/board/${id}`)
    }
}
export function* watchSetBoardSaga() {
    yield takeLatest(setBoardDataAction, setBoardSaga)
    yield takeLatest(getBoardDataAction,getBoardSaga)
    yield takeLatest(getAllBoardsAction,getAllboardsSaga)
    yield takeLatest(deleteBoardAction,deleteBoardSaga)
    yield takeLatest(setBoardDataChangeAction,changeBoardsSaga)
}