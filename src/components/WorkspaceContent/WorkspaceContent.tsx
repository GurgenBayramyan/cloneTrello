import HttpsIcon from "@mui/icons-material/Https";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PublicIcon from "@mui/icons-material/Public";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { changeContent, setClose } from "store/slices/workspaceSlice/workspaceSlice";
import React, { useEffect, useRef } from "react";
import { visibilitySelector } from "store/selectors";
import classNames from "classnames";
import style from "./WorkspaceContent.module.scss";
import { Menus } from "types";
const WorkspaceContent = () => {
  const ref=useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch();
  const visibility = useAppSelector(visibilitySelector)

  useEffect(() => {
    ref.current?.focus()
  }, [])
  
  const handleChangeVisibility = (name:string) => {
    dispatch(changeContent(name));
    dispatch(setClose(false))
  }
  const handleBlur = (e:React.FocusEvent<HTMLDivElement>) => {
    dispatch(setClose(false))
  }
 

  return (
    <div ref={ref} onBlur={handleBlur} tabIndex={0}  style={{top:`${visibility.currentTop}px`,left:`${visibility.currentLeft}px`}} className={style.workspaceContent}>
      <div data-name="Private" onClick={()=>handleChangeVisibility(Menus.PRIVATE)} className={classNames(style.custom,{
        [style.customActive]:visibility.content == "Private"
      })}>
        <div className={style.iconBlock}>
          <HttpsIcon  sx={{fontSize:"20px"}} />
        </div>
        <div className={style.textBlock}>
          <h4>Private</h4>
          <span>Only board members can see and edit this board.</span>
        </div>
      </div>
      <div data-name="Workspace" onClick={()=>handleChangeVisibility(Menus.WORKSPACE)} className={classNames(style.custom,{
         [style.customActive]:visibility.content == "Workspace"
      })}>
        <div className={style.iconBlock}>
          <PeopleOutlineIcon  sx={{fontSize:"20px"}} />
        </div>
        <div className={style.textBlock}>
          <h4>Workspace</h4>
          <span>All members of the  firstname  lastname  workspace Workspace can see and edit this board.</span>
        </div>
      </div>
      <div data-name="Public" onClick={()=>handleChangeVisibility(Menus.PUBLIC)}  className={classNames(style.custom,{
        [style.customActive]:visibility.content == "Public"
      })}>
        <div className={style.iconBlock}>
          <PublicIcon  sx={{fontSize:"20px"}} />
        </div>
        <div className={style.textBlock}>
          <h4>Public</h4>
          <span>Anyone on the internet can see this board. Only board members can edit</span>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceContent;
