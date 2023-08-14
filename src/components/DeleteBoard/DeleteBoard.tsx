import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { popupsSelector } from "store/selectors";
import style from "./DeleteBoard.module.scss";
import { setDeleteBoardShow } from "store/slices/popupsSlice/popupSlice";
import { MouseEvent } from "react";
import { deleteBoardAction } from "store/actionTypes";
import { useNavigate } from "react-router-dom";


const DeleteBoard = () => {
  const { deleteBoard,optionboard } = useAppSelector(popupsSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(setDeleteBoardShow(false));
  };

  const stopPropagation = (e:MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  const handleDelete = () => {
    dispatch(deleteBoardAction({
      id: optionboard.id,
      navigate,
    }))
  }

  return deleteBoard.show ? (
    <div onClick={handleClose} className={style.parentBlock}>
      <div
       onClick={stopPropagation}
        className={style.deleteBlock}
      >
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
  ) : null;
};

export default DeleteBoard;
