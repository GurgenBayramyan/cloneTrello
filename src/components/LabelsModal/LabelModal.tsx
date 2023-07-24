import EditLabelsContent from "components/EditLabelsContent/EditLabelsContent";
import style from "./LabelModal.module.scss";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import classNames from "classnames";
import { useState } from "react";

const LabelModal = () => {
    const[editLabels,setEditLabels] = useState(false);
    const handleOpenMembers = () => {
        setEditLabels(!editLabels);
      };
      const handleClose = () => {
        setEditLabels(false);
      };
  return (
    <div onClick={handleOpenMembers} className={style.labelModal}>
      <div className={style.coostomBlock}>
        <TurnedInNotIcon sx={{ fontSize: "15px" }} />
        <span>Labels</span>
        <div
          className={classNames(style.menuBlock, {
            [style.menuBlockActive]: editLabels,
          })}
        >
          <EditLabelsContent onClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default LabelModal;
