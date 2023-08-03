import { FC } from 'react';
import style from './DeleteModal.module.scss'
interface iDeleteModalProps{
  onClose:() => void
}
const DeleteModal:FC<iDeleteModalProps> = ({onClose}) => {
  const handleBlur = () => {
    onClose()
  }
  return (
    <div className={style.deleteBlock}>
      <div className={style.deleteBlock_header}>
        <p>Delete card?</p>
        <span onClick={onClose}>x</span>
      </div>
      <div className={style.text}>
        <span>
          All actions will be removed from the activity feed and you won’t be
          able to re-open the card. There is no undo.
        </span>
      </div>
      <div className={style.btn}>
        <span>Delete</span>
      </div>
    </div>
  );
}

export default DeleteModal