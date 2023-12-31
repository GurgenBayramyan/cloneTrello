import { getTemplateMenuStates } from "helpers";
import {
  ChangeEvent,
  FC,
  FocusEvent,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ICShareProps } from "./ShareBlockTypes";
import style from "./ShareBlock.module.scss";
import classNames from "classnames";
import DeleteModal from "components/DeleteModal/DeleteModal";

const ShareBlock: FC<ICShareProps> = ({ onClose }) => {
  const divContent = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("https://trello.com/c/ztTF2o19");
  const [positionClass, setPositionClass] = useState(false);
  const handleFocus = (e: FocusEvent<HTMLInputElement>) =>
    e.currentTarget.select();

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const [opendelete, setopenDelete] = useState(false);
  
  useLayoutEffect(() => {
    const div = divContent.current;
    const isHidden = getTemplateMenuStates(div!);
    setPositionClass(isHidden);
  }, []);

  const openDeleteBlock = () => {
    setopenDelete(!opendelete)
  }
 
  return (

    <div
      className={classNames(style.share, {
        [style.top]: positionClass,
      })}
      ref={divContent}
    >
     
      <div className={style.share_header}>
        <p>Share and more...</p>
        <span data-name="close" onClick={onClose}>
          x
        </span>
      </div>
      <div className={style.printBlock}>
        <span>Print ...</span>
      </div>
      <div className={style.printBlock}>
        <span>Export Json</span>
      </div>
      <hr />
      <div className={style.labelBlock}>
        <label htmlFor="mainInp">Link to this card</label>
        <div className={style.LinkToCard}>
          <input
            id="mainInp"
            autoFocus={true}
            onFocus={handleFocus}
            type="text"
            value={value}
            onChange={changeInputValue}
          />
        </div>
      </div>
      <div className={style.show}>
        <span>Show QR Code</span>
      </div>
      <div className={style.labelBlock}>
        <label htmlFor="inptwo">Embed this Card</label>
        <div className={style.LinkToCard}>
          <input id="inptwo" type="text" value={`${window.location.href}`} />
        </div>
      </div>
      <div className={style.labelBlock}>
        <label htmlFor="share">Email for this card</label>
        <div className={style.LinkToCard}>
          <input
            id="share"
            type="text"
            value="gurgenbayramy+30ojgcu2knfam7i04iv+30vdmjqu10lj43d1xua+2m5344f6r6@boards.trello.com"
          />
        </div>
      </div>
      <h5>
        Emails sent to this address will appear as a comment by you on the card
      </h5>
      <hr />
      <div onClick={openDeleteBlock}>
          Card #2 Added an hour ago . <span className={style.span} >Delete {opendelete && <DeleteModal  onClose={openDeleteBlock}/>}</span>
      </div>
      
    </div>
  );
};

export default ShareBlock;
