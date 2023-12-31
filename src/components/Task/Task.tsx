import CreateIcon from "@mui/icons-material/Create";
import MenuIcon from "@mui/icons-material/Menu";
import UserNameIcon from "components/UserNameIcon/UserNameIcon";
import { getPositonShow } from "helpers";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { FC, MouseEvent, useRef } from "react";
import { setShowMenuUserSelector, setShowOptionDivSelector } from "store/selectors";
import { setShowModal } from "store/slices/modalSlice/modalSlice";
import { setMenu } from "store/slices/showMenuUserSlice/showMenuUserSlice";
import { setShowOptionDiv } from "store/slices/showOptiondivSlice/showOptionDivSlice";
import { setStyles } from "store/slices/taskSettings/taskSettingsSlice";
import style from "./Task.module.scss";
import { ITask } from "./TaskTypes";


const Task: FC<ITask> = () => {
  const dispatch = useAppDispatch();
  const { show } = useAppSelector(setShowOptionDivSelector);
  const flag = useAppSelector(setShowMenuUserSelector)
  const taskDiv = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const modal = useAppSelector(state => state.modallMeniu);
  const openModal = () => {
    dispatch(setShowModal(!modal.showModal))
  };
  const positionAndShow = useAppSelector(setShowMenuUserSelector);
  const openInfoSection = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const div = taskDiv.current;
    div!.scrollIntoView({
      block: 'center',
      inline: 'center'
    })
    const rect = div!.getBoundingClientRect();

    dispatch(
      setStyles({
        currentLeft: rect.left,
        currentTop: rect.top,
      })
      
    );
    dispatch(setShowOptionDiv(!show));
  };
  const handleOpenMenuUser = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const div = nameRef.current;
    const { top , width, left } = div!.getBoundingClientRect();
    const newObj = getPositonShow(top,left,width,flag.show);
    dispatch(setMenu(newObj))
    
  }

  const handleblur = (event: React.FocusEvent<HTMLElement>) => {
    const target = event.relatedTarget as HTMLElement
    if(target?.dataset.name === "stop"){
      return 
    }else{
      dispatch(
      setMenu({
        ...positionAndShow,
        show: false,
      })
    );
    }
    
  };
  return (
    <div ref={taskDiv} className={style.task} onClick={openModal}>
      <div className={style.task_header}>
        <h4>TaskName</h4>
        <div onClick={(e) => openInfoSection(e)} className={style.iconBlock}>
          <CreateIcon sx={{ cursor: "pointer", fontSize: "14px" }} />
        </div>
      </div>
      <div className={style.task_footer}>
        <div className={style.footer_iconBlock}>
          <MenuIcon sx={{ cursor: "pointer", fontSize: "14px" }} />
        </div>
        <div ref={nameRef} className={style.userIcon} tabIndex={0} onClick={handleOpenMenuUser} onBlur={handleblur}>
          <UserNameIcon name="Vahe" lastName="Gevorgian"/>
        </div>
      </div>
    </div>
  );
};

export default Task;
