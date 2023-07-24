import classNames from 'classnames'
import style from './OptionList.module.scss'
import { useState } from 'react'

const OptionList = () => {
    const [optionBlock,setOptionBlock] = useState(true)
    const handleOpenOption = () => {
        setOptionBlock(!optionBlock)
    }
    const handleCloseOptionBlock = () => {
        setOptionBlock(true)
      }
      const blurForOption = () =>{
        setOptionBlock(true)
      }
  return (
       <div tabIndex={0} onBlur={blurForOption}>
          <h4 onClick={handleOpenOption}>...</h4>
          <div
            className={classNames(style.optionBlock, {
              [style.listNone]:optionBlock,
            })}
          >
            <div className={style.optionBlock_header}>
              <p>List actions</p>
              <h4 onClick={handleCloseOptionBlock}>X</h4>
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
              <div className={style.standartBlock}>
                <span>Archive this list...</span>
              </div>
            </div>
          </div>
        </div> 
  )
}

export default OptionList