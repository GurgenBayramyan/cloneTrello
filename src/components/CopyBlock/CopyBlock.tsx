import React, { FC } from 'react'
import { ICopyProps } from './CoppyBlockTypes'
import style from './CopyBlock.module.scss'
const CopyBlock:FC<ICopyProps> = ({onClose}) => {
  return (
    <div onClick={(e)=>e.stopPropagation()} className={style.copy}>
        <div className={style.copy_header}>
            <p>Copy card</p>
            <span onClick={onClose}>x</span>
        </div>
        <h5>Title</h5>
        <textarea></textarea>
        <h5>Copy to ...</h5>
        <div className={style.boards}>
            <div className={style.boardBlock}>
                <span>Board</span>
                <span>Task</span>
            </div>
            <div className={style.listsBlock}>
                <div className={style.list}>
                    <span>List</span>
                    <span>Done</span>
                </div>
                <div className={style.position}>
                    <span>Position</span>
                    <span>9</span>
                </div>
            </div>
        </div>
        <div className={style.button}>
            <span>Creae card</span>
        </div>
    </div>
  )
}

export default CopyBlock