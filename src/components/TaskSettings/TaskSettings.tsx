import  {  useEffect, useRef, useState } from "react";
import { ITaskSettings } from "./TaskSettingTypes";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from "@mui/icons-material/Person";
import RadioIcon from "@mui/icons-material/Radio";
import ScheduleIcon from "@mui/icons-material/Schedule";
import InboxIcon from "@mui/icons-material/Inbox";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import classNames from "classnames";
import { setShowOptionDiv } from "store/slices/showOptiondivSlice/showOptionDivSlice";
import { setStyles } from "store/slices/taskSettings/taskSettingsSlice";
import EditeLabelsInfo from "components/EditeLabelsInfo/EditeLabelsInfo";
import MembersInfo from "components/MembersInfo/MembersInfo";
import CoverInfo from "components/CoverInfo/CoverInfo";
import MoveInfo from "components/MoveInfo/MoveInfo";
import CopyInfo from "components/CopyInfo/CopyInfo";
import { setShowMenuUserSelector, taskSettingsSliceSelector } from "store/selectors";
import style from "./TaskSettings.module.scss";


const TaskSettings = ({ taskName, openModal}: ITaskSettings) => {
  const styles = useAppSelector(taskSettingsSliceSelector);
  const { show } = useAppSelector(setShowMenuUserSelector);
  const dispatch = useAppDispatch();
  const [postion,setPosition] = useState<number>(0)
  const refBlock = useRef<HTMLDivElement>(null);


 useEffect(() => {
   if ((styles.currentTop + refBlock.current!.offsetHeight) > window.innerHeight) {
      const newTop = styles.currentTop + refBlock.current!.offsetHeight - window.innerHeight;
      setPosition(newTop + 50)
     
   }
   else{
    setPosition(0)
  }
  

 }, [show]);
  const openModalAndCloseAll = ()=>{
    dispatch(setShowOptionDiv(!show))
    dispatch(setStyles({
      currentLeft:-600,
      currentTop:-600
    }))
    openModal()
   
  }
  
  return (
    <div
      style={{ top: `${styles.currentTop}px`, left: `${styles.currentLeft}px` }}
      className={classNames(style.settings_container, {
        [style.settings_containerisNone]: show,
      })}
    >
      <div className={style.mainSection}>
        <textarea defaultValue={taskName} />
      </div>
      <div className={style.iconsSection}>
        <div className={style.iconsBlock}>
          <div className={style.menuIcon}>
            <MenuOpenIcon />
          </div>
          <div className={style.commentIcon}>
            <ChatBubbleIcon />
          </div>
        </div>
        <div className={style.personIcon}>
          <PersonIcon />
        </div>
      </div>
      <div className={style.buttonBlock}>
        <span>Save</span>
      </div>
      <div
        ref={refBlock}
        style={{top:`-${postion}px`}}
        className={classNames(style.menuSection, {
          [style.menuSectionActive]: !show,
        })}
      >
        <ul>
          <li  onClick={openModalAndCloseAll}>
            <RadioIcon sx={{ fontSize: "16px" }} /> Open Card
          </li>
          <EditeLabelsInfo />
          <MembersInfo />
          <CoverInfo />
          <MoveInfo />
          <CopyInfo />
          <li>
            <ScheduleIcon sx={{ fontSize: "16px" }} /> Edit dates
          </li>
          <li>
            <InboxIcon sx={{ fontSize: "16px" }} />
            Archive
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskSettings;
