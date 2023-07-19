import { ITaskSettings } from './TaskSettingTypes';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import style from './TaskSettings.module.scss';
import { useAppSelector } from 'hooks/changDispatchSekector';
import classNames from 'classnames';

const TaskSettings = ({taskName}:ITaskSettings) => {
  const styles = useAppSelector(state=>state.taskSettingsSlice);
  const {show} = useAppSelector(state=>state.setShowOptionDiv)
  return (
      <div style={{top:`${styles.currentTop}px`,left:`${styles.currentLeft}px`}} className={classNames(style.settings_container,{
        [style.settings_containerisNone]:show
      })}>
        <div className={style.mainSection}>
        <textarea defaultValue={taskName} />
        </div>
        <div className={style.iconsSection}>
          <div className={style.iconsBlock}>
            <div>
            <MenuOpenIcon />
            </div>
            <div>
            <ChatBubbleIcon />
            </div>
            
          </div>
          <div className={style.personIcon}>
            <PersonIcon />
          </div>
        </div>
        <div className={style.buttonBlock}>
          <span>Save</span>
        </div>
        <div className={classNames(style.menuSection,{
            [style.menuSectionActive]:!show
        })}>
            <ul>
                <li>Open Card</li>
                <li>Edit labels</li>
                <li>Change members</li>
                <li>Change cover</li>
                <li>Move</li>
                <li>Copy</li>
                <li>Edit dates</li>
                <li>Archive</li>
            </ul>
        </div>
      </div>
  );
}

export default TaskSettings