import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import style from "./OptionBoard.module.scss";
import {  boardSliceSelector, boardsSelector, popupsSelector } from "store/selectors";
import {
  openCreateSection,
  setDeleteBoardShow,
  setOptionBoardShow,
  setOptionBoardToDefault,
  setQuestionBlock,
} from "store/slices/popupsSlice/popupSlice";
import { FocusEvent, MouseEvent, useEffect, useRef } from "react";
import { PageLocation } from "types";
import { setChangeBoard } from "store/slices/boardSlice/boardSlice";
import { getPositionQuestionBlock, getPositionSectionTop } from "helpers";

const OptionBoard = () => {
  const { optionboard, questionBlock } = useAppSelector(popupsSelector);
  const{changeBoard} = useAppSelector(boardSliceSelector)
  const divRef = useRef<HTMLDivElement>(null);
 const boards = useAppSelector(boardsSelector.selectEntities)
  const dispatch = useAppDispatch();

  const handleDeleteboard = () => {
    dispatch(setQuestionBlock(!questionBlock));
  };
  useEffect(() => {
    if (divRef.current) {
      divRef.current!.focus();
    }
    
  }, [optionboard.show]);
  const handleOpenDeleteBlock = () => {
    dispatch(setOptionBoardShow(false));
    handleDeleteboard();
    dispatch(setDeleteBoardShow(true));
  };
  const handleBlur = (e: FocusEvent<HTMLElement> | MouseEvent<HTMLElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget?.dataset.name === "spred") {
      divRef.current?.focus();
      return;
    }
    if (relatedTarget?.dataset.block !== "change") {
      dispatch(setChangeBoard({}));
    }
    dispatch(setOptionBoardToDefault());
    dispatch(setQuestionBlock(false));
  };
  const openChangeBoardMenu = () => {
    const id = optionboard.id;
    const elem = boards[id];
    dispatch(
      openCreateSection({
        menuActive: true,
        menuBlock: PageLocation.CREATEBOARD,
        ...getPositionSectionTop(optionboard.currentTop,optionboard.currentLeft),
      })
    );
    elem ? dispatch(setChangeBoard(elem)) : dispatch(setChangeBoard({}));
  };
  return optionboard.show ? (
    <div
      ref={divRef}
      onBlur={handleBlur}
      tabIndex={0}
      style={{
        top: `${getPositionQuestionBlock(optionboard.currentTop)}px`,
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
        <span data-name="close" onClick={handleBlur}>
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
          <div onClick={openChangeBoardMenu} className={style.settingsSection}>
            <span>change board options</span>
            <span>{">"}</span>
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default OptionBoard;
