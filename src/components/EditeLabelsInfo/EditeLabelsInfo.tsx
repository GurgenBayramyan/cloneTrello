import EditLabelsContent from 'components/EditLabelsContent/EditLabelsContent'
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import style from './EditeLabelsInfo.module.scss'
import classNames from 'classnames';
import { useState } from 'react';
const EditeLabelsInfo = () => {
    const [editLabels,setEditlabels] = useState(false)
    const handleOpenEditelabels = () => {
        setEditlabels(!editLabels)
    }
    const handleClose = () => {
        setEditlabels(false)
    }
  return (
    <li tabIndex={0} onBlur={handleClose} className={style.editLi} onClick={handleOpenEditelabels}>
            <div className={style.liBlock}>
              <GolfCourseIcon  sx={{ fontSize: "16px" }} /> Edit labels
              <div  className={classNames(style.menuBlock,{
                [style.menuBlockActive]:editLabels
              })}>
                <EditLabelsContent onClose={handleClose} />
              </div>
            </div>
          </li>
  )
}

export default EditeLabelsInfo