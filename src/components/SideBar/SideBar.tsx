import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { MouseEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { getAllBoardsAction } from "store/actionTypes";
import { useNavigate, useParams } from "react-router-dom";
import { setCurrentBoard } from "store/slices/boardSlice/boardSlice";
import {
  closeMenu,
  setOptionBoardPosition,
} from "store/slices/popupsSlice/popupSlice";
import { popupsSelector } from "store/selectors";
import style from "./SideBar.module.scss";
import { IBoardData } from "store/slices/boardSlice/boarSliceTypes";
import classNames from "classnames";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const allBoards = useAppSelector((state) => state.boardSlice);
  const { optionboard} = useAppSelector(popupsSelector);
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
    const elem = allBoards.allBoardsData.find((el) => el.id === id);
    dispatch(setCurrentBoard(elem!));
    navigate(`/board/${id}`);
  };
  const openOptionBoard = (e: MouseEvent<HTMLDivElement>, elem: IBoardData) => {
    const { top, left } = e.currentTarget.getBoundingClientRect();

    dispatch(
      setOptionBoardPosition({
        currentTop: top + 35,
        currentLeft: left,
        show: !optionboard.show,
        name: elem.name,
        id: elem.id,
      })
    );
    dispatch(closeMenu());
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
        {allBoards.allBoardsData.map((el) => {
          return (
            <div
              key={el.id}
              onClick={() => handleNavigate(el.id)}
              className={classNames(style.boardBlock, {
                [style.linkActive]: el.id === +id!,
              })}
            >
              <div className={style.taskInfo}>
                <div
                  style={{ backgroundImage: `url(${el.background})` }}
                  className={style.backgraundBlock}
                ></div>
                <span>{el.name}</span>
              </div>
              <div className={style.iconBlock}>
                <div
                  tabIndex={0}
                  data-name="spred"
                  onClick={(e) => openOptionBoard(e, el)}
                  className={style.firstIcon}
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
