import React, { FC } from 'react'
import style from './MoveContent.module.scss'
import { IMoveProps } from './MoveContentTypes'

const MoveContent:FC<IMoveProps> = ({onClose}) => {
  return (
    <div className={style.move}>
        <div className={style.move_header}>
            <p>Move Card</p>
            <span onClick={onClose}>X</span>
        </div>
        <h5>Select destination</h5>
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
            <span>Move</span>
        </div>
    </div>
  )
}

export default MoveContent