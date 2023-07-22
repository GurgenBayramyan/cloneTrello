import PersonIcon from "@mui/icons-material/Person";
import style from "./MembersInfo.module.scss";
import MembersContent from "components/MembersContent/MembersContent";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const MembersInfo = () => {
  const [membersblock, setMembersBlock] = useState(false);
  const divRef = useRef<any>(null);
  useEffect(
    () => {
      const div = divRef.current;
      const { top, height } = div.getBoundingClientRect();
      if (top + height > window.innerHeight) {

      } 
    },
    [membersblock]
  );
  const handleOpenMembers = () => {
    setMembersBlock(!membersblock);
  };
  const handleClose = () => {
    setMembersBlock(false);
  };
  return (
    <li
      tabIndex={0}
      onBlur={handleClose}
      onClick={handleOpenMembers}
      className={style.membersLi}
    >
      <PersonIcon sx={{ fontSize: "16px" }} /> Change members
      <div
        ref={divRef}
        className={classNames(style.members, {
          [style.membersActive]: membersblock
        })}
      >
        <MembersContent show={membersblock} onClose={handleClose} />
      </div>
    </li>
  );
};

export default MembersInfo;
