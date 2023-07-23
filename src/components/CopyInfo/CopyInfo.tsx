import CopyBlock from "components/CopyBlock/CopyBlock";
import classNames from "classnames";
import RadioIcon from "@mui/icons-material/Radio";
import style from "./CopyInfo.module.scss";
import { useEffect, useRef, useState } from "react";

const CopyInfo = () => {
  const [copy, setCopy] = useState(false);
  const [currentPos, setCurrentPos] = useState({
    currentTop: -35,
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
          setCurrentPos({
            currentTop: 180,
            curentLeft: 190
          })
        }else{
          setCurrentPos({
            currentTop: -35,
            curentLeft: 0
          })
        }
      }
    },
    [copy]
  );
  const handleOpenCopy = () => {
    setCopy(!copy);
  };
  const handleClose = () => {
    setCopy(false);
  };
  return (
    <li
      ref={liRef}
      tabIndex={0}
      onBlur={handleClose}
      onClick={handleOpenCopy}
      className={style.copyLi}
    >
      <RadioIcon sx={{ fontSize: "16px" }} /> Copy
      <div
        style={{
          top: `${-currentPos.currentTop}px`,
          left: `${currentPos.curentLeft}px`
        }}
        ref={divRef}
        className={classNames(style.copy, {
          [style.copyActive]: copy
        })}
      >
        <CopyBlock onClose={handleClose} />
      </div>
    </li>
  );
};

export default CopyInfo;
