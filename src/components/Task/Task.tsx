import { MouseEvent, FC, useRef} from "react";
import { ITask } from "./TaskTypes";
import CreateIcon from "@mui/icons-material/Create";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { setStyles } from "store/slices/taskSettings/taskSettingsSlice";
import { setShowOptionDiv } from "store/slices/showOptiondivSlice/showOptionDivSlice";
import { setMenu } from "store/slices/showMenuUserSlice/showMenuUserSlice";
import UserNameIcon from "components/UserNameIcon/UserNameIcon";
import style from "./Task.module.scss";


const Task: FC<ITask> = ({ openModal }) => {
  const dispatch = useAppDispatch();
  const { show } = useAppSelector((state) => state.setShowOptionDiv);
  const flag = useAppSelector(state=>state.showMenuUser)
  const taskDiv = useRef<any>(null);

  const positionAndShow = useAppSelector((state) => state.showMenuUser);
  const openInfoSection = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const div = taskDiv.current;
    div.scrollIntoView({
      block: 'center',
      inline: 'center'
    })
    const rect = div.getBoundingClientRect();
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
    const div = taskDiv.current;
    const rect = div.getBoundingClientRect();
    
    dispatch(setMenu({
      top:rect.top + 70,
      left:rect.left + rect.width - 25,
      show:!flag.show
    }))
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
        <div className={style.userIcon} tabIndex={0} onClick={handleOpenMenuUser} onBlur={handleblur}>
          <UserNameIcon name="Vahe" lastName="Gevorgian"/>
        </div>
      </div>
    </div>
  );
};

export default Task;
