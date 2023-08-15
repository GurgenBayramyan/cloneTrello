import { useEffect, useState, FocusEvent, useRef } from "react";
import style from "./CreateMenu.module.scss";
import { PageLocation } from "types";
import CreateMenuContent from "components/CreateMenuContent/CreateMenuContent";
import CreateboardMenu from "components/CreateBoardMenu/CreateboardMenu";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { popupsSelector } from "store/selectors";
import { closeMenu } from "store/slices/popupsSlice/popupSlice";
import { setChangeBoard } from "store/slices/boardSlice/boardSlice";

const CreateMenu = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { menuState, backgroundState, workspace } =
    useAppSelector(popupsSelector);
    const{changeBoard} = useAppSelector(state=>state.boardSlice)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!backgroundState.show) {
      divRef.current!.focus();
    }
  }, [backgroundState.show, workspace.content]);

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.relatedTarget) {
      dispatch(closeMenu());
    }
    if(changeBoard.id){
      dispatch(setChangeBoard({}))
    }
  };

  return (
    <div
      ref={divRef}
      data-name="divparent"
      onBlur={handleBlur}
      tabIndex={0}
      className={style.header_div}
      style={{
        top: `${menuState.currentTop}px`,
        left: `${menuState.currentLeft}px`,
      }}
    >
      {menuState.menuActive && (
        <div data-name="parent">
          {menuState.menuBlock === PageLocation.CREATEMENU && (
            <CreateMenuContent />
          )}
          {menuState.menuBlock === PageLocation.CREATEBOARD && (
            <CreateboardMenu />
          )}
        </div>
      )}
    </div>
  );
};

export default CreateMenu;
