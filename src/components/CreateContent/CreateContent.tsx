import style from './CreateContent.module.scss'
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PhotoSizeSelectSmallIcon from '@mui/icons-material/PhotoSizeSelectSmall';
import { MouseEvent, useState } from 'react';
const CreateContent = () => {
    const [content, setContent] = useState(true);
    const handleClick = () => {
        setContent(!content)
    }
    const stopProp = (e:MouseEvent)=> e.stopPropagation()
    return content ? (
      <div onClick={stopProp} className={style.creatBoardParent}>
        <div onClick={handleClick} className={style.createBoard}>
          <div className={style.iconsBlock}>
            <ViewTimelineIcon sx={{ fontSize: "15px" }} />
            <p>Create board</p>
          </div>
          <span>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </span>
        </div>
        <div className={style.createBoard}>
          <div className={style.iconsBlock}>
            <PhotoSizeSelectSmallIcon sx={{ fontSize: "15px" }} />
            <p>Start with a template</p>
          </div>
          <span>Get started faster with a board template.</span>
        </div>
        <div className={style.createBoard}>
          <div className={style.iconsBlock}>
            <PeopleAltIcon sx={{ fontSize: "15px" }} />
            <p>Create Workspace</p>
          </div>
          <span>
            A Workspace is a group of boards and people. Use it to organize your
            company, side hustle, family, or friends.
          </span>
        </div>
      </div>
    ) : (
      <div className={style.creatBoardParentTwo}>
        <div className={style.creatBoardParentTwo_header}>
          <div className={style.rightIcon}>
            <span>{"<"}</span>
          </div>
          <span>Create board</span>
          <div>
            <span>x</span>
          </div>
        </div>
        <div className={style.backgraundImg}>

        </div>
        
      </div>
    );
}

export default CreateContent