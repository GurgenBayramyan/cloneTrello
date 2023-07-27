import Header from '../Header'
import Content from '../Content'
import classNames from 'classnames'
import { useAppDispatch, useAppSelector } from 'hooks/changDispatchSekector'
import { setShowOptionDiv } from 'store/slices/showOptiondivSlice/showOptionDivSlice'
import TaskSettings from 'components/TaskSettings/TaskSettings'
import { setStyles } from 'store/slices/taskSettings/taskSettingsSlice'
import { useState } from 'react'
import ModalBlock from 'components/ModallBlock/ModalBlock'
import style from './Home.module.scss'
import UserSection from 'components/UserSection/UserSection'

const Home = ()=> { 
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal)
  }
  const {show} = useAppSelector(state=>state.setShowOptionDiv);
  
  
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
