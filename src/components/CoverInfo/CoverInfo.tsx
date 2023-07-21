import RadioIcon from "@mui/icons-material/Radio";
import style from './CoverInfo.module.scss'
import CoverContent from "components/CoverContent/CoverContent";
import classNames from "classnames";
import { useState } from "react";

const CoverInfo = () => {
    const [coverBlcok, setCoverBlock] = useState(false)
    const handleOpenCover = () => {
        setCoverBlock(!coverBlcok)
    }
    const handleClose =() => {
        setCoverBlock(false)
    }
  return (
    <li tabIndex={0} onBlur={handleClose}  onClick={handleOpenCover} className={style.coverLi}>
      <RadioIcon sx={{ fontSize: "16px" }} /> Change cover
      <div
        className={classNames(style.cover, {
          [style.coverActive]: coverBlcok,
        })}
      >
        <CoverContent onClose={handleClose} />
      </div>
    </li>
  );
}

export default CoverInfo