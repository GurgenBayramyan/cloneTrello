import { FC,  useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ICreateBoardsMenu } from "./CreateBoardMenuTypes";
import DoneIcon from "@mui/icons-material/Done";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import {
  changeContent,
  goToMain,
  openBackMenuBlock,
  openCreateSection,
  setClose,
  setPosition,
  setPositionCurrent,
} from "store/slices/popupsSlice/popupSlice";
import { getChangeDivPosition } from "helpers";
import { Menus, PageLocation } from "types";
import { boardSliceSelector, popupsSelector } from "store/selectors";
import { useNavigate, useParams } from "react-router-dom";
import {
  setBoardDataAction,
  setBoardDataChangeAction,
} from "store/actionTypes";
import style from "./Createboard.module.scss";
import {
  backgraundImages,
  backgraundImagesDown,
  basicBackgroundUrl,
  trelloImgUrl,
} from "types/constants";
import { setChangeBoard, setUrl } from "store/slices/boardSlice/boardSlice";
import { LinearProgress } from "@mui/material";

const CreateboardMenu: FC<ICreateBoardsMenu> = () => {
  const navigate = useNavigate();
  const divRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const { backgroundState, workspace } = useAppSelector(popupsSelector);
  const { changeBoard, loading, url } = useAppSelector(boardSliceSelector);
  const params = useParams();
  useEffect(()=>{
    dispatch(changeContent(Menus.WORKSPACE));
  },[])
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
    dispatch(setChangeBoard({}));
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
      dispatch(setUrl(basicBackgroundUrl));
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
        bg: url,
      })
    );
  };
  const editSubmit: SubmitHandler<{ boardTitle: string }> = (data) => {
    dispatch(
      setBoardDataChangeAction({
        id: changeBoard.id,
        boardTitle: data.boardTitle,
        navigate,
        bg: url,
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
          backgroundImage: `url(${url})`,
        }}
      >
        <div className={style.childBackgraundImg}>
          <img
            src={trelloImgUrl}
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
                {url === img.url && (
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
                {url === img.url && (
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
          <div ref={divRef} tabIndex={0} data-name="openVi" onClick={openVisibility} className={style.select}>
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
            {loading && <LinearProgress />}
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
            By using images from Unsplash, you agree to their
            <span>license</span> and <span>Terms of Service</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default CreateboardMenu;
