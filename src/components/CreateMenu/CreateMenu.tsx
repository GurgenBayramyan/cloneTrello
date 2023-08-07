import { useEffect, useState } from "react";
import style from "./CreateMenu.module.scss";
import { PageLocation } from "types";
import CreateMenuContent from "components/CreateMenuContent/CreateMenuContent";
import CreateboardMenu from "components/CreateBoardMenu/CreateboardMenu";

const CreateMenu = () => {
  const [menuBlock, setMenuBlock] = useState(PageLocation.CREATEMENU);
  const [menuActive, setMenuActive] = useState(false);

 
  const openCreateSection = () => {
  
    setMenuActive(prev => !prev);
    setMenuBlock(PageLocation.CREATEMENU)

  };
 
  const goToMain = () => {
      setMenuBlock(PageLocation.CREATEMENU)
  }
  const goToCreateBoard = () => {
    setMenuBlock(PageLocation.CREATEBOARD)
  }
  return (
    <div  className={style.header_div}>
      <button className={style.header} onClick={openCreateSection}>Create</button>
      {menuActive && (
        <div data-name="parent">
          {menuBlock === PageLocation.CREATEMENU && <CreateMenuContent goToCreateBoard={goToCreateBoard} />}
          {menuBlock === PageLocation.CREATEBOARD && <CreateboardMenu goToMain={goToMain} openCreateSection={openCreateSection} />}
        </div>
      )}
    </div>
  );
};

export default CreateMenu;
