import classNames from 'classnames';
import style from './MoveInfo.module.scss'
import ForwardIcon from "@mui/icons-material/Forward";
import { useState } from 'react';
import MoveContent from 'components/MoveContent/Content';
const MoveInfo = () => {
    const [move,setMove] = useState(false);
    const handleOpenMove = () => {
        setMove(!move)
    }
    const handleClose = () => {
        setMove(false)
    }
  return (
    <li tabIndex={0} onBlur={handleClose} onClick={handleOpenMove} className={style.moveLi}>
    <ForwardIcon sx={{ fontSize: "16px" }} />Move
    <div className={classNames(style.move,{
      [style.moveActive]:move
    })}>
        <MoveContent onClose={handleClose} />
    </div>
  </li>
  )
}

export default MoveInfo