import Header from '../Header'
import Content from '../Content'
import classNames from 'classnames'
import { useAppDispatch, useAppSelector } from 'hooks/changDispatchSekector'
import { setShowOptionDiv } from 'store/slices/showOptiondivSlice/showOptionDivSlice'
import TaskSettings from 'components/TaskSettings/TaskSettings'
import { setStyles } from 'store/slices/taskSettings/taskSettingsSlice'
import {  useState } from 'react'
import ModalBlock from 'components/ModallBlock/ModalBlock'
import style from './Home.module.scss'
import UserSection from 'components/UserSection/UserSection'
import Templates from 'components/Templates/Templates'


const Home = ()=> { 
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal)
  }
  const {show} = useAppSelector(state=>state.setShowOptionDiv);
  const templatesBlock = useAppSelector(state=>state.templateSlice);
  
  const dispatch = useAppDispatch()
  const setOption = () =>{
    dispatch(setStyles({
      currentLeft:-600,
      currentTop:-600
    }))
    dispatch(setShowOptionDiv(!show))
  }

  
  return (
    <>
      {templatesBlock.show && <Templates openModal={openModal}/>}
      <UserSection />
       <ModalBlock openModal={openModal} showModal={showModal} />
       <TaskSettings openModal={openModal} taskName="TaskName" />  
       <div  onClick={setOption} className={classNames(style.settings,{
          [style.settingsIsNone]:show
       })}></div>
        <Header />
        <Content openModal={openModal}/>
    </>
  )
}
export default Home
