import BackupTableIcon from "@mui/icons-material/BackupTable";
import OptionList from "components/OptionList/OptionList";
import Task from "components/Task/Task";
import Templates from "components/Templates/Templates";
import { useAppDispatch } from "hooks/changDispatchSekector";
import { FC, useState, } from "react";
import { useParams } from "react-router-dom";
import { changeListAction } from "store/actionTypes";
import style from "./List.module.scss";
import { IListProps, IListState } from "./ListTypes";




const List: FC<IListProps> = ({ title, listId}) => {
  const [changeTitle, setChangeTitle] = useState(title);
  const [showMenuUser,setShowMenuUser] = useState(false)

  const [listState, setListState] = useState<IListState>({
    addCard: false,
    titleBlock: true,

  });
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChangeTitle(event.target.value);
  };

  const handleClick = () => {
    setShowMenuUser(true)
  }
  const closeUserMenu = () => {
      setShowMenuUser(false)
  }
  const handleAddCard = () => {
    setListState({ ...listState, addCard: true });
  };
  const handleClose = () => {
    setListState({ ...listState, addCard: false });
  };

  const setTitle = () => {
    setListState({ ...listState, titleBlock: !listState.titleBlock });
  };
  const blurForTitle = () => {
    if(changeTitle){
    dispatch(changeListAction({Listid:listId.toString(),name:changeTitle!,boardId:id!}))
    }
    setListState({ ...listState, titleBlock: !listState.titleBlock });
  };

  const closeAddBlock = (e: React.FocusEvent<HTMLElement>) => {
    const target = e.relatedTarget as HTMLElement;
    if (target?.dataset?.name === "addCard") {
      return;
    }

    setListState({ ...listState, addCard: false });
  };


  return (
    <div className={style.listBlock}>
      <div className={style.listBlock_header}>
        {listState.titleBlock ? (
          <div onClick={setTitle} className={style.titleBlock}>
            <span>{changeTitle}</span>
          </div>
        ) : (
          <form onSubmit={blurForTitle} >
            <input
            type="text"
            value={changeTitle}
            onBlur={blurForTitle}
            autoFocus={true}
            onChange={(e) => handleChangeTitle(e)}
          />
          </form>
        )}
        <OptionList  listId={listId} />
      </div>
      <div className={style.tasks}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />

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
        ) : null}
      </div>

      {listState.addCard ? (
        <div className={style.buttonblock}>
          <div
            tabIndex={0}
            data-name="addCard"
            onClick={handleAddCard}
            onBlur={closeAddBlock}
            className={style.addButton}
          >
            <span>Add card</span>
          </div>
          <h3 onClick={handleClose}>X</h3>
        </div>
      ) : (
        <div className={style.addBlock}>
          <div onClick={handleAddCard} className={style.addCardBlock}>
            <span>+</span>
            <span>Add card</span>
          </div>
          <div
           
            className={style.iconBlockAdd}
          >
            <button onClick={handleClick}>
            <BackupTableIcon    sx={{ cursor: "pointer", fontSize: "12px" }} />
            </button>
           
           {showMenuUser &&  <Templates onClose={closeUserMenu} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
