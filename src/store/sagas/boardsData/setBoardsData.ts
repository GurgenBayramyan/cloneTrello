import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  deleteBoard,
  getAllBoards,
  getBoard,
  setBoard,
  setChangeBoard,
} from "services/autication";
import {
  deleteBoardAction,
  getAllBoardsAction,
  getBoardDataAction,
  setBoardDataAction,
  setBoardDataChangeAction,
} from "store/actionTypes";
import {
  IBoardData,
  ICurrentGetBoardData,
} from "store/slices/boardSlice/boarSliceTypes";
import {
  boardDelete,
  setAllBoards,
  setLoadingCreateAndChange,
  updateBoard,
} from "store/slices/boardSlice/boardSlice";
import {
  openCreateSection,
  setDeleteBoardShow,
  setLoadingDelete,
} from "store/slices/popupsSlice/popupSlice";
import { IActionCreateBoardSaga, IActionGetBoardDatas } from "store/types";
import { PageLocation, StatusCode } from "types";
import { message } from "types/constants";

function* setBoardSaga(action: IActionCreateBoardSaga) {
  const { boardTitle, navigate, bg } = action.payload;
  yield put(setLoadingCreateAndChange(true));
  try {
    const data: IBoardData = yield call(setBoard, boardTitle, bg);
    const allBords: IBoardData[] = yield call(getAllBoards);
    yield put(setAllBoards(allBords));
    yield put(
      openCreateSection({
        menuActive: false,
        menuBlock: PageLocation.CREATEMENU,
        currentTop: 0,
        currentLeft: 0,
      })
    );
    yield navigate(`/board/${data.id}`);
    toast.success("Board created successfully")
  } catch (err: any) {
    toast.error(err.message);
  }
  yield put(setLoadingCreateAndChange(false));
  
}
function* getBoardSaga(action: IActionGetBoardDatas) {
  const { id } = action.payload;
  
  try {
    const data: ICurrentGetBoardData = yield call(getBoard, id);
    yield put(updateBoard(data))
  } catch (err:any) {
    toast.error(err.response.data.error)
   console.log(err)
  }
}

function* getAllboardsSaga(action: any) {
  try {
    const data: IBoardData[] = yield call(getAllBoards);
    yield put(setAllBoards(data));
  } catch (err: any) {
    toast.error(err.data);
  }
}

function* deleteBoardSaga(action: any) {
  yield put(setLoadingDelete(true));
  const { currentid, navigate , id} = action.payload;
  try {
    const status: number = yield call(deleteBoard, currentid);
    
    if (status === StatusCode.OK) {
        yield put(boardDelete(currentid))

      if (currentid === +id) {
        console.log("yay")
        yield navigate("/");
      }
      toast.success(message);
    }
  } catch (err: any) {
    const { data } = err.response;
    toast.error(data);
  }
  yield put(setLoadingDelete(false));
  yield put(setDeleteBoardShow(false));
  
}

function* changeBoardsSaga(action: any) {
  const { id, navigate, bg, boardTitle, patch } = action.payload;
  yield put(setLoadingCreateAndChange(true));
  try {
    const data: ICurrentGetBoardData = yield call(
      setChangeBoard,
      id,
      boardTitle,
      bg
    );
    yield put(updateBoard(data))
    toast.success("Board is Changed");
    if (!(patch === id)) {
      navigate(`/board/${id}`);
    }
    yield put(
      openCreateSection({
        menuActive: false,
        menuBlock: PageLocation.CREATEMENU,
        currentTop: 0,
        currentLeft: 0,
      })
    );
  } catch (err) {
    toast.error("Board is not changet");
  }
  yield put(setLoadingCreateAndChange(false));
}

export function* watchSetBoardSaga() {
  yield takeLatest(setBoardDataAction, setBoardSaga);
  yield takeLatest(getBoardDataAction, getBoardSaga);
  yield takeLatest(getAllBoardsAction, getAllboardsSaga);
  yield takeLatest(deleteBoardAction, deleteBoardSaga);
  yield takeLatest(setBoardDataChangeAction, changeBoardsSaga);
}
