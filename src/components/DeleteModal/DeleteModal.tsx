import { FC, MouseEvent, useLayoutEffect, useRef, useState } from 'react';
import style from './DeleteModal.module.scss'
import { getTemplateMenuStates } from 'helpers';
import classNames from 'classnames';
interface iDeleteModalProps{
  onClose:() => void
}
const DeleteModal:FC<iDeleteModalProps> = ({onClose}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [positionClass, setPositionClass] = useState(false);
  useLayoutEffect(() => {
    const div = divRef.current;
    const isHidden = getTemplateMenuStates(div!);
    setPositionClass(isHidden);
  }, []);
  const handleClick = (e:MouseEvent<HTMLElement>)=> e.stopPropagation()
  return (
    <div onClick={handleClick} ref={divRef} className={classNames(style.deleteBlock,{
      [style.top]:positionClass
    })}>
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