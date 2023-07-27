import CopyBlock from "components/CopyBlock/CopyBlock";
import RadioIcon from "@mui/icons-material/Radio";
import {  useState } from "react";

const CopyInfo = () => {
  const [copy, setCopy] = useState(false);
  const handleOpenCopy = () => {
    setCopy(!copy);
  };
  const handleClose = () => {
    setCopy(false);
  };
  return (
    <li tabIndex={0} onBlur={handleClose} onClick={handleOpenCopy}>
      <RadioIcon sx={{ fontSize: "16px" }} /> Copy
      {copy && <CopyBlock onClose={handleClose} />}
    </li>
  );
};

export default CopyInfo;
