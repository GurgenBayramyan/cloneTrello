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


const Layout:FC<ILayoutProps> = ({ children }) => {
    const modal = useAppSelector(state => state.modallMeniu)
  const dispatch = useAppDispatch();
  const board = useAppSelector(state=> state.boardSlice.currentBoard)
  const openModal = () => {
    dispatch(setShowModal(!modal.upModalShow))
  };
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