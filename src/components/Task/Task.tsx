import React, { MouseEvent, FC, useRef, useState } from "react";
import { IStyles, ITask } from "./TaskTypes";
import CreateIcon from "@mui/icons-material/Create";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import style from "./Task.module.scss";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { setStyles } from "store/slices/taskSettings/taskSettingsSlice";
import { setShowOptionDiv } from "store/slices/showOptiondivSlice/showOptionDivSlice";

const Task:FC<ITask> = ({ openModal}) => {
    const dispatch = useAppDispatch();
    const {show} = useAppSelector(state=>state.setShowOptionDiv)
    const taskDiv = useRef<any>(null)
    const openInfoSection = (e:MouseEvent<HTMLElement>) =>{
      e.stopPropagation();
      const div = taskDiv.current;
      const rect =div.getBoundingClientRect();
      dispatch(setStyles({
        currentLeft:rect.left,
        currentTop:rect.top
      }))
      dispatch(setShowOptionDiv(!show))
    }
  return (
    <div ref={taskDiv}  className={style.task} onClick={openModal}>
      
      <div  className={style.task_header}>
        <h4>TaskName</h4>
        <div onClick={(e)=>openInfoSection(e)} className={style.iconBlock}>
          <CreateIcon  sx={{ cursor: "pointer", fontSize: "14px" }} />
        </div>
      </div>
      <div className={style.task_footer}>
        <div className={style.footer_iconBlock}>
          <MenuIcon sx={{ cursor: "pointer", fontSize: "14px" }} />
        </div>
        <div>
          <PersonIcon sx={{ cursor: "pointer", fontSize: "14px" }} />
        </div>
      </div>
    
     
    </div>

  );
};

export default Task;
