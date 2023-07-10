import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import style from "./Header.module.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Person3Icon from "@mui/icons-material/Person3";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import MenuIcon from "@mui/icons-material/Menu";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FilterListIcon from "@mui/icons-material/FilterList";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { IHeaderState} from './HeaderTypes';
const  Header = () => {
    const[headerState,setHeaderState] = useState<IHeaderState>({
        open:true,
        menuView:true,
    })
    const handleOpenMenu = () => {
        setHeaderState({...headerState,
          open:!headerState.open,
          menuView:headerState.open ? true:headerState.menuView
        })

    }
    const handleViewMenu = () => {
      setHeaderState({
        ...headerState,
        menuView:!headerState.menuView,
        open:headerState.menuView ? true:headerState.open
      })
    }
  return <header className={style.header}>
      <div className={style.header_navbar}>
        <div className={style.header_navbar_buttonBlock}>
          <AppsIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_iconTreloBlock}>
          <span>Trello</span>
        </div>
        <div className={style.header_navbar_textBlock}>
          <span>Рабочие пространства</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_textBlock}>
          <span>Недавние</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_textBlock}>
          <span> В избранном</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_textBlock}>
          <span>Шаблоны</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_search}>
          <span>Создать</span>
        </div>
      </div>
      <div>
      <MenuIcon onClick={handleOpenMenu} className={style.header_menuIcon} />
      <div className={headerState.open == false ? style.header_menuBlock : style.header_menuBlockClose}>
      
        <div className={style.header_navbar_iconTreloBlock}>
          <span>Trello</span>
        </div>
        <div className={style.header_navbar_textBlock}>
          <span>Рабочие пространства</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_textBlock}>
          <span>Недавние</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_textBlock}>
          <span> В избранном</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_textBlock}>
          <span>Шаблоны</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_search}>
          <span>Создать</span>
        </div>
        <div className={style.iconsBlock}>
          <NotificationsIcon className={style.id} sx={{ cursor: "pointer" }} />
          <ContactSupportIcon className={style.id} sx={{ cursor: "pointer" }} />
          <DisplaySettingsIcon className={style.id} sx={{ cursor: "pointer" }} />
          <Person3Icon className={style.id} sx={{ cursor: "pointer" }} />
        </div>
      </div>
      </div>
      <div className={style.header_search_block}>
        <div className={style.header_search_block_inputBlock}>
          <input type="text" placeholder="Поиск" />
          <SearchIcon className={style.header_search_block_inputBlock_icon} />
        </div>
        <div className={style.header_search_block_userBlock}>
          <NotificationsIcon sx={{ cursor: "pointer" }} />
          <ContactSupportIcon sx={{ cursor: "pointer" }} />
          <DisplaySettingsIcon sx={{ cursor: "pointer" }} />
          <Person3Icon sx={{ cursor: "pointer" }} />
        </div>
      </div>
      <ClearAllIcon onClick={handleViewMenu} className={style.menuHeader} />
      <div className={`${!headerState.menuView && style.k7} ${headerState.menuView && style.k6} `}>
        <h3>Tasks</h3>
        <p className={style.parag}>Для рабочего пространства</p>
        <div className={style.dosk}>
          <p>По доске</p>
          <KeyboardArrowDownIcon className={style.img} />
        </div>
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
            <div className={style.text}>
              <span>...</span>
            </div>
      </div>
    </header>;
}
export default Header
