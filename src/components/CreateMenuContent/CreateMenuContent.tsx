import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PhotoSizeSelectSmallIcon from '@mui/icons-material/PhotoSizeSelectSmall';
import style from './CreateMenuContent.module.scss'
import { FC} from 'react';
import { ICreateProps } from './CreateMenuContentTypes';
import { useAppDispatch, useAppSelector } from 'hooks/changDispatchSekector';
import { popupsSelector } from 'store/selectors';
import { goToCreateBoard } from 'store/slices/popupsSlice/popupSlice';

const CreateMenuContent:FC<ICreateProps> = () => {
  const {menuState} = useAppSelector(popupsSelector);
  const dispatch = useAppDispatch();

    const locationBoard = () => {
      dispatch(goToCreateBoard())
    }
  return (
    <div  className={style.creatBoardParent}>
    <div onClick={locationBoard} className={style.createBoard}>
      <div  className={style.iconsBlock}>
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
  )
}

export default CreateMenuContent