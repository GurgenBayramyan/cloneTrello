import EditLabelsContent from "components/EditLabelsContent/EditLabelsContent";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import {  useState } from "react";
const EditeLabelsInfo = () => {
  const [editLabels, setEditlabels] = useState(false);

  const handleOpenEditelabels = () => {
    setEditlabels(!editLabels);
  };

  const handleClose = () => {
    setEditlabels(false);
  };
  return (
    <li
      tabIndex={0}
      onBlur={handleClose}
      onClick={handleOpenEditelabels}
    >
      <div
      >
        <GolfCourseIcon sx={{ fontSize: "16px" }} /> Edit labels
        {editLabels && <EditLabelsContent onClose={handleClose} />}
      </div>
    </li>
  );
};

export default EditeLabelsInfo;
