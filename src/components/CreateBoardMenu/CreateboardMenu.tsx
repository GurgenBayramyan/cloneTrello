import { FC, MouseEvent, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ICreateBoardsMenu } from "./CreateBoardMenuTypes";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { visibilitySelector } from "store/selectors";
import { setClose, setPosition } from "store/slices/workspaceSlice/workspaceSlice";
import { getChangeDivPosition} from "helpers";
import style from "./Createboard.module.scss";

const CreateboardMenu:FC<ICreateBoardsMenu> = ({openCreateSection,goToMain}) => {
  const [classNameBlock, setClassNameBlock] = useState<string>("");
  const divRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch();
  const visibility = useAppSelector(visibilitySelector)
  const handleAddBackgraund = (e: React.MouseEvent<HTMLDivElement>) => {
    setClassNameBlock(e.currentTarget.className);
  };

  const stopProp = (e: MouseEvent) => e.stopPropagation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<{ boardTitle: string }>({
    mode: "onTouched",
  });

  const value = watch("boardTitle");

  const openVisibility = () => {
    const block = divRef.current!;
    const{top,left} = block.getBoundingClientRect();
    const findPosition = getChangeDivPosition(top,left)
    dispatch(setPosition(findPosition))
    dispatch(setClose(!visibility.show))
  }
  const onSubmit: SubmitHandler<{boardTitle: string }> = (data) => {

  };
  return (
    <div onClick={stopProp} className={style.creatBoardParentTwo}>
      <div className={style.creatBoardParentTwo_header}>
        <div onClick={goToMain} className={style.rightIcon}>
          <span className={style.left}>{"<"}</span>
        </div>
        <span className={style.boardTitle}>Create board</span>
        <div onClick={openCreateSection} className={style.rightIcon}>
          <span>x</span>
        </div>
      </div>
      <div className={`${style.backgraundImg} ${classNameBlock}`}>
        <div className={style.childBackgraundImg}>
          <img
            src="https://trello.com/assets/14cda5dc635d1f13bc48.svg"
            alt=""
          />
        </div>
      </div>
      <h5>Background</h5>
      <div className={style.backgraunds}>
        <div className={style.backgraunds_top}>
          <div
            onClick={handleAddBackgraund}
            className={style.selecBackgraundOne}
            title="Custom img"
          ></div>
          <div
            onClick={handleAddBackgraund}
            className={style.selecBackgraundTwo}
            title="Custom img"
          ></div>
          <div
            onClick={handleAddBackgraund}
            className={style.selecBackgraundTree}
            title="Custom img"
          ></div>
          <div
            onClick={handleAddBackgraund}
            className={style.selecBackgraundFor}
            title="Custom img"
          ></div>
        </div>
        <div className={style.backgraunds_down}>
          <div
            onClick={handleAddBackgraund}
            className={style.selectBackgraundDownA}
            title="❄️"
          ></div>
          <div
            onClick={handleAddBackgraund}
            className={style.selectBackgraundDownB}
            title="🌊"
          ></div>
          <div
            onClick={handleAddBackgraund}
            className={style.selectBackgraundDownC}
            title="🔮"
          ></div>
          <div
            onClick={handleAddBackgraund}
            className={style.selectBackgraundDownD}
            title="🌈"
          ></div>
          <div
            onClick={handleAddBackgraund}
            className={style.selectBackgraundDownE}
            title="🍑"
          ></div>
          <div className={style.selectBackgraundDownF}>
            <span>...</span>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.labelBlock}>
          <label htmlFor="boardTitle">
            Board Title <span>*</span>
          </label>
          <input
            autoFocus
            type="text"
            id="boardTitle"
            {...register("boardTitle", {
              required: "👋  Board title is required",
            })}
          />
          {value ? null : <p>👋 Board title is required</p>}
        </div>

        <div  className={style.selectBlock}>
          <label>Visability</label>
          <div ref={divRef} onClick={openVisibility} className={style.select}>
            <span>{visibility.content}</span>
            <div className={style.iconBlock}>
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
        <div className={style.btns}>
          <button
            disabled={!value}
            className={classNames(style.createBtn, {
              [style.activeCreate]: value,
            })}
            type="submit"
          >
            Create
          </button>
          <button className={style.templateBtn}>Start with a template</button>
        </div>
        <div className={style.paragBlock}>
          <p>
            By using images from Unsplash, you agree to their{" "}
            <span>license</span> and <span>Terms of Service</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default CreateboardMenu;
