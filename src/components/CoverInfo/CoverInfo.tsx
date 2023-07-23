import RadioIcon from "@mui/icons-material/Radio";
import style from "./CoverInfo.module.scss";
import CoverContent from "components/CoverContent/CoverContent";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const CoverInfo = () => {
  const [coverBlcok, setCoverBlock] = useState(false);
  const [currentPos, setCurrentPos] = useState({
    currentTop: 35,
    curentLeft: 0
  });
  const liRef = useRef<any>(null);
  const divRef = useRef<any>(null);
  useEffect(
    () => {
      if (divRef) {
        const div = divRef.current;
        const { top, height } = div.getBoundingClientRect();
        const widthParent = liRef.current.getBoundingClientRect().width;
        if (top + height > window.innerHeight) {
          const minus = top + height - window.innerHeight;
          setCurrentPos({
            currentTop: top - minus,
            curentLeft: widthParent + 35
          });
        } else {
          setCurrentPos({
            currentTop: -35,
            curentLeft: 0
          });
        }
      }
    },
    [coverBlcok]
  );
  const handleOpenCover = () => {
    setCoverBlock(!coverBlcok);
  };
  const handleClose = () => {
    setCoverBlock(false);
  };
  return (
    <li
      ref={liRef}
      tabIndex={0}
      onBlur={handleClose}
      onClick={handleOpenCover}
      className={style.coverLi}
    >
      <RadioIcon sx={{ fontSize: "16px" }} /> Change cover
      <div
        style={{
          top: `${-currentPos.currentTop}px`,
          left: `${currentPos.curentLeft}px`
        }}
        ref={divRef}
        className={classNames(style.cover, {
          [style.coverActive]: coverBlcok
        })}
      >
        <CoverContent onClose={handleClose} />
      </div>
    </li>
  );
};

export default CoverInfo;
