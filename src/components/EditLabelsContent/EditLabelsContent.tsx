import React, { FC } from 'react'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import style from './EditLabelsContent.module.scss'
import { IEdit } from './EditLabelsContentTypes';
const EditLabelsContent:FC<IEdit> = ({onClose}) => {
  return (
    <div onClick={(e)=>e.stopPropagation()} className={style.editLabels}>
        <div className={style.editLabels_header}>
            <p>Labels</p>
            <span onClick={onClose}>X</span>
        </div>
        <div className={style.inputBlock}>
            <input type="text" placeholder="Search Labels..." />
        </div>
        <h5>Labels</h5>
        <div className={style.colors}>
            <input type="checkbox" />
            <div style={{background:"red"}} className={style.colors_color}>

            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"14px"}}/>
            </div>
        </div>
        <div className={style.colors}>
            <input type="checkbox" />
            <div style={{background:"blue"}}className={style.colors_color}>
                    
            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"14px"}}/>
            </div>
        </div>
        <div className={style.colors}>
            <input type="checkbox" />
            <div style={{background:"orange"}} className={style.colors_color}>
                    
            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"14px"}}/>
            </div>
        </div>
        <div className={style.colors}>
            <input type="checkbox" />
            <div style={{background:"green"}}className={style.colors_color}>
                    
            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"14px"}}/>
            </div>
        </div>
        <div className={style.colors}>
            <input type="checkbox" />
            <div style={{background:"grey"}} className={style.colors_color}>
                    
            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"14px"}}/>
            </div>
        </div>
        <div className={style.colors}>
            <input type="checkbox" />
            <div style={{background:"pink"}} className={style.colors_color}>
                    
            </div>
            <div className={style.icon}>
                <ModeEditOutlineIcon sx={{fontSize:"14px"}}/>
            </div>
        </div>
        <div className={style.standartDiv}>
            <span>Create a new label</span>
        </div>
        <hr />
        <div className={style.standartDiv}>
            <span>Enable colorblind friendly mode</span>
        </div>
        <div className={style.standartDiv}>
            <span>Give us feedback</span>
        </div>

    </div>
  )
}

export default EditLabelsContent