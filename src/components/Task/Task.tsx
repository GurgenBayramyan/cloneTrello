import React, { useState,MouseEvent, FC, useRef, RefObject, HTMLAttributes, DetailedHTMLProps } from "react";
import { ITask } from "./TaskTypes";
import CreateIcon from "@mui/icons-material/Create";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import style from "./Task.module.scss";

const Task:FC<ITask> = ({ openModal,setOption}) => {
  
    const taskDiv = useRef<any>(null)
    const openInfoSection = (e:MouseEvent<HTMLElement>) =>{
      e.stopPropagation();
      const div = taskDiv.current;
      
      console.log(div.offsetLeft)
      console.log(div.offsetTop)
      setOption()
    }
  return (
    <div ref={taskDiv} className={style.task} onClick={openModal}>
      
      <div className={style.task_header}>
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
