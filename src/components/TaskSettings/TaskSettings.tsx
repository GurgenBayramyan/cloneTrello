import { ITaskSettings } from './TaskSettingTypes';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import style from './TaskSettings.module.scss';

const TaskSettings = ({taskName}:ITaskSettings) => {
  
  return (
    <>
        <div className={style.settings_container}>
            <div className={style.mainSection}>
                <textarea>{taskName}</textarea>
            </div>
            <div className={style.iconsBlock}>
                <div className={style.iconsBlock}>
                    <MenuOpenIcon />
                    <ChatBubbleIcon />
                </div>
                <div className={style.personIcon}>
                    <PersonIcon />
                </div>
            </div>
        </div>
        <div className={style.buttonBlock}>
            <span>Save</span>
        </div>
    </>
  )
}

export default TaskSettings