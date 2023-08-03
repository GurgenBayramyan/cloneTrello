import React, { FC, useEffect, useRef, useState } from 'react'
import { ICopyProps, ICopyState } from './CoppyBlockTypes'
import style from './CopyBlock.module.scss'
import { getTemplateMenuState } from 'helpers';
const CopyBlock:FC<ICopyProps> = ({onClose}) => {
    const divContent = useRef<HTMLDivElement >(null);
   
    const [currentStyle,setCurrentStyle] = useState<ICopyState>({
        top:0,
        left:0
    })

    useEffect(() => {
        const div = divContent.current;
        const { top, height,left,width } = div!.getBoundingClientRect();
        const styleObject =  getTemplateMenuState(top,height,width,left);
        setCurrentStyle({...styleObject})
    }, [])
  return (
    <div style={{top:`${currentStyle.top}px`,left:`${currentStyle.left}px`}} ref={divContent}  className={style.copy}>
        <div className={style.copy_header}>
            <p>Copy card</p>
            <span data-name="close" onClick={onClose}>x</span>
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