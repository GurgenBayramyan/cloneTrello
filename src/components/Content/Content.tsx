import React, { useEffect, useRef, useState } from "react";
import style from "./Content.module.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
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
import { IContentProps } from "./ContentTypes";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { close } from "store/slices/templatesSlice/templatesSlice";

const Content  = ({openModal}:IContentProps) => {
  const templatesBlock = useAppSelector(state=>state.templateSlice);
  const dispatch = useAppDispatch()
  const [state, setState] = useState<{
    open: boolean;
    menu: boolean;
    leftMenu: boolean;
  }>({
    open: true,
    menu: true,
    leftMenu: true
  });
 
  const scrollRef = useRef<HTMLDivElement>(null)
  const handleMenu = () => {
    setState({ ...state, open: !state.open });
  };
  const handleOpenMenu = () => {
    setState({ ...state, menu: !state.menu });
  };

  const handleCloseLeftMenu = () => [
    setState({ ...state, leftMenu: !state.leftMenu })
  ];

  const handleScroll = () => {
    dispatch(close())
  };
  useEffect(()=>{
    if(scrollRef.current){
      scrollRef.current.addEventListener('scroll', handleScroll);
    }  
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  return (
    <div className={style.content}>
      
      <div className={`${style.leftContainer} ${state.open && style.close} `}>
        <div className={style.leftContainer_top}>
          <div className={style.numbers}>
            <div className={style.first}>
              <span>4</span>
            </div>
            <div className={style.last}>
              <span>48</span>
            </div>
          </div>
          {state.open ? (
            <div className={style.openBlock}>
              <ChevronRightIcon
                sx={{ cursor: "pointer" }}
                onClick={handleMenu}
              />
            </div>
          ) : (
            <div className={style.closeblock}>
              <ChevronLeftIcon
                sx={{ cursor: "pointer" }}
                onClick={handleMenu}
              />
            </div>
          )}
          <div />
        </div>
        <div className={style.leftContainer_down} />
      </div>
      <div className={style.rightContainer}>
        <div className={style.topSec}>
          <div className={style.leftBlock}>
            <h3>Tasks</h3>
            <StarBorderIcon className={style.starIcon} />
            <div className={style.textBlock}>
              <PeopleAltIcon />
              <span>Рабочие пространства</span>
            </div>
            <div className={style.board}>
              <span>Доска</span>
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
                {/* <PeopleAltIcon /> */}
                <span>Рабочие пространства</span>
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
              <p>Улучшения</p>
            </div>
            <div className={style.text}>
              <ElectricBoltIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Автоматизация</p>
            </div>
            <div className={style.text}>
              <FilterListIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Фильтр</p>
            </div>
            <div className={style.text}>
              <ShareIcon className={style.logo} sx={{ cursor: "pointer" }} />
              <p>Поделиться</p>
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
                <p>Улучшения</p>
              </div>
              <div className={style.text}>
                <ElectricBoltIcon
                  className={style.logo}
                  sx={{ cursor: "pointer" }}
                />
                <p>Автоматизация</p>
              </div>
              <div className={style.text}>
                <FilterListIcon
                  className={style.logo}
                  sx={{ cursor: "pointer" }}
                />
                <p>Фильтр</p>
              </div>
              <div className={style.text}>
                <p>Поделиться</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.rightContainer_down}>
          <div ref={scrollRef} className={style.downBlock}>
            <List
              openModal={openModal}
              title="To do"
            />
            <List
              openModal={openModal}
              title="To do"
            />
            <List
              openModal={openModal}
              title="To do"
            />
            <List
              openModal={openModal}
              title="To do"
            />
            <List
              openModal={openModal}
              title="To do"
            />
            <List
              openModal={openModal}
              title="To do"
            />
            <List
              openModal={openModal}
              title="To do"
            />
            <List
              openModal={openModal}
              title="To do"
            />
            <AddBlock />
          </div>
        </div>
      </div>
       
      
      
    </div>
  );
};

export default Content;
