import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import style from "./OptionBoard.module.scss";
import { popupsSelector } from "store/selectors";
import {
  setDeleteBoardShow,
  setOptionBoardShow,
} from "store/slices/popupsSlice/popupSlice";
import { useEffect, useRef, useState } from "react";

const OptionBoard = () => {
  const { optionboard } = useAppSelector(popupsSelector);
  const [questionBlock, setQuestionBlock] = useState(false);
 const divRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(setOptionBoardShow(false));
  };
  const handleDeleteboard = () => {
    setQuestionBlock(!questionBlock);
  };
  useEffect(() => {
    if(divRef.current) {
      divRef.current!.focus()
    }
  }, [optionboard.show]);
  const handleOpenDeleteBlock = () => {
    dispatch(setOptionBoardShow(false));
    handleDeleteboard();
    dispatch(setDeleteBoardShow(true));
  };
  const handleBlur = () => {
    dispatch(setOptionBoardShow(false));
    setQuestionBlock(false);
  };
  return optionboard.show ? (
    <div
      ref={divRef}
      onBlur={handleBlur}
      tabIndex={0}
      style={{
        top: `${optionboard.currentTop}px`,
        left: `${optionboard.currentLeft}px`,
      }}
      className={style.option}
    >
      <div className={style.header}>
        {questionBlock && (
          <div onClick={handleDeleteboard} className={style.prev}>
            <p>{"<"}</p>
          </div>
        )}
        <p title={optionboard.name}>{optionboard.name}</p>
        <span data-name="close" onClick={onClose}>
          x
        </span>
      </div>
      {questionBlock ? (
        <div className={style.question}>
          <div className={style.disc}>
            <p>
              You can find and reopen closed boards at the bottom of{" "}
              <span className={style.blue}> your boards page.</span>
            </p>
          </div>
          <div onClick={handleOpenDeleteBlock} className={style.closeBlock}>
            <span>Close</span>
          </div>
        </div>
      ) : (
        <div>
          <div onClick={handleDeleteboard} className={style.settingsSection}>
            <span>close board</span>
            <span>{">"}</span>
          </div>
          <div className={style.settingsSection}>
            <span>change board options</span>
            <span>{">"}</span>
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default OptionBoard;


