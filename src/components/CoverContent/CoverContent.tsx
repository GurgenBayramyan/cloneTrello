import React, { FC, useEffect, useRef, useState } from 'react'
import style from './CoverContent.module.scss'
import { ICoverProps, ICoverState } from './CoverContentTypes'
import { getTemplateMenuState } from 'helpers';


const CoverContent:FC<ICoverProps> = ({onClose}) => {
    const divContent = useRef<HTMLDivElement >(null);
   
    const [currentStyle,setCurrentStyle] = useState<ICoverState>({
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
    <div style={{top:`${currentStyle.top}px`,left:`${currentStyle.left}px`}} ref={divContent}  className={style.changecover}>
            <div className={style.changecover_header}>
                <p>Cover</p>
                <span  data-name="close" onClick={onClose}>x</span>
            </div>
            <h5>Colors</h5>
            <div className={style.changecover_colors}>
                <div className={style.rowOne}>
                    <div  className={style.silver}></div>
                    <div  className={style.maroon}></div>
                    <div  className={style.red}></div>
                    <div  className={style.purple}></div>
                    <div className={style.lime}></div>
                </div>
                <div className={style.rowTwo}>
                    <div  className={style.navy}></div>
                    <div  className={style.teal}></div>
                    <div  className={style.aqua}></div>
                    <div  className={style.rchartreuse}></div>
                    <div className={style.gold}></div>
                </div>
            </div>
            <h5>Attachments</h5>
            <div className={style.standartBlock}>
                <p>Upload a cover Image</p>
            </div>
            <p className={style.standartParagraf}>Tip:Drag an image on to the card to upload it.</p>
            <h5>Photos from Unsplash</h5>
            <div className={style.backgroundsBlock}>
                <div className={style.backgroundsBlock_rowOne}>
                    <div  className={style.backgraund_one}></div>
                    <div className={style.backgraund_two}></div>
                    <div  className={style.backgraund_tree}></div>
                </div>
                <div className={style.backgroundsBlock_rowTwo}>
                    <div className={style.backgraund_for} ></div>
                    <div className={style.backgraund_five} ></div>
                    <div  className={style.backgraund_six} ></div>
                </div>
            </div>
            <div className={style.standartBlock}>
                <p>Search for photos</p>
            </div>
            <span className={style.befforEnd}>Byusing images from Unsplash,you agree to their <i>License</i> and <i>Terms of Service</i></span>
    </div>
  )
}

export default CoverContent