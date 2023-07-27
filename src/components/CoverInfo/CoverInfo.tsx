import RadioIcon from "@mui/icons-material/Radio";
import CoverContent from "components/CoverContent/CoverContent";
import {  useState } from "react";

const CoverInfo = () => {
  const [coverBlcok, setCoverBlock] = useState(false);

  const handleOpenCover = () => {
    setCoverBlock(!coverBlcok);
  };
  const handleClose = () => {
    setCoverBlock(false);
  };
  return (
    <li
      tabIndex={0}
      onBlur={handleClose}
      onClick={handleOpenCover}
    >
      <RadioIcon sx={{ fontSize: "16px" }} /> Change cover
      {coverBlcok && <CoverContent onClose={handleClose} />}
    </li>
  );
};

export default CoverInfo;
