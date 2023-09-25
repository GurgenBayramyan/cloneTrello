import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { MouseEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBoardAction } from "store/actionTypes";
import { popupsSelector } from "store/selectors";
import { setDeleteBoardShow, setOptionBoardToDefault } from "store/slices/popupsSlice/popupSlice";
import style from "./DeleteBoard.module.scss";
import { CircularProgress } from "@mui/material";
import { setChangeBoard } from '../../store/slices/boardSlice/boardSlice'



const DeleteBoard = () => {
  const { deleteBoard, optionboard, loadingDelete } =
    useAppSelector(popupsSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(setChangeBoard({}))
    dispatch(setOptionBoardToDefault());
    dispatch(setDeleteBoardShow(false));
    
  };

  const { id } = useParams();


  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const handleDelete = () => {
    dispatch(
      deleteBoardAction({
        id: +id!,
        navigate,
        currentid:optionboard.id
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
