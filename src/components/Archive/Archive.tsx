import DeleteIcon from '@mui/icons-material/Delete';
import style from './Archive.module.scss'
import { FC } from 'react';
import { IArchiveProps } from './ArchiveTypes';

const Archive:FC<IArchiveProps> = ({onClose}) => {
  return (
    <div className={style.archiveBlock}>
      <div className={style.leftBlock}>
        <div className={style.iconBlock}>
          <DeleteIcon />
        </div>
        <span>This card is archived.</span>
      </div>
      <div className={style.rightBlock}>
        <div onClick={onClose} className={style.closeSection}>
          <span>X</span>
        </div>
      </div>
    </div>
  );
}

export default Archive