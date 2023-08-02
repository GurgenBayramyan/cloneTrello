import ForwardIcon from "@mui/icons-material/Forward";
import {  useState } from "react";
import MoveContent from "components/MoveContent/MoveContent";
const MoveInfo = () => {
  const [move, setMove] = useState(false);

  const handleOpenMove = () => {
    setMove(!move);
  };
  const handleClose = () => {
    setMove(false);
  };

  return (
    <li
      tabIndex={0}
      onBlur={handleClose}
      onClick={handleOpenMove}
    >
      <ForwardIcon sx={{ fontSize: "16px" }} />
      Move
      {move && <MoveContent onClose={handleClose} />}
    </li>
  );
};

export default MoveInfo;
