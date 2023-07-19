import Header from '../Header'
import Content from '../Content'
import style from './Home.module.scss'
import classNames from 'classnames'
import { useAppDispatch, useAppSelector } from 'hooks/changDispatchSekector'
import { setShowOptionDiv } from 'store/slices/showOptiondivSlice/showOptionDivSlice'
import TaskSettings from 'components/TaskSettings/TaskSettings'


const Home = ()=> { 
  const {show} = useAppSelector(state=>state.setShowOptionDiv);
  const dispatch = useAppDispatch()
  const setOption = () =>{
    dispatch(setShowOptionDiv(!show))
  }
  return (
    <>
       <TaskSettings taskName="TaskName" />  
       <div  onClick={setOption} className={classNames(style.settings,{
          [style.settingsIsNone]:show
       })}></div>
        <Header />
        <Content />
    </>
  )
}
export default Home
