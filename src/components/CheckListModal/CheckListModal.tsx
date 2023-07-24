import DoneIcon from "@mui/icons-material/Done";
import style from "./CheckListModal.module.scss";
import classNames from "classnames";
import CheckList from "components/CheckList/CheckList";
import { useState } from "react";

const CheckListModal = () => {
    const[check,setCheck] = useState(false);
    const handleOpenMembers = () => {
        setCheck(!check);
      };
      const handleClose = () => {
        setCheck(false);
      };
  return (
    <div onClick={handleOpenMembers} className={style.checkListModal}>
      <div className={style.coostomBlock}>
        <DoneIcon sx={{ fontSize: "15px" }} />
        <span>Checklist</span>
      </div>
        <div
          className={classNames(style.menuBlock, {
            [style.menuBlockActive]: check,
          })}
        >
          <CheckList  onClose={handleClose}/>
        </div>
    </div>
  );
};

export default CheckListModal;
