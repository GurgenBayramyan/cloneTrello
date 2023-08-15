import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { MouseEvent, useEffect,  useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { getAllBoardsAction } from "store/actionTypes";
import { useNavigate } from "react-router-dom";
import { setCurrentBoard } from "store/slices/boardSlice/boardSlice";
import {
  setOptionBoardPosition,
} from "store/slices/popupsSlice/popupSlice";
import { popupsSelector } from "store/selectors";
import style from "./SideBar.module.scss";
import { IBoardData } from "store/slices/boardSlice/boarSliceTypes";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const allBoards = useAppSelector((state) => state.boardSlice);
  const { optionboard } = useAppSelector(popupsSelector);
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
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
  const openOptionBoard = (
    e: MouseEvent<HTMLDivElement>,
    elem:IBoardData
  ) => {
    e.stopPropagation();
    const { top, left } = e.currentTarget.getBoundingClientRect();
    dispatch(
      setOptionBoardPosition({
        top,
        left,
        show: !optionboard.show,
        name: elem.name,
        id:elem.id,
      })
    );
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
              className={style.boardBlock}
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
