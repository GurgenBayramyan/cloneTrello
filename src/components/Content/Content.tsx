import { FC,  useRef, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FilterListIcon from "@mui/icons-material/FilterList";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ListIcon from "@mui/icons-material/List";
import ShareIcon from '@mui/icons-material/Share';
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import List from "components/List/List";
import AddBlock from "components/AddBlock/AddBlock";
import style from "./Content.module.scss";



const Content:FC = () => {
  const [state, setState] = useState<{
    menu: boolean;
    leftMenu: boolean;
  }>({
    menu: true,
    leftMenu: true
  });

  const scrollRef = useRef<HTMLDivElement>(null)

  const handleOpenMenu = () => {
    setState({ ...state, menu: !state.menu });
  };

  const handleCloseLeftMenu = () => {
    setState({ ...state, leftMenu: !state.leftMenu })
  };
  
  return (
      <div className={style.rightContainer}>
        <div className={style.topSec}>
          <div className={style.leftBlock}>
            <h3>Tasks</h3>
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
              className={`${style.menuBlockLeft} ${
                state.leftMenu && style.none
              }`}
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
              <FilterListIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
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
            <List
              title="To do"
            />
            <List
              title="To do"
            />
            <List
              title="To do"
            />
            <List
              title="To do"
            />
            <List
              title="To do"
            />
            <List
              title="To do"
            />
            <List
              title="To do"
            />
            <List
              title="To do"
            />
            <AddBlock />
          </div>
        </div>
      </div>
  );
};

export default Content;
