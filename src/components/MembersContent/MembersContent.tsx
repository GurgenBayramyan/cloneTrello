import  { FC, useEffect, useRef, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import style from './MembersContent.module.scss'
import { IMembersProps, ImembersState } from './MembersContentTypes';
import { getTemplateMenuState } from 'helpers';

const MembersContent:FC<IMembersProps> = ({onClose}) => {
    const divContent = useRef<HTMLDivElement >(null);
   
    const [currentStyle,setCurrentStyle] = useState<ImembersState>({
        top:0,
        left:0
    })

    useEffect(() => {
        const div = divContent.current;
        const { top, height,left,width } = div!.getBoundingClientRect();
        const styleObject =  getTemplateMenuState(top,height,width,left);
        setCurrentStyle({...styleObject})
    }, [])
  return (
    <div style={{top:`${currentStyle.top}px`,left:`${currentStyle.left}px`}} ref={divContent}   className={style.members}>
        <div className={style.members_header}>
            <p>Members</p>
            <span data-name="close" onClick={onClose}>x</span>
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