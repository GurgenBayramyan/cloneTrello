import {  useEffect, useRef, useState } from "react";
import { ITaskSettings } from "./TaskSettingTypes";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from "@mui/icons-material/Person";
import RadioIcon from "@mui/icons-material/Radio";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import ForwardIcon from "@mui/icons-material/Forward";
import ScheduleIcon from "@mui/icons-material/Schedule";
import InboxIcon from "@mui/icons-material/Inbox";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import classNames from "classnames";
import style from "./TaskSettings.module.scss";
import { setShowOptionDiv } from "store/slices/showOptiondivSlice/showOptionDivSlice";
import { setStyles } from "store/slices/taskSettings/taskSettingsSlice";
import EditLabels from "components/EditLabels/EditLabels";
import Members from "components/Members/Members";


const TaskSettings = ({ taskName, openModal}: ITaskSettings) => {
  const styles = useAppSelector((state) => state.taskSettingsSlice);
  const { show } = useAppSelector((state) => state.setShowOptionDiv);
  const dispatch = useAppDispatch();
  const [postion,setPosition] = useState<number>(0)
  const refBlock = useRef<any>(null);
  const [menuState,setMenuState] = useState({
    editeLabels:false,
    membersblock:false
  })

 useEffect(() => {
   if ((styles.currentTop + refBlock.current.offsetHeight) > window.innerHeight) {
      const newTop = styles.currentTop + refBlock.current.offsetHeight - window.innerHeight;
      setPosition(newTop + 50)
     
   }else{
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
  const handleOpenEditelabels = () => {
    setMenuState({
      ...menuState,
      editeLabels:!menuState.editeLabels
    })
  }
  const handleOpenMembers = () => {
    setMenuState({
      ...menuState,
      membersblock:!menuState.membersblock
    })
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
          <li onClick={openModalAndCloseAll}>
            <RadioIcon sx={{ fontSize: "16px" }} /> Open Card
          </li>
          <li className={style.editLi} onClick={handleOpenEditelabels}>
            <div className={style.liBlock}>
              <GolfCourseIcon  sx={{ fontSize: "16px" }} /> Edit labels
              <div  className={classNames(style.menuBlock,{
                [style.menuBlockActive]:menuState.editeLabels
              })}>
                <EditLabels onClose={handleOpenEditelabels} />
              </div>
            </div>
          </li>
          <li onClick={handleOpenMembers} className={style.membersLi}>
            <PersonIcon sx={{ fontSize: "16px" }} /> Change members
            <div className={classNames(style.members,{
              [style.membersActive]:menuState.membersblock
            })}>
              <Members />
            </div>
           
          </li>
          <li>
            <RadioIcon sx={{ fontSize: "16px" }} /> Change cover
          </li>
          <li>
            <ForwardIcon sx={{ fontSize: "16px" }} />
            Move
          </li>
          <li>
            <RadioIcon sx={{ fontSize: "16px" }} /> Copy
          </li>
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
