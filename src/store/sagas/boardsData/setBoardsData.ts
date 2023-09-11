import { changeAllBoards, filterForId } from "helpers";
import { toast } from "react-toastify";
import { call, put, select, takeLatest } from "redux-saga/effects";
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
import { allBordersSelector, idCurrentBoardSelector } from "store/selectors";
import {
  IBoardData,
  ICurrentGetBoardData,
} from "store/slices/boardSlice/boarSliceTypes";
import {
  addBoards,
  setAllBoards,
  setBoardData,
  setChangeCurrentBoard,
  setCurrentBoardData,
  setCurrentLoading,
  setLoadingCreateAndChange,
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
    yield put(setBoardData(data));
    yield put(addBoards(data));
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
    yield put(setCurrentBoardData(data));
    
  } catch (err) {
   console.log(err)
  }
  yield put(setCurrentLoading(false))
}

function* getAllboardsSaga(action: any) {
  yield put(setCurrentLoading(true))
  try {
    const data: IBoardData[] = yield call(getAllBoards);
    yield put(setAllBoards(data));
  } catch (err: any) {
    toast.error(err.data);
  }
}

function* deleteBoardSaga(action: any) {
  yield put(setLoadingDelete(true));
  const { id, navigate } = action.payload;
  const allBoards: IBoardData[] = yield select(allBordersSelector);
  const CurrentID: number = yield select(idCurrentBoardSelector);
  try {
    const status: number = yield call(deleteBoard, id);
    if (status === StatusCode.OK) {
      const filteredArray = filterForId(allBoards, id);
      yield put(setAllBoards(filteredArray));

      if (id === CurrentID) {
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
  const allBoards: IBoardData[] = yield select(allBordersSelector);
  try {
    const data: ICurrentGetBoardData = yield call(
      setChangeBoard,
      id,
      boardTitle,
      bg
    );
    yield put(setAllBoards(changeAllBoards(id, allBoards, bg, boardTitle)));
    yield put(
      setChangeCurrentBoard({
        name: boardTitle,
        background: bg,
      })
    );
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
