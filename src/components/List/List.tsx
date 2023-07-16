import { useState,useEffect, useRef } from 'react'
import style from './List.module.scss'
import { IListProps, IListState } from './ListTypes'
import classNames from 'classnames';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import Task from 'components/Task/Task';




const List = ({title}:IListProps) => {
  const [changeTitle,setChangeTitle] = useState(title);
  const[listState,setListState] = useState<IListState>({
    optionBlock:true,
    addCard:false
  })
  const listRef = useRef<HTMLDivElement>(null);
  const handleChangeTitle = (event:React.ChangeEvent<HTMLInputElement>) => {
    setChangeTitle(event.target.value);
  };
useEffect(()=>{
  const handleClickOutside = (event: MouseEvent) => {
    if (listRef.current && !listRef.current.contains(event.target as Node)) {
      setListState({ ...listState, optionBlock: true});
    }
    
  };

  document.addEventListener('mousedown', handleClickOutside);
 
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
},[listState])

  const handleOpenOption = () => {
      setListState({...listState,optionBlock:!listState.optionBlock})
  }
  const handleCloseOptionBlock = () => {
    setListState({...listState,optionBlock:true})
  }
  const handleAddCard = () => {
    setListState({...listState,addCard:!listState.addCard})
  }
  const handleClose = () => {
      setListState({...listState,addCard:false})
  }
  return (
    <div className={style.listBlock}>
      <div className={style.listBlock_header}>
        <input type="text" value={changeTitle} onChange={(e) => handleChangeTitle(e)} />
        <h4 onClick={handleOpenOption}>...</h4>
        <div
          ref={listRef}
          className={classNames(style.optionBlock, {
            [style.listNone]: listState.optionBlock
          })}>
          <div className={style.optionBlock_header}>
            <p>List actions</p>
            <h4 onClick={handleCloseOptionBlock}>X</h4>
          </div>
          <div className={style.parentStandartDiv}>
            <div className={style.standartBlock}>
              <span>Add card...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Copy list...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Move list...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Watch</span>
            </div>
            <hr />
            <h3>Automation</h3>
            <div className={style.standartBlock}>
              <span>When a card is added to the list...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Every day sort list by ...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Every Monday sort list by ...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Create a rule</span>
            </div>
            <hr />
            <div className={style.standartBlock}>
              <span>Move all cards in this list...</span>
            </div>
            <div className={style.standartBlock}>
              <span>Archive all cards in this list...</span>
            </div>
            <hr />
            <div className={style.standartBlock}>
              <span>Archive this list...</span>
            </div>
          </div>

        </div>
      </div>
      <Task taskName="Authentication" />

      {listState.addCard ? <div className={style.addCardActive}>
          <div className={style.textArea}>
              <textarea placeholder='Enter title for this card...'></textarea>
          </div>
          <div className={style.buttonblock}>
              <div className={style.addButton}>
                  <span>Add card</span>
              </div>
              <h3 onClick={handleClose}>X</h3>
          </div>
      </div>:  <div className={style.addBlock}>
          <div onClick={handleAddCard} className={style.addCardBlock}>
              <span>+</span>
              <span>Add card</span>
          </div>
          <div className={style.iconBlockAdd}>
              <BackupTableIcon sx={{cursor:"pointer",fontSize:"12px"}} />
          </div>
      </div>}
    </div>
  )
}

export default List