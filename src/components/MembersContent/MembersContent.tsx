import  { FC } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import style from './MembersContent.module.scss'
import { IMembersProps } from './MembersContentTypes';

const MembersContent:FC<IMembersProps> = ({onClose}) => {
   
  return (
    <div  className={style.members}>
        <div className={style.members_header}>
            <p>Members</p>
            <span data-name="close" onClick={onClose}>X</span>
        </div>
        <div className={style.inputBlock}>
            <input data-name='input' type="text" placeholder='Search members' />
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