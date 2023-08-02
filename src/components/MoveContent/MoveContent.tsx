import React, { FC, useEffect, useRef, useState } from 'react'
import style from './MoveContent.module.scss'
import { IMoveProps } from './MoveContentTypes'
import { getTemplateMenuState } from 'helpers';
import { ImembersState } from 'components/MembersContent/MembersContentTypes';

const MoveContent:FC<IMoveProps> = ({onClose}) => {
    const divContent = useRef<HTMLDivElement >(null);
   
    const [currentStyle,setCurrentStyle] = useState<ImembersState>({
        top:35,
        left:0
    })

    useEffect(() => {
        const div = divContent.current;
        const { top, height,left,width } = div!.getBoundingClientRect();
        const styleObject =  getTemplateMenuState(top,height,width,left);
        setCurrentStyle({...styleObject})
    }, [])
  return (
    <div style={{top:`${currentStyle.top}px`,left:`${currentStyle.left}px`}} ref={divContent}   data-name="Content" className={style.move}>
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