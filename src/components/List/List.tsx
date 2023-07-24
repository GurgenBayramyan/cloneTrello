import { useState, FC } from 'react'
import style from './List.module.scss'
import { IListProps, IListState } from './ListTypes'
import BackupTableIcon from '@mui/icons-material/BackupTable';
import Task from 'components/Task/Task';
import OptionList from 'components/OptionList/OptionList';




const List:FC<IListProps> = ({title,openModal}) => {
  const [changeTitle,setChangeTitle] = useState(title);
  const[listState,setListState] = useState<IListState>({
    addCard:false,
    titleBlock:true
  })

  const handleChangeTitle = (event:React.ChangeEvent<HTMLInputElement>) => {
    setChangeTitle(event.target.value);
  };



  const handleAddCard = () => {
    setListState({...listState,addCard:true})
  }
  const handleClose = () => {
      setListState({...listState,addCard:false})
  }
  
  const setTitle = () =>{
      setListState({...listState,titleBlock:!listState.titleBlock})
  }   
  const blurForTitle = () =>{
    setListState({...listState,titleBlock:!listState.titleBlock})
  }
  const closeAddBlock = (e:any) => {
    if(e.relatedTarget?.dataset?.name === "addCard") {
      return
    }
    
    setListState({...listState,addCard:false})
  }
  
  return (
    <div className={style.listBlock}>
      <div className={style.listBlock_header}>
        {listState.titleBlock ? (
          <div onClick={setTitle} className={style.titleBlock}>
            <span>{title}</span>
          </div>
        ) : (
          <input
            type="text"
            value={changeTitle}
            onBlur={blurForTitle}
            autoFocus={true}
            onChange={(e) => handleChangeTitle(e)}
          />
        )}
       <OptionList /> 
      </div>
      <div className={style.tasks}>
        <Task
          openModal={openModal}
        />
        <Task
          openModal={openModal}
        />
        <Task
          openModal={openModal}
        />
        <Task
          openModal={openModal}
        />
        <Task
          openModal={openModal}
        />
        <Task
          openModal={openModal}
        />
        <Task
          openModal={openModal}
        />
        <Task
          openModal={openModal}
        />
        <Task
          openModal={openModal}
        />
        <Task
          openModal={openModal}
        />

        {listState.addCard ? (
          <div className={style.addCardActive}>
            <div className={style.textArea}>
              <textarea
                tabIndex={0}
                autoFocus={true}
                onBlur={closeAddBlock}
                placeholder="Enter title for this card..."
              ></textarea>
            </div>
          </div>
        ):null}
      </div>

      {listState.addCard ? (
        <div  className={style.buttonblock}>
          <div  tabIndex={0} data-name="addCard" onClick={handleAddCard} onBlur={closeAddBlock} className={style.addButton}>
            <span >Add card</span>
          </div>
          <h3 onClick={handleClose}>X</h3>
        </div>
      ) : (
        <div className={style.addBlock}>
          <div onClick={handleAddCard} className={style.addCardBlock}>
            <span>+</span>
            <span>Add card</span>
          </div>
          <div className={style.iconBlockAdd}>
            <BackupTableIcon sx={{ cursor: "pointer", fontSize: "12px" }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default List