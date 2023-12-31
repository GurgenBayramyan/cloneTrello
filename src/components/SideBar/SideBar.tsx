import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { MouseEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { getAllBoardsAction } from "store/actionTypes";
import { useNavigate, useParams } from "react-router-dom";
import {
  setOptionBoardPosition,
  setOptionBoardToDefault,
} from "store/slices/popupsSlice/popupSlice";
import { boardSliceSelector, boardsSelector, popupsSelector } from "store/selectors";
import style from "./SideBar.module.scss";
import { IBoardData } from "store/slices/boardSlice/boarSliceTypes";
import classNames from "classnames";
import { setChangeBoard } from "../../store/slices/boardSlice/boardSlice";
import { EntityId } from "@reduxjs/toolkit";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const {  changeBoard } = useAppSelector(boardSliceSelector);
  const { optionboard ,menuState } = useAppSelector(popupsSelector);
  const boardsEnt = useAppSelector(boardsSelector.selectEntities);
  const boardsIds = useAppSelector(boardsSelector.selectIds);
  const navigate = useNavigate();

  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    dispatch(getAllBoardsAction());
  }, []);
  const handleNavigate = (id: number) => {
    navigate(`/board/${id}`);
  };
  const toDefaultState = () => {
    dispatch(setChangeBoard({}));
    dispatch(setOptionBoardToDefault());
  };


  const openOptionBoard = (e: MouseEvent<HTMLDivElement>, elem: IBoardData) => {
    e.stopPropagation();
    const { top, left } = e.currentTarget.getBoundingClientRect();
    if(!changeBoard.id && menuState.menuActive){
      toDefaultState()
        return
    }
    if(changeBoard.id === elem.id && !optionboard.show ){
      dispatch(setChangeBoard({}))
      return
    }
    dispatch(
      setOptionBoardPosition({
        currentTop: top + 35,
        currentLeft: left,
        show: elem.id === changeBoard.id ? !optionboard.show : true,
        name: elem.name,
        id: elem.id,
      })
    );
    optionboard.show && elem.id === optionboard.id
    ? toDefaultState()
    : dispatch(setChangeBoard(elem));

  };

  return (
    <div className={`${style.leftContainer} ${open && style.close} `}>
      <div className={style.leftContainer_top}>
        <div className={style.numbers}>
          <div className={style.first}>
            <span>4</span>
          </div>
          <div className={style.last}>
            <span>48</span>
          </div>
        </div>
        {open ? (
          <div className={style.openBlock}>
            <ChevronRightIcon sx={{ cursor: "pointer" }} onClick={handleMenu} />
          </div>
        ) : (
          <div className={style.closeblock}>
            <ChevronLeftIcon sx={{ cursor: "pointer" }} onClick={handleMenu} />
          </div>
        )}
        <div />
      </div>
      <div className={style.leftContainer_down}>
        <div className={style.titleBlock}>
          <h5>Your boards</h5>
        </div>
        
        {boardsIds.map((elemId: EntityId) => {
          return (
            <div
              key={+elemId}
              onClick={() => handleNavigate(+elemId)}
              className={classNames(style.boardBlock, {

                [style.linkActive]: elemId === +id!,
                [style.activeMenu]:
                elemId === optionboard.id || elemId === changeBoard.id,
              })}
            >
              <div className={style.taskInfo}>
                <div
                  style={{ backgroundImage: `url(${boardsEnt[elemId]?.background})` }}
                  className={style.backgraundBlock}
                ></div>
                <span>{boardsEnt[elemId]?.name}</span>
              </div>
              <div className={style.iconBlock}>
                <div
                  tabIndex={0}
                  data-name="spred"
                  onClick={(e) => openOptionBoard(e, boardsEnt[elemId]!)}
                  className={classNames(style.firstIcon)}
                >
                  <span>...</span>
                </div>
                <div className={style.lastIcon}>
                  <StarBorderIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
