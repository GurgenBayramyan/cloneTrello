import { useEffect, FocusEvent, useRef } from "react";
import { PageLocation } from "types";
import CreateMenuContent from "components/CreateMenuContent/CreateMenuContent";
import CreateboardMenu from "components/CreateBoardMenu/CreateboardMenu";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { boardSliceSelector, popupsSelector } from "store/selectors";
import { closeMenu } from "store/slices/popupsSlice/popupSlice";
import { setChangeBoard } from "store/slices/boardSlice/boardSlice";
import style from "./CreateMenu.module.scss";

const CreateMenu = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { menuState, backgroundState, workspace } =
    useAppSelector(popupsSelector);
  const { changeBoard } = useAppSelector(boardSliceSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!backgroundState.show) {
      divRef.current!.focus();
    }
  }, [backgroundState.show, workspace.content, menuState]);

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    const reletedTarget = event.relatedTarget;
    if (!reletedTarget) {
      dispatch(closeMenu());
    }
    if (changeBoard.id && !reletedTarget) {
      dispatch(setChangeBoard({}));
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
