import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListIcon from "@mui/icons-material/List";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ShareIcon from "@mui/icons-material/Share";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddBlock from "components/AddBlock/AddBlock";
import List from "components/List/List";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { FC, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBoardDataAction, setAllListAction } from "store/actionTypes";
import { boardSliceSelector, listSliceSelector } from "store/selectors";
import style from "./Content.module.scss";
import { CircularProgress } from "@mui/material";
import { findBoard } from "helpers";
import NotFound from "components/NotFound/NotFound";
import { iContentState } from "./ContentTypes";

const Content: FC = () => {
  const [state, setState] = useState<iContentState>({
    menu: true,
    leftMenu: true,
  });
  const { currentBoard, allBoardsData } = useAppSelector(boardSliceSelector);
  const {lists} = useAppSelector(listSliceSelector);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getBoardDataAction({ id, navigate }));
      dispatch(setAllListAction({id}))
    }
    
  }, [id]);


  const handleOpenMenu = () => {
    setState({ ...state, menu: !state.menu });
  };

  const handleCloseLeftMenu = () => {
    setState({ ...state, leftMenu: !state.leftMenu });
  };

  if(!findBoard(allBoardsData,id!)){
    return(
      <NotFound />
    )
  }

  return currentBoard.loading ? (
    <div className={style.wrapperLoading}>
      <CircularProgress disableShrink />
    </div>
  ) : (
    <div
      style={{ backgroundImage: `url(${currentBoard.background})` }}
      className={style.rightContainer}
    >
      <div className={style.topSec}>
        <div className={style.leftBlock}>
          <h3>{currentBoard.name}</h3>
          <StarBorderIcon className={style.starIcon} />
          <div className={style.textBlock}>
            <PeopleAltIcon />
            <span>Workspace visible</span>
          </div>
          <div className={style.board}>
            <span>Board</span>
            <div className={style.rowDown}>
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
        <div className={style.burgerMenuLeft}>
          <MenuOpenIcon
            onClick={handleCloseLeftMenu}
            sx={{ cursor: "pointer" }}
            className={style.listIcon}
          />
          <div
            className={`${style.menuBlockLeft} ${state.leftMenu && style.none}`}
          >
            <div className={style.text}>
              <h3>Tasks</h3>
              <StarBorderIcon />
            </div>
            <div className={style.text}>
              <span>Workspace visible</span>
            </div>
            <div className={style.board}>
              <span>Board</span>
              <div className={style.rowDown}>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>
        </div>
        <div className={style.rightBlock}>
          <div className={style.text}>
            <RocketLaunchIcon
              className={style.logo}
              sx={{ cursor: "pointer" }}
            />
            <p>Power-Ups</p>
          </div>
          <div className={style.text}>
            <ElectricBoltIcon
              className={style.logo}
              sx={{ cursor: "pointer" }}
            />
            <p>Automation</p>
          </div>
          <div className={style.text}>
            <FilterListIcon className={style.logo} sx={{ cursor: "pointer" }} />
            <p>filter</p>
          </div>
          <div className={style.text}>
            <ShareIcon className={style.logo} sx={{ cursor: "pointer" }} />
            <p>Share</p>
          </div>
          <div className={style.text}>
            <span>...</span>
          </div>
        </div>
        <div className={style.burgerMenu}>
          <ListIcon
            onClick={handleOpenMenu}
            sx={{ cursor: "pointer" }}
            className={style.listIcon}
          />
          <div className={`${style.menuBlock} ${state.menu && style.none}`}>
            <div className={style.text}>
              <RocketLaunchIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Power-Ups</p>
            </div>
            <div className={style.text}>
              <ElectricBoltIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Automation</p>
            </div>
            <div className={style.text}>
              <FilterListIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Filter</p>
            </div>
            <div className={style.text}>
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.rightContainer_down}>
        <div ref={scrollRef} className={style.downBlock}>
            {!!lists.length && lists.map(list => {
              return (
                <List listId={list!.id} title={list!.name}  key={list!.id}/>
              )
            })}
          <AddBlock />
        </div>
      </div>
    </div>
  );
};

export default Content;
