import { FC } from 'react'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import MenuIcon from '@mui/icons-material/Menu';
import style from './ContentUserMenu.module.scss'
interface IContentUserMenu{
    name:string
}
const ContentUserMenu:FC<IContentUserMenu> = ({name}) => {
  return (
    <div className={style.contentUserMenu}>
        <div className={style.nameBlock}>
            <span>{name}</span>
        </div>
        <div className={style.templateBlock}>
            <div className={style.templateBlock_text}>
             <DirectionsBusIcon sx={{fontSize:"15px"}} />
            <span>Template</span>
            </div>
           <div className={style.iconBlock}>
                 <MenuIcon  sx={{fontSize:"15px"}} />
           </div>
        </div>
    </div>
  )
}

export default ContentUserMenu