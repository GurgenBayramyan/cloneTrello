import React, { useState } from "react";
import { ITask } from "./TaskTypes";
import CreateIcon from "@mui/icons-material/Create";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import classNames from "classnames";
import style from "./Task.module.scss";
import ModalBlock from "components/ModallBlock/ModalBlock";


const Task = ({ taskName ,listName}: ITask) => {
    const[modal,setModal] = useState(false);
    const handleOpenModal = () => {
        setModal(!modal)
    }
  return (
    <div className={style.task} onClick={handleOpenModal}>
      <div className={style.task_header}>
        <h4>{taskName}</h4>
        <div className={style.iconBlock}>
          <CreateIcon sx={{ cursor: "pointer", fontSize: "14px" }} />
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
      <div  className={classNames(style.modal,{
        [style.isActive]:modal
      })}>
        <div className={style.modal_content}>
            <div  onClick={(e:any)=>e.stopPropagation()}className={style.task_desc}>
                <ModalBlock taskName={taskName} listName={listName}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
