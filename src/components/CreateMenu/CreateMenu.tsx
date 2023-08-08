import { useEffect, useState, FocusEvent, useRef } from "react";
import style from "./CreateMenu.module.scss";
import { PageLocation } from "types";
import CreateMenuContent from "components/CreateMenuContent/CreateMenuContent";
import CreateboardMenu from "components/CreateBoardMenu/CreateboardMenu";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { popupsSelector } from "store/selectors";
import { closeMenu, openCreateSection } from "store/slices/popupsSlice/popupSlice";

const CreateMenu = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const {menuState} = useAppSelector(popupsSelector);
  const visibility = useAppSelector(popupsSelector);
  const dispatch = useAppDispatch();


  useEffect(() => {
    
    if(!visibility.backgroundState.show) {
      divRef.current!.focus()
    }

  }, [visibility.backgroundState.show,visibility.workspace.content])


  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if(!event.relatedTarget) {
      dispatch(closeMenu())
    }
  
  }

 const openMenu = () => {
    dispatch(openCreateSection({
      menuActive:!menuState.menuActive,
      menuBlock:(PageLocation.CREATEMENU)
    }))
 }
  return (
    <div ref={divRef} data-name='divparent' onBlur={handleBlur} tabIndex={0} className={style.header_div}>
      <button className={style.header} onClick={openMenu}>Create</button>
      {menuState.menuActive && (
        <div  data-name="parent">
          {menuState.menuBlock === PageLocation.CREATEMENU && <CreateMenuContent  />}
          {menuState.menuBlock === PageLocation.CREATEBOARD && <CreateboardMenu   />}
        </div>
      )}
    </div>
  );
};

export default CreateMenu;
