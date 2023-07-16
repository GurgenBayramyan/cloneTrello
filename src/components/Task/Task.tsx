import React from 'react'
import { ITask } from './TaskTypes'
import CreateIcon from '@mui/icons-material/Create';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import style from './Task.module.scss'

const Task = ({taskName}:ITask) => {
  return (
    <div className={style.task}>
        <div className={style.task_header}>
            <h4>{taskName}</h4>
            <div className={style.iconBlock}>
                <CreateIcon sx={{cursor:"pointer",fontSize:"14px"}} />
            </div>
        </div>
        <div className={style.task_footer}>
            <div className={style.footer_iconBlock}>
                    <MenuIcon  sx={{cursor:"pointer",fontSize:"14px"}}/>
            </div>
            <div>
                <PersonIcon sx={{cursor:"pointer",fontSize:"14px"}} />
            </div>
        </div>
    </div>
  )
}

export default Task
