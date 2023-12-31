import { useEffect, useRef, useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import style from "./Header.module.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import MenuIcon from "@mui/icons-material/Menu";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FilterListIcon from "@mui/icons-material/FilterList";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { IHeaderState } from "./HeaderTypes";
import classNames from "classnames";
import { fetchLogout, toastDefaultValue } from "helpers";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { getUserDataAction } from "store/actionTypes";
import LoginIcon from "@mui/icons-material/Login";
import { ToastOptions, toast } from "react-toastify";
import UserNameIcon from "components/UserNameIcon/UserNameIcon";
import {
  boardSliceSelector,
  contentSliceSelector,
  popupsSelector,
} from "store/selectors";
import { openBackMenuBlock, openCreateSection, setClose } from "store/slices/popupsSlice/popupSlice";
import { PageLocation } from "types";
import { setChangeBoard } from "store/slices/boardSlice/boardSlice";

const Header = () => {
  const [headerState, setHeaderState] = useState<IHeaderState>({
    open: true,
    menuView: true,
    userMenu: true,
  });
  const createDivRef = useRef<HTMLButtonElement>(null);
  const { menuState, workspace , backgroundState } = useAppSelector(popupsSelector);
  const { changeBoard } = useAppSelector(boardSliceSelector);
  const { data } = useAppSelector(contentSliceSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserDataAction());
  }, []);
  const handleOpenMenu = () => {
    setHeaderState({
      ...headerState,
      open: !headerState.open,
      menuView: headerState.open ? true : headerState.menuView,
      userMenu: true,
    });
  };
  const handleViewMenu = () => {
    setHeaderState({
      ...headerState,
      menuView: !headerState.menuView,
      open: headerState.menuView ? true : headerState.open,
      userMenu: true,
    });
  };
  const handleOpenUserMenu = () => {
    setHeaderState({
      userMenu: !headerState.userMenu,
      menuView: true,
      open: true,
    });
  };
  const handlelogOut = async () => {
    const resp = await fetchLogout();
    const { messege } = resp.data;
    toast.success(messege, toastDefaultValue() as ToastOptions<{}>);
    Cookies.remove("token");
    navigate("/login");
  };
  const openMenu = () => {
    const { top, left } = createDivRef.current!.getBoundingClientRect();
    
    dispatch(
      openCreateSection({
        menuActive: changeBoard.id ? true : !menuState.menuActive,
        menuBlock: PageLocation.CREATEMENU,
        currentTop: top,
        currentLeft: left,
      })
    );

    if(workspace.show) {
      dispatch(setClose(false))
    }
    if(backgroundState.show){
      dispatch(openBackMenuBlock(false))
    }

    dispatch(setChangeBoard({}));
  };
  return (
    <header className={style.header}>
      <div className={style.header_navbar}>
        <div className={style.header_navbar_buttonBlock}>
          <AppsIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_iconTreloBlock}>
          <span>Trello</span>
        </div>
        <div className={style.header_navbar_textBlock}>
          <span>Workspaces</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_textBlock}>
          <span>Recent</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_textBlock}>
          <span> Starred</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <div className={style.header_navbar_textBlock}>
          <span>Templates</span>
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </div>
        <button
          data-name="btn"
          ref={createDivRef}
          className={style.headerS4}
          onClick={openMenu}
        >
          Create
        </button>
      </div>
      <div>
        <MenuIcon onClick={handleOpenMenu} className={style.header_menuIcon} />
        <div
          className={
            headerState.open === false
              ? style.header_menuBlock
              : style.header_menuBlockClose
          }
        >
          <div className={style.header_navbar_iconTreloBlock}>
            <span>Trello</span>
          </div>
          <div className={style.header_navbar_textBlock}>
            <span>Workspaces</span>
            <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
          </div>
          <div className={style.header_navbar_textBlock}>
            <span>Recent</span>
            <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
          </div>
          <div className={style.header_navbar_textBlock}>
            <span> Starred</span>
            <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
          </div>
          <div className={style.header_navbar_textBlock}>
            <span>Templates</span>
            <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
          </div>
          <div className={style.header_navbar_search}>
            <span>Create</span>
          </div>
          <div className={style.iconsBlock}>
            <NotificationsIcon
              className={style.id}
              sx={{ cursor: "pointer" }}
            />
            <ContactSupportIcon
              className={style.id}
              sx={{ cursor: "pointer" }}
            />
            <DisplaySettingsIcon
              className={style.id}
              sx={{ cursor: "pointer" }}
            />
            <UserNameIcon name="Vahe" lastName="Gevorgian" />
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
        </div>
        <div className={style.accountIcon}>
          <LoginIcon onClick={handleOpenUserMenu} sx={{ cursor: "pointer" }} />
          <div
            className={classNames(style.userInfoBlock, {
              [style.block_User]: headerState.userMenu,
            })}
          >
            <div className={style.userAccount}>
              <span>ACCOUNT</span>
            </div>
            <div className={style.userAccountBlock}>
              <div className={style.icon}>
                <UserNameIcon name={data.firstname} lastName={data.lastname} />
              </div>
              <div className={style.userInfoData}>
                <span>
                  {data.firstname}
                  {data.lastname}
                </span>
                <span>{data.email}</span>
              </div>
            </div>

            <div className={style.logOut}>
              <span onClick={handlelogOut}>Log out</span>
            </div>
          </div>
        </div>
        <div className={style.men}>
          <ClearAllIcon onClick={handleViewMenu} className={style.menuHeader} />
          <div
            className={`${!headerState.menuView && style.k7} ${
              headerState.menuView && style.k6
            } `}
          >
            <h3>Tasks</h3>
            <p className={style.parag}>Workspaces visible</p>
            <div className={style.dosk}>
              <p>Board</p>
              <KeyboardArrowDownIcon className={style.img} />
            </div>
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
              <p>Flter</p>
            </div>
            <div className={style.text}>
              <p>Share</p>
            </div>
            <div className={style.text}>
              <span>...</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
