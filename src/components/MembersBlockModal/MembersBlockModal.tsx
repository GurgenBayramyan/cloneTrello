import MembersContent from "components/MembersContent/MembersContent";
import style from "./MembersBlockModal.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import classNames from "classnames";

const MembersBlockModal = () => {
    const [membersblock, setMembersBlock] = useState(false);

 
  const handleOpenMembers = () => {
    setMembersBlock(!membersblock);
  };
  const handleClose = () => {
    setMembersBlock(false);
  };
  return (
    <div onClick={handleOpenMembers} className={style.menuMember}>
      <div className={style.coostomBlock}>
        <PersonIcon sx={{ fontSize: "15px" }} />
        <span>Members</span>
      </div>
      <div
        className={classNames(style.members, {
          [style.membersActive]: membersblock
        })}
      >
        <MembersContent show={membersblock} onClose={handleClose} />
      </div>
    </div>
  );
};

export default MembersBlockModal;
