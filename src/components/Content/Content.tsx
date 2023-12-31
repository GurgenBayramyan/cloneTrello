import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListIcon from "@mui/icons-material/List";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ShareIcon from "@mui/icons-material/Share";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { CircularProgress } from "@mui/material";
import AddBlock from "components/AddBlock/AddBlock";
import List from "components/List/List";
import Loading from "components/Loading/Loading";
import NotFound from "components/NotFound/NotFound";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { FC, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBoardDataAction, setAllListAction } from "store/actionTypes";
import {
  boardSliceSelector,
  boardsSelector,
  listSelector,
  listSliceSelector,
} from "store/selectors";
import style from "./Content.module.scss";
import { iContentState } from "./ContentTypes";


const Content: FC = () => {
  const [state, setState] = useState<iContentState>({
    menu: true,
    leftMenu: true,
  });
  const lists = useAppSelector(listSelector.selectEntities);
  const listIds = useAppSelector(listSelector.selectIds);
  const { loadingList } = useAppSelector(listSliceSelector);
  const { loading } = useAppSelector(boardSliceSelector);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getBoardDataAction({ id, navigate }));
      dispatch(setAllListAction({ id }));
    }
  }, [id]);
  const currentBoard = useAppSelector((state) =>
    boardsSelector.selectById(state, id!)
  );

  const handleOpenMenu = () => {
    setState({ ...state, menu: !state.menu });
  };

  const handleCloseLeftMenu = () => {
    setState({ ...state, leftMenu: !state.leftMenu });
  };

  if (!currentBoard && !loading) {
    return <NotFound />;
  }

  return loading ? (
    <div className={style.wrapper}>
      <CircularProgress disableShrink />
    </div>
  ) : (
    <div
      style={{ backgroundImage: `url(${currentBoard!.background})` }}
      className={style.rightContainer}
    >
      <div className={style.topSec}>
        <div className={style.leftBlock}>
          <h3>{currentBoard!.name}</h3>
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
          {loadingList ? (
            <Loading background="transparent" spinnerColor="#fff" />
          ) : (
            !!listIds.length &&
            listIds.map((id) => {
              return <List listId={+id!} title={lists[id]!.name} key={+id} />;
            })
          )}
          
         {!loadingList && <AddBlock />}
        </div>
      </div>
    </div>
  );
};

export default Content;
