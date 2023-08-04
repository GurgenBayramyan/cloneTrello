import React, { FC,useLayoutEffect, useRef, useState } from 'react'
import { ICopyProps} from './CoppyBlockTypes'
import style from './CopyBlock.module.scss'
import {  getTemplateMenuStates } from 'helpers';
import classNames from 'classnames';
const CopyBlock:FC<ICopyProps> = ({onClose}) => {
    const divContent = useRef<HTMLDivElement >(null);
   
    const [positionClass,setPositionClass] = useState(false)

    useLayoutEffect(() => {
        const div = divContent.current;
        const isHidden = getTemplateMenuStates(div!);
        setPositionClass(isHidden);
      }, []);
  return (
    <div ref={divContent}  className={classNames(style.copy,{
        [style.top]:positionClass
    })}>
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