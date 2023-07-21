import PersonIcon from "@mui/icons-material/Person";
import style from './MembersInfo.module.scss'
import MembersContent from "components/MembersContent/MembersContent";
import classNames from "classnames";
import { useState } from "react";

const MembersInfo = () => {
    const [membersblock,setMembersBlock] = useState(false)
    const handleOpenMembers = () => {
        setMembersBlock(!membersblock)
    }
    const handleClose = ( ) => {
        setMembersBlock(false)
    }
  return (
    <li tabIndex={0} onBlur={handleClose} onClick={handleOpenMembers} className={style.membersLi}>
      <PersonIcon sx={{ fontSize: "16px" }} /> Change members
      <div
        className={classNames(style.members, {
          [style.membersActive]: membersblock,
        })}
      >
        <MembersContent onClose={handleClose} />
      </div>
    </li>
  );
}

export default MembersInfo