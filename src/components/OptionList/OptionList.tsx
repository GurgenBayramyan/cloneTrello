import classNames from "classnames";
import { FC,useState } from "react";
import style from "./OptionList.module.scss";
import QuestionDeleteList from "components/QuestionDeleteList/QuestionDeleteList";


const OptionList:FC<{listId:number}> = ({listId}) => {
  const [optionBlock, setOptionBlock] = useState(true);
  const [questionBlock, setQuestionBlock] = useState(false);

  const handleOpenOption = () => {
    setOptionBlock(!optionBlock);
    
  };
  const handleCloseOptionBlock = () => {
    setOptionBlock(true);
  };
  const blurForOption = () => {
    setOptionBlock(true);
  };
  const openQuestionBlock = () => {
    setOptionBlock(true);
    setQuestionBlock((prev) => !prev);
  };

  return (
    <div tabIndex={0} onBlur={blurForOption}>
      <h4 onClick={handleOpenOption}>...</h4>
      {questionBlock ? (
        <QuestionDeleteList onClose={openQuestionBlock} listId={listId}/>
      ) : (
        <div
          className={classNames(style.optionBlock, {
            [style.listNone]: optionBlock,
          })}
        >
          <div className={style.optionBlock_header}>
            <p>List actions</p>
            <span onClick={handleCloseOptionBlock}>x</span>
          </div>
          <div className={style.parentStandartDiv}>
            <div className={style.standartBlock}>
              <span>Add card...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Copy list...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Move list...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Watch</span>
            </div>
            <hr />
            <div className={style.standartBlock}>
              <span>Sort by</span>
            </div>
            <hr />
            <h3>Automation</h3>
            <div className={style.standartBlock}>
              <span>When a card is added to the list...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Every day sort list by ...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Every Monday sort list by ...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Create a rule</span>
            </div>
            <hr />
            <div className={style.standartBlock}>
              <span>Move all cards in this list...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Archive all cards in this list...</span>
            </div>
            <hr />
            <div onClick={openQuestionBlock} className={style.standartBlock}>
              <span>Delete List</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionList;
