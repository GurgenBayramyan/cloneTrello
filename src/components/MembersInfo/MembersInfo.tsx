import PersonIcon from "@mui/icons-material/Person";
import MembersContent from "components/MembersContent/MembersContent";
import {  useState } from "react";

const MembersInfo = () => {
  const [membersblock, setMembersBlock] = useState(false);

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
    >
      <PersonIcon sx={{ fontSize: "16px" }} /> Change members
      {membersblock && <MembersContent  onClose={handleClose} />}
    </li>
  );
};

export default MembersInfo;
