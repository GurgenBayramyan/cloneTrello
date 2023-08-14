import { FC } from 'react';
import { ILayoutProps } from './LayoutTypes';
import { useAppDispatch, useAppSelector } from 'hooks/changDispatchSekector';
import { setShowModal } from 'store/slices/modalSlice/modalSlice';
import { setStyles } from 'store/slices/taskSettings/taskSettingsSlice';
import { setShowOptionDiv } from 'store/slices/showOptiondivSlice/showOptionDivSlice';
import style from './Layout.module.scss'
import Header from 'components/Header';
import UserSection from 'components/UserSection/UserSection';
import BoardBackgraund from 'components/BoardBackgraund/BoardBackgraund';
import WorkspaceContent from 'components/WorkspaceContent/WorkspaceContent';
import ModalBlock from 'components/ModallBlock/ModalBlock';
import TaskSettings from 'components/TaskSettings/TaskSettings';
import classNames from 'classnames';
import SideBar from 'components/SideBar/SideBar';
import OptionBoard from 'components/OptionBoard/OptionBoard';
import DeleteBoard from 'components/DeleteBoard/DeleteBoard';


const Layout:FC<ILayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { show } = useAppSelector(state => state.setShowOptionDiv);
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
      <UserSection />
      <BoardBackgraund />
      <WorkspaceContent />
      <ModalBlock  />
      <TaskSettings taskName="TaskName" />
      <OptionBoard />
      <DeleteBoard />
      <div
        onClick={setOption}
        className={classNames(style.settings, {
          [style.settingsIsNone]: show,
        })}
      ></div>
      <Header />
      <div className={style.content}>
            <SideBar />
            {children}
      </div>
      
    </>
  )
}

export default Layout