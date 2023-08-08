import { FC, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ICreateBoardsMenu } from "./CreateBoardMenuTypes";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { closeMenu, goToMain, openBackMenuBlock, openCreateSection, setClassName, setClose, setPosition, setPositionCurrent } from "store/slices/popupsSlice/popupSlice";
import { getChangeDivPosition} from "helpers";
import { PageLocation } from "types";
import style from "./Createboard.module.scss";
import { popupsSelector } from "store/selectors";
import { setBoard } from "services/autication";


const CreateboardMenu:FC<ICreateBoardsMenu> = () => {
  
  const divRef = useRef<HTMLDivElement>(null)
  const parentRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch();
  const visibility = useAppSelector(popupsSelector)
  const handleAddBackgraund = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setClassName(e.currentTarget.className));
  };

  const openBackMenu = () => {
    const {top,right} = parentRef.current!.getBoundingClientRect()
    dispatch(setPositionCurrent({
      top,
      right,
    }))
    dispatch(openBackMenuBlock(!visibility.backgroundState.show))
  }
  const locationMain = () =>{
    dispatch(goToMain(PageLocation.CREATEMENU))
  }
 
  const openMenu = () => {
    dispatch(openCreateSection({
      menuActive:!visibility.menuState.menuActive,
      menuBlock:(PageLocation.CREATEMENU)
    }))
 }
 
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
    dispatch(setClose(!visibility.workspace.show))
  }
  const onSubmit: SubmitHandler<{boardTitle: string }> = (data) => {
    const resp = setBoard(data.boardTitle);
    console.log(resp)
  };
  return (
    <div className={style.creatBoardParentTwo}>
      <div className={style.creatBoardParentTwo_header}>
        <div onClick={locationMain} className={style.rightIcon}>
          <span className={style.left}>{"<"}</span>
        </div>
        <span className={style.boardTitle}>Create board</span>
        <div onClick={openMenu} className={style.rightIcon}>
          <span>x</span>
        </div>
      </div>
      <div className={`${style.backgraundImg} ${visibility.className}`}>
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
          <div ref ={parentRef} data-name="divparents" tabIndex={0} onClick={openBackMenu} className={style.selectBackgraundDownF}>
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
            <span>{visibility.workspace.content}</span>
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
