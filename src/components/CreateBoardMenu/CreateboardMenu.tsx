import { FC, useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ICreateBoardsMenu } from "./CreateBoardMenuTypes";
import DoneIcon from "@mui/icons-material/Done";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import {
  goToMain,
  openBackMenuBlock,
  openCreateSection,
  setClose,
  setPosition,
  setPositionCurrent,
} from "store/slices/popupsSlice/popupSlice";
import { getChangeDivPosition } from "helpers";
import { PageLocation } from "types";
import { popupsSelector } from "store/selectors";
import { useNavigate, useParams } from "react-router-dom";
import {
  setBoardDataAction,
  setBoardDataChangeAction,
} from "store/actionTypes";
import style from "./Createboard.module.scss";
import { backgraundImages, backgraundImagesDown } from "types/constants";
import { setChangeBoard, setUrl } from "store/slices/boardSlice/boardSlice";

const CreateboardMenu: FC<ICreateBoardsMenu> = () => {
  const navigate = useNavigate();
  const divRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const { backgroundState, workspace } = useAppSelector(popupsSelector);
  const allboards = useAppSelector((state) => state.boardSlice);
  const params = useParams();
  const { changeBoard } = useAppSelector((state) => state.boardSlice);

  const handleAddBackgraund = (url: string) => {
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
    dispatch(openBackMenuBlock(!backgroundState.show));
  };
  const locationMain = () => {
    dispatch(goToMain(PageLocation.CREATEMENU));
  };

  const openMenu = () => {
    dispatch(
      openCreateSection({
        menuActive: false,
        menuBlock: PageLocation.CREATEMENU,
        currentTop: 0,
        currentLeft: 0,
      })
    );
    dispatch(setClose(false));
    dispatch(openBackMenuBlock(false));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<{ boardTitle: string }>({
    mode: "onTouched",
  });
  useEffect(() => {
    if (changeBoard.id) {
      reset({
        boardTitle: changeBoard.name,
      });
      dispatch(setUrl(changeBoard.background!));
    } else {
      dispatch(
        setUrl(
          "https://images.unsplash.com/photo-1691168712328-924865142ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjkxNjUyNjA4fA&ixlib=rb-4.0.3&q=80&w=1200"
        )
      );
    }
  }, []);
  const value = watch("boardTitle");
  const openVisibility = () => {
    const block = divRef.current!;
    const { top, left } = block.getBoundingClientRect();
    const findPosition = getChangeDivPosition(top, left);
    dispatch(setPosition(findPosition));
    dispatch(setClose(!workspace.show));
  };
  const onSubmit: SubmitHandler<{ boardTitle: string }> = (data) => {
    dispatch(
      setBoardDataAction({
        boardTitle: data.boardTitle,
        navigate,
        bg: allboards.url,
      })
    );
    dispatch(
      openCreateSection({
        menuActive: false,
        menuBlock: PageLocation.CREATEMENU,
        currentTop: 0,
        currentLeft: 0,
      })
    );
  };
  const editSubmit: SubmitHandler<{ boardTitle: string }> = (data) => {
    dispatch(
      openCreateSection({
        menuActive: false,
        menuBlock: PageLocation.CREATEMENU,
        currentTop: 0,
        currentLeft: 0,
      })
    );
    dispatch(
      setBoardDataChangeAction({
        id: changeBoard.id,
        boardTitle: data.boardTitle,
        navigate,
        bg: allboards.url,
        patch: params.id,
      })
    );
    dispatch(setChangeBoard({}));
  };
  return (
    <div className={style.creatBoardParentTwo}>
      <div className={style.creatBoardParentTwo_header}>
        {!changeBoard.id && (
          <div onClick={locationMain} className={style.rightIcon}>
            <span className={style.left}>{"<"}</span>
          </div>
        )}
        <span
          className={classNames(style.boardTitle, {
            [style.title]: changeBoard.id,
          })}
        >
          {changeBoard.id ? "Change board" : "Create board"}
        </span>
        <div onClick={openMenu} className={style.rightIcon}>
          <span>x</span>
        </div>
      </div>
      <div
        className={`${style.backgraundImg}`}
        style={{
          backgroundImage: `url(${allboards.url})`,
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
                key={img.url}
                onClick={() => handleAddBackgraund(img.url)}
                style={{ backgroundImage: `url("${img.url}")` }}
              >
                {allboards.url === img.url && (
                  <DoneIcon fontSize="small" sx={{ color: "black" }} />
                )}
              </div>
            );
          })}
        </div>
        <div className={style.backgraunds_down}>
          {backgraundImagesDown.map((img) => {
            return (
              <div
                key={img.url}
                onClick={() => handleAddBackgraund(img.url)}
                title={img.simbol}
                style={{ backgroundImage: `url("${img.url}")` }}
              >
                {allboards.url === img.url && (
                  <DoneIcon fontSize="small" sx={{ color: "black" }} />
                )}
              </div>
            );
          })}
          <div
            ref={parentRef}
            data-block="change"
            data-name="divparents"
            tabIndex={0}
            onClick={openBackMenu}
            className={style.selectBackgraundDownF}
          >
            <span>...</span>
          </div>
        </div>
      </div>
      <form
        onSubmit={
          changeBoard.id ? handleSubmit(editSubmit) : handleSubmit(onSubmit)
        }
      >
        <div className={style.labelBlock}>
          <label htmlFor="boardTitle">
            Board Title <span>*</span>
          </label>
          <input
            autoFocus
            data-block="change"
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
            <span>{workspace.content}</span>
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
            {!changeBoard.id ? "Create" : "Change"}
          </button>
          <button
            data-block="change"
            type="button"
            className={style.templateBtn}
          >
            Start with a template
          </button>
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
