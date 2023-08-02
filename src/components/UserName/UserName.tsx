import { FC } from 'react'
import style from './UserName.module.scss'
import { IUserName } from './UserNameTypes'

const UserName:FC<IUserName> = ({name,lastName}) => {
    const nameLetter = name[0].toLocaleUpperCase();
    const lastNameLetter = lastName[0].toUpperCase();
  return (
    <div className={style.userName}>
        <span>{nameLetter}{lastNameLetter}</span>
    </div>
  )
}

export default UserName