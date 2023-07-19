import { useState, FC, MouseEvent } from 'react'
import style from './List.module.scss'
import { IListProps, IListState } from './ListTypes'
import classNames from 'classnames';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import Task from 'components/Task/Task';




const List:FC<IListProps> = ({title,openModal,setOption,showSetings}) => {
  const [changeTitle,setChangeTitle] = useState(title);
  const[listState,setListState] = useState<IListState>({
    optionBlock:true,
    addCard:false,
    titleBlock:true
  })

  const [bool, setBool] = useState(false)

  const handleChangeTitle = (event:React.ChangeEvent<HTMLInputElement>) => {
    setChangeTitle(event.target.value);
  };


  const handleOpenOption = () => {
      setListState({...listState,optionBlock:!listState.optionBlock})
  }
  const handleCloseOptionBlock = () => {
    setListState({...listState,optionBlock:true})
  }
  const handleAddCard = (e: MouseEvent<HTMLElement>) => {
    console.log("handleAddCard -> ")
     
  }
  const handleClose = (e:MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      setListState({...listState,addCard:true})
  }
  const blurForOption = () =>{
    setListState({...listState,optionBlock:true})
  }
  const setTitle = () =>{
      setListState({...listState,titleBlock:!listState.titleBlock})
  }   
  const blurForTitle = () =>{
    setListState({...listState,titleBlock:!listState.titleBlock})
  }
  const closeAddBlock = (e: any) => {
    setBool(false)
  }

  const handleOpenCard = () => {
    console.log("handleOpenCard -> ")
    setBool(true)
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
        <div tabIndex={0} onBlur={blurForOption}>
          <h4 onClick={handleOpenOption}>...</h4>
          <div
            className={classNames(style.optionBlock, {
              [style.listNone]: listState.optionBlock,
            })}
          >
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
      </div>
      <div className={style.tasks}>
        <Task
          showSetings={showSetings}
          setOption={setOption}
          openModal={openModal}
        />
        <Task
          showSetings={showSetings}
          setOption={setOption}
          openModal={openModal}
        />
        <Task
          showSetings={showSetings}
          setOption={setOption}
          openModal={openModal}
        />
        <Task
          showSetings={showSetings}
          setOption={setOption}
          openModal={openModal}
        />
        <Task
          showSetings={showSetings}
          setOption={setOption}
          openModal={openModal}
        />
        <Task
          showSetings={showSetings}
          setOption={setOption}
          openModal={openModal}
        />
        <Task
          showSetings={showSetings}
          setOption={setOption}
          openModal={openModal}
        />
        <Task
          showSetings={showSetings}
          setOption={setOption}
          openModal={openModal}
        />
        <Task
          showSetings={showSetings}
          setOption={setOption}
          openModal={openModal}
        />
        <Task
          showSetings={showSetings}
          setOption={setOption}
          openModal={openModal}
        />

        {bool ? (
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

      {bool ? (
        <div className={style.buttonblock}>
          <div onClick={handleAddCard}  className={style.addButton}>
            <span >Add card</span>
          </div>
          <h3 >X</h3>
        </div>
      ) : (
        <div className={style.addBlock}>
          <div onClick={handleOpenCard} className={style.addCardBlock}>
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