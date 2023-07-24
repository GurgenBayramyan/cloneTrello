import EditLabelsContent from "components/EditLabelsContent/EditLabelsContent";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import style from "./EditeLabelsInfo.module.scss";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
const EditeLabelsInfo = () => {
  const [editLabels, setEditlabels] = useState(false);
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
    },
    [editLabels]
  );
  const handleOpenEditelabels = () => {
    setEditlabels(!editLabels);
  };

  const handleClose = () => {
    setEditlabels(false);
  };
  return (
    <li
      ref={liRef}
      tabIndex={0}
      onBlur={handleClose}
      className={style.editLi}
      onClick={handleOpenEditelabels}
    >
      <div
        className={style.liBlock}
      >
        <GolfCourseIcon sx={{ fontSize: "16px" }} /> Edit labels
        <div
        style={{top:`${-currentPos.currentTop}px `,left:`${currentPos.curentLeft}px`}}
        ref={divRef}
          className={classNames(style.menuBlock, {
            [style.menuBlockActive]: editLabels
          })}
        >
          <EditLabelsContent onClose={handleClose} />
        </div>
      </div>
    </li>
  );
};

export default EditeLabelsInfo;
