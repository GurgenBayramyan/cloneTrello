import  { FC,  useLayoutEffect, useRef, useState } from 'react'
import style from './MoveContent.module.scss'
import { IMoveProps } from './MoveContentTypes'
import {  getTemplateMenuStates } from 'helpers';
import classNames from 'classnames';

const MoveContent:FC<IMoveProps> = ({onClose}) => {
    const divContent = useRef<HTMLDivElement >(null);
   
    const [positionClass,setPositionClass] = useState(false)

    useLayoutEffect(() => {
        const div = divContent.current;
        const isHidden = getTemplateMenuStates(div!);
        setPositionClass(isHidden);
      }, []);
  return (
    <div  ref={divContent}   data-name="Content" className={classNames(style.move,{
        [style.top]:positionClass
    })}>
        <div className={style.move_header}>
            <p>Move Card</p>
            <span data-name="close" onClick={onClose}>x</span>
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