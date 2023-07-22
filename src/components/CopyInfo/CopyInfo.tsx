import CopyBlock from 'components/CopyBlock/CopyBlock'
import classNames from 'classnames'
import RadioIcon from "@mui/icons-material/Radio";
import style from './CopyInfo.module.scss'
import { useState } from 'react';

const CopyInfo = () => {
    const [copy,setCopy] = useState(false);
    const handleOpenCopy = () => {
        setCopy(!copy)
    }
    const handleClose = () => {
        setCopy(false)
    }
  return (
    <li tabIndex={0} onBlur={handleClose} onClick={handleOpenCopy} className={style.copyLi}>
            <RadioIcon sx={{ fontSize: "16px" }} /> Copy
            <div className={classNames(style.copy,{
              [style.copyActive]:copy
            })}>
                <CopyBlock  onClose={handleClose}/>
            </div>
          </li>
  )
}

export default CopyInfo