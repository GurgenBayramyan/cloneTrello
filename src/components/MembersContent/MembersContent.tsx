import  { FC,  useLayoutEffect, useRef, useState } from 'react'
import { IMembersProps} from './MembersContentTypes';
import {  getTemplateMenuStates } from 'helpers';
import style from './MembersContent.module.scss'
import UserNameIcon from 'components/UserNameIcon/UserNameIcon';
import classNames from 'classnames';


const MembersContent:FC<IMembersProps> = ({onClose}) => {
    const divContent = useRef<HTMLDivElement >(null);
   
    const [positionClass,setPositionClass] = useState(false)

    useLayoutEffect(() => {
        const div = divContent.current;
        const isHidden = getTemplateMenuStates(div!);
        setPositionClass(isHidden);
      }, []);
  return (
    <div ref={divContent}   className={classNames(style.members,{
        [style.top]:positionClass
    })}>
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
               <UserNameIcon  name='Vahe' lastName='Gasparyan'/>
            </div>
            <p>UserName (user mail)</p>
        </div>
        <div className={style.userBlock}>
            <div className={style.iconBlock}>
               <UserNameIcon  name='Gurgen' lastName='Bayramyan'/>
            </div>
            <p>UserName (user mail)</p>
        </div>
        <div className={style.userBlock}>
            <div className={style.iconBlock}>
               <UserNameIcon  name='Suren' lastName='Balayan'/>
            </div>
            <p>UserName (user mail)</p>
        </div>
        <div className={style.showother}>
            <span>Show other Workspace members</span>
        </div>
    </div>
  )
}

export default MembersContent