import PersonIcon from "@mui/icons-material/Person";
import style from "./MembersInfo.module.scss";
import MembersContent from "components/MembersContent/MembersContent";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const MembersInfo = () => {
  const [membersblock, setMembersBlock] = useState(false);
  const [currentPos, setCurrentPos] = useState({
    currentTop: -35,
    curentLeft: 0
  });
  const divRef = useRef<any>(null);
  const liRef = useRef<any>(null)
  useEffect(()=>{
    if (divRef){
      const div = divRef.current;
      const { top, height } = div.getBoundingClientRect();
      if (top + height > window.innerHeight) {
        const minus = (top + height) - window.innerHeight
        setCurrentPos({
          currentTop: minus,
          curentLeft: 190
        });
      } else{
        setCurrentPos({ currentTop: -35, curentLeft: 0 });
      }
    }
  },[membersblock])
  const handleOpenMembers = () => {
    setMembersBlock(!membersblock);
  };
  const handleClose = () => {
    setMembersBlock(false);
  };
  return (
    <li
      ref={ liRef}
      tabIndex={0}
      onBlur={handleClose}
      onClick={handleOpenMembers}
      className={style.membersLi}
    >
      <PersonIcon sx={{ fontSize: "16px" }} /> Change members
      <div
        style={{top:`${-currentPos.currentTop}px `,left:`${currentPos.curentLeft}px`}}
        ref={divRef}
        className={classNames(style.members, {
          [style.membersActive]: membersblock
        })}
      >
        <MembersContent  onClose={handleClose} />
      </div>
    </li>
  );
};

export default MembersInfo;
