import HttpsIcon from "@mui/icons-material/Https";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PublicIcon from "@mui/icons-material/Public";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import {
  changeContent,
  closeMenu,
  setClose,
} from "store/slices/popupsSlice/popupSlice";
import React, { MouseEvent, useEffect, useRef } from "react";
import { popupsSelector } from "store/selectors";
import classNames from "classnames";
import style from "./WorkspaceContent.module.scss";
import { Menus } from "types";
import { setChangeBoard } from "store/slices/boardSlice/boardSlice";

const WorkspaceContent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { workspace } = useAppSelector(popupsSelector);

  useEffect(() => {
    if (workspace.show) {
      ref.current?.focus();
    }
  }, [workspace.show]);

  const handleChangeVisibility = (e: MouseEvent<HTMLElement>, name: string) => {
    dispatch(changeContent(name));
    dispatch(setClose(false));
  };
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (
      relatedTarget?.dataset.name === "btn" ||
      relatedTarget?.dataset.name === "openVi" ||
      relatedTarget?.dataset.name === "divparent" ||
      relatedTarget?.dataset.name === "divparents" ||
      relatedTarget?.dataset.block === "change"
    ) {
      dispatch(setClose(false));
      return;
    }
    dispatch(setClose(false));
    dispatch(closeMenu());
    dispatch(setChangeBoard({}));
  };

  return workspace.show ? (
    <div
      ref={ref}
      onBlur={handleBlur}
      tabIndex={0}
      style={{
        top: `${workspace.currentTop}px`,
        left: `${workspace.currentLeft}px`,
      }}
      className={style.workspaceContent}
    >
      <div
        data-name="Private"
        onClick={(e) => handleChangeVisibility(e,Menus.PRIVATE)}
        className={classNames(style.custom, {
          [style.customActive]: workspace.content === "Private",
        })}
      >
        <div className={style.iconBlock}>
          <HttpsIcon sx={{ fontSize: "20px" }} />
        </div>
        <div className={style.textBlock}>
          <h4>Private</h4>
          <span>Only board members can see and edit this board.</span>
        </div>
      </div>
      <div
        data-name="Workspace"
        onClick={(e) => handleChangeVisibility(e,Menus.WORKSPACE)}
        className={classNames(style.custom, {
          [style.customActive]: workspace.content === "Workspace",
        })}
      >
        <div className={style.iconBlock}>
          <PeopleOutlineIcon sx={{ fontSize: "20px" }} />
        </div>
        <div className={style.textBlock}>
          <h4>Workspace</h4>
          <span>
            All members of the firstname lastname workspace Workspace can see
            and edit this board.
          </span>
        </div>
      </div>
      <div
        data-name="Public"
        onClick={(e) => handleChangeVisibility(e,Menus.PUBLIC)}
        className={classNames(style.custom, {
          [style.customActive]: workspace.content === "Public",
        })}
      >
        <div className={style.iconBlock}>
          <PublicIcon sx={{ fontSize: "20px" }} />
        </div>
        <div className={style.textBlock}>
          <h4>Public</h4>
          <span>
            Anyone on the internet can see this board. Only board members can
            edit
          </span>
        </div>
      </div>
    </div>
  ) : null
};
export default WorkspaceContent;
