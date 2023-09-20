import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { MouseEvent } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { deleteBoardAction } from "store/actionTypes";
import { popupsSelector } from "store/selectors";
import { setDeleteBoardShow } from "store/slices/popupsSlice/popupSlice";
import style from "./DeleteBoard.module.scss";
import { CircularProgress } from "@mui/material";

const DeleteBoard = () => {
  const { deleteBoard, optionboard, loadingDelete } =
    useAppSelector(popupsSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(setDeleteBoardShow(false));
  };

  const location = useLocation();
 

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const handleDelete = () => {
    dispatch(
      deleteBoardAction({
        currentid: optionboard.id,
        navigate,
        id:location.pathname.split("/").reverse()[0]
      })
    );
  };

  return deleteBoard.show ? (
    loadingDelete ? (
      <div className={style.wrapper}>
        <CircularProgress disableShrink />
      </div>
    ) : (
      <div onClick={handleClose} className={style.parentBlock}>
        <div onClick={stopPropagation} className={style.deleteBlock}>
          <h4>{optionboard.name}</h4>
          <div className={style.question}>
            <span>are you soure delete?</span>
          </div>
          <div className={style.answer}>
            <div onClick={handleDelete} className={style.request}>
              <span>yes</span>
            </div>
            <div onClick={handleClose} className={style.request}>
              <span>no</span>
            </div>
          </div>
        </div>
      </div>
    )
  ) : null;
};

export default DeleteBoard;
