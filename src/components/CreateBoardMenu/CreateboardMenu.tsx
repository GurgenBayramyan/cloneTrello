import { FC, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ICreateBoardsMenu } from "./CreateBoardMenuTypes";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import {
  goToMain,
  openBackMenuBlock,
  openCreateSection,
  setClose,
  setPosition,
  setPositionCurrent,
  setUrl,
} from "store/slices/popupsSlice/popupSlice";
import { getChangeDivPosition } from "helpers";
import { PageLocation } from "types";
import { popupsSelector } from "store/selectors";
import { useNavigate } from "react-router-dom";
import { setBoardDataAction } from "store/actionTypes";
import style from "./Createboard.module.scss";
import { backgraundImages, backgraundImagesDown } from "types/constants";

const CreateboardMenu: FC<ICreateBoardsMenu> = () => {
  const navigate = useNavigate();
  const divRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const visibility = useAppSelector(popupsSelector);

  const handleAddBackgraund = (url:string) => {
    
    dispatch(setUrl(url));
  };

  const openBackMenu = () => {
    const { top, right } = parentRef.current!.getBoundingClientRect();
    dispatch(
      setPositionCurrent({
        top,
        right,
      })
    );
    dispatch(openBackMenuBlock(!visibility.backgroundState.show));
  };
  const locationMain = () => {
    dispatch(goToMain(PageLocation.CREATEMENU));
  };

  const openMenu = () => {
    dispatch(
      openCreateSection({
        menuActive: !visibility.menuState.menuActive,
        menuBlock: PageLocation.CREATEMENU,
      })
    );
  };

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
    const { top, left } = block.getBoundingClientRect();
    const findPosition = getChangeDivPosition(top, left);
    dispatch(setPosition(findPosition));
    dispatch(setClose(!visibility.workspace.show));
  };
  const onSubmit: SubmitHandler<{ boardTitle: string }> = async (data) => {
    dispatch(setBoardDataAction({ boardTitle: data.boardTitle, navigate,bg:visibility.url}));
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
      <div
        className={`${style.backgraundImg}`}
        style={{
          backgroundImage: `url(${visibility.url})`,
        }}
      >
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
          {backgraundImages.map((img) => {
            return (
              <div
                onClick={()=>handleAddBackgraund(img)}
                style={{ backgroundImage: `url("${img}")` }}
              ></div>
            );
          })}
        </div>
        <div className={style.backgraunds_down}>
          {backgraundImagesDown.map((img) => {
            return (
              <div
                onClick={()=>handleAddBackgraund(img.url)}
                title={img.simbol}
                style={{ backgroundImage: `url("${img.url}")` }}
              ></div>
            );
          })}
          <div
            ref={parentRef}
            data-name="divparents"
            tabIndex={0}
            onClick={openBackMenu}
            className={style.selectBackgraundDownF}
          >
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

        <div className={style.selectBlock}>
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
