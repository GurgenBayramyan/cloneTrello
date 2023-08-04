import  { FC } from 'react'
import InsertChartIcon from '@mui/icons-material/InsertChart';
import style from './AttachComponent.module.scss'
import { IPropsAttachmenContent } from './AttachComponentTypes';

const AttachComponent:FC<IPropsAttachmenContent> = ({name}) => {
  return (
    <div className={style.task}>
        <div className={style.iconBlock}>
            <InsertChartIcon sx={{fontSize:"18px",color:"#579dff"}}/>
        </div>
        <div className={style.textBlock}>
            <h4>{name}</h4>
            <span>Tasks * Viewed 1 hour age</span>
        </div>
    </div>
  )
}

export default AttachComponent