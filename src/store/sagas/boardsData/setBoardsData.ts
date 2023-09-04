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
} from "store/slices/boardSlice/boardSlice";
import { setLoading } from "store/slices/contentSlice/contentSlice";
import { setDeleteBoardShow } from "store/slices/popupsSlice/popupSlice";
import { IActionCreateBoardSaga, IActionGetBoardDatas } from "store/types";
import { StatusCode } from "types";
import { message } from "types/constants";

function* setBoardSaga(action: IActionCreateBoardSaga) {
  const { boardTitle, navigate, bg } = action.payload;
  try {
    const data: IBoardData = yield call(setBoard, boardTitle, bg);
    yield put(setBoardData(data));
    yield put(addBoards(data));
    yield navigate(`/board/${data.id}`);
  } catch (err: any) {
    toast.error(err.message);
  }
}
function* getBoardSaga(action: IActionGetBoardDatas) {
  const { id, navigate } = action.payload;
  try {
    const data: ICurrentGetBoardData = yield call(getBoard, id);
    yield put(setCurrentBoardData(data));
    yield put(setLoading(false));
  } catch (err) {
    navigate("/error");
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
  const { id, navigate } = action.payload;
  const allBoards: IBoardData[] = yield select(allBordersSelector);
  const CurrentID: number = yield select(idCurrentBoardSelector);
  const filteredArray = filterForId(allBoards, id);
  try {
    const status: number = yield call(deleteBoard, id);
    if (status === StatusCode.OK) {
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

  yield put(setDeleteBoardShow(false));
}
function* changeBoardsSaga(action: any) {
  const { id, navigate, bg, boardTitle, patch } = action.payload;

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
  } catch (err) {
    toast.error("Board is not changet");
  }
}

export function* watchSetBoardSaga() {
  yield takeLatest(setBoardDataAction, setBoardSaga);
  yield takeLatest(getBoardDataAction, getBoardSaga);
  yield takeLatest(getAllBoardsAction, getAllboardsSaga);
  yield takeLatest(deleteBoardAction, deleteBoardSaga);
  yield takeLatest(setBoardDataChangeAction, changeBoardsSaga);
}
