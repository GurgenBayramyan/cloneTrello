import { FC } from 'react';
import style from './UserNameIcon.module.scss'
import { IUserIcon } from './UserNameIconTypes';

const UserNameIcon:FC<IUserIcon> = ({name,lastName}) => {
    if(name && lastName){
      const nameLetter = name[0].toUpperCase();
      const lastNameLetter = lastName[0].toUpperCase();
      return (
        <div className={style.userName}>
            <span>{nameLetter}{lastNameLetter}</span>
        </div>
      )
    }
    return null
 
}

export default UserNameIcon