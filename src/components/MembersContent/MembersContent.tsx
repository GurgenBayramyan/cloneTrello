import  { FC, useRef } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import style from './MembersContent.module.scss'
import { IMembersProps } from './MembersContentTypes';
const MembersContent:FC<IMembersProps> = ({onClose}) => {
    const divRef = useRef<any>(null);
   

  return (
    <div ref={divRef} onClick={(e)=>e.stopPropagation()} className={style.members}>
        <div className={style.members_header}>
            <p>Members</p>
            <span onClick={onClose}>X</span>
        </div>
        <div className={style.inputBlock}>
            <input  type="text" placeholder='Search members' />
        </div>
        <h5>Board members</h5>
        <div className={style.userBlock}>
            <div className={style.iconBlock}>
                <PersonIcon />
            </div>
            <p>UserName (user mail)</p>
        </div>
    </div>
  )
}

export default MembersContent