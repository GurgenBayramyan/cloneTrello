import  { FC, useEffect, useLayoutEffect, useRef, useState } from 'react'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import style from './EditLabelsContent.module.scss'
import { IEdit} from './EditLabelsContentTypes';
import {  getTemplateMenuStates } from 'helpers';
import classNames from 'classnames';
const EditLabelsContent:FC<IEdit> = ({onClose}) => {
    const divContent = useRef<HTMLDivElement >(null);
    const [positionClass,setPositionClass] = useState(false)

    useLayoutEffect(() => {
        const div = divContent.current;
        const isHidden = getTemplateMenuStates(div!);
        setPositionClass(isHidden);
      }, []);


  return (
    <div ref={divContent}  className={classNames(style.editLabels,{
        [style.top]:positionClass
    })}>
        <div className={style.editLabels_header}>
            <p>Labels</p>
            <span data-name="close" onClick={onClose}>x</span>
        </div>
        <div className={style.inputBlock}>
            <input type="text" placeholder="Search Labels..." />
        </div>
        <h5>Labels</h5>
        <div className={style.colors}>
            <input type="checkbox" />
            <div  className={style.colors_color_red}>

            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"18px",cursor:"pointer"}}/>
            </div>
        </div>
        <div className={style.colors}>
            <input type="checkbox" />
            <div className={style.colors_color_blue}>
                    
            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"18px",cursor:"pointer"}}/>
            </div>
        </div>
        <div className={style.colors}>
            <input type="checkbox" />
            <div className={style.colors_color_orange}>
                    
            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"18px",cursor:"pointer"}}/>
            </div>
        </div>
        <div className={style.colors}>
            <input type="checkbox" />
            <div className={style.colors_color_green}>
                    
            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"18px",cursor:"pointer"}}/>
            </div>
        </div>
        <div className={style.colors}>
            <input type="checkbox" />
            <div className={style.colors_color_grey}>
                    
            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"18px",cursor:"pointer"}}/>
            </div>
        </div>
        <div className={style.colors}>
            <input type="checkbox" />
            <div className={style.colors_color_pink}>
                    
            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"18px",cursor:"pointer"}}/>
            </div>
        </div>
        <div className={style.standartBlock}>
            <span>Create a new label</span>
        </div>
        <hr />
        <div className={style.standartBlock}>
            <span>Enable colorblind friendly mode</span>
        </div>
    </div>
  )
}

export default EditLabelsContent