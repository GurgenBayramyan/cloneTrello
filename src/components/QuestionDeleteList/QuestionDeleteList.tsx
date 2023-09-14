import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { FC, useState } from "react";
import { deleteListAction } from "store/actionTypes";
import style from "./QuestionDeleteList.module.scss";
import { IQuesTionProps } from "./QuestionDeleteListTypes";
import { useParams } from "react-router-dom";
import { listSliceSelector } from "store/selectors";
import { CircularProgress } from "@mui/material";

const QuestionDeleteList: FC<IQuesTionProps> = ({ onClose }) => {
  const [loading, setloading] = useState(false);
  const dispatch = useAppDispatch();
  const { ListId } = useAppSelector(listSliceSelector);
  const { id } = useParams();
  const changeLoading = () => {
    setloading((prev) => !prev)
  }
  const handleDeleteList = () => {
    if (ListId) {
      dispatch(deleteListAction({ Listid: ListId, boardId: id!,changeLoading, }));
    }
  };
 
  return loading ? (
    <div className={style.loading}>
        <CircularProgress color="success" />

    </div>
  ) : (
    <div onClick={onClose} className={style.wrapper}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={style.contentQuestion}
      >
        <span>are you soure delete?</span>
        <div className={style.userRequest}>
          <span onClick={handleDeleteList}>yes</span>
          <span onClick={onClose}>no</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionDeleteList;
