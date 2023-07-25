import { FC, useState } from "react";
import style from "./Check.module.scss";
import { ICheck } from "./CheckTypes";

const CheckList:FC<ICheck> = ({onClose}) => {
  const [value, setValue] = useState("Checklist");
  return (
    <div  className={style.checkList}>
      <div className={style.checkList_header}>
        <p>Add checkList</p>
        <span data-name="close" onClick={onClose}>x</span>
      </div>
      <h5>Title</h5>
      <div className={style.inputBlock}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={style.addBlock}>
            <span>Add</span>
      </div>
    </div>
  );
};

export default CheckList;
