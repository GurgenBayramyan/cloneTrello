import Header from "components/Header";
import SideBar from "components/SideBar/SideBar";
import { FC } from "react";
import { ILayoutProps } from "./LayoutTypes";
import style from "./Layout.module.scss";
import UserSection from "components/UserSection/UserSection";
import BoardBackgraund from "components/BoardBackgraund/BoardBackgraund";
import WorkspaceContent from "components/WorkspaceContent/WorkspaceContent";
import ModalBlock from "components/ModallBlock/ModalBlock";
import TaskSettings from "components/TaskSettings/TaskSettings";
import OptionBoard from "components/OptionBoard/OptionBoard";
import CreateMenu from "components/CreateMenu/CreateMenu";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { setStyles } from "store/slices/taskSettings/taskSettingsSlice";
import { setShowOptionDiv } from "store/slices/showOptiondivSlice/showOptionDivSlice";
import DeleteBoard from "components/DeleteBoard/DeleteBoard";
import classNames from "classnames";

const Layout: FC<ILayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { show } = useAppSelector((state) => state.setShowOptionDiv);
  const setOption = () => {
    dispatch(
      setStyles({
        currentLeft: -600,
        currentTop: -600,
      })
    );
    dispatch(setShowOptionDiv(!show));
  };
  return (
    <>
      <Header />
      <div
        onClick={setOption}
        className={classNames(style.settings, {
          [style.settingsIsNone]: show,
        })}
      ></div>
      <UserSection />
      <BoardBackgraund />
      <WorkspaceContent />
      <ModalBlock />
      <TaskSettings taskName="TaskName" />
      <OptionBoard />
      <DeleteBoard />
      <CreateMenu />
      <div className={style.content}>
        <SideBar />
        {children}
      </div>
    </>
  );
};

export default Layout;
