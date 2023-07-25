import { ComponentType, useState } from 'react';
import style from './Openable.module.scss'

const Openable = (Component: ComponentType, propsname: any) => {
  const ReturnedComp = (props: any) => {
    const [state, setState] = useState(false);

 
    const handleOpenMembers = (event: any) => {
      console.dir(event.target.dataset.name)
      if(event.target?.dataset.name === "close" || (event.target?.dataset.name === "toggle" && state ) ) {
        setState(false)
      } else {
        setState(true)
      }

    };
    const handleClose = (event: any) => {
      setState(false)
    };




    return (
      <div onClick={handleOpenMembers} onBlur={handleClose} tabIndex={0} className={style.menu}>
        <div data-name="toggle" className={style.coostomBlock}>
          <span>{propsname}</span>
        </div>
        {state && <Component />}
      </div>
    );
  }

  return  ReturnedComp
} 
export default Openable