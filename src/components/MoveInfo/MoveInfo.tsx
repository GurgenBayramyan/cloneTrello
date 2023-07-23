import classNames from 'classnames';
import style from './MoveInfo.module.scss'
import ForwardIcon from "@mui/icons-material/Forward";
import { useEffect, useRef, useState } from 'react';
import MoveContent from 'components/MoveContent/MoveContent';
const MoveInfo = () => {
    const [move,setMove] = useState(false);
    const [currentPos,setCurrentPos] = useState({
      currentTop:-35,
      curentLeft:0
    })
    const liRef = useRef<any>(null)
    const divRef = useRef<any>(null);

    const handleOpenMove = () => {
      setMove(!move)
    }
    const handleClose = () => {
        setMove(false)
    }

    useEffect(
      () => {
        if(divRef){
          const div = divRef.current;
          const { top, height} = div.getBoundingClientRect();
          if (top + height > window.innerHeight) {
            setCurrentPos({
              currentTop:60,
              curentLeft:190
            })
          }else{
            setCurrentPos({
              currentTop:-35,
              curentLeft:0
            })
          }
        }
        }
       ,
      [move]
    );
  return (
    <li ref={liRef} tabIndex={0} onBlur={handleClose}  onClick={handleOpenMove} className={style.moveLi}>
    <ForwardIcon sx={{ fontSize: "16px" }} />Move
    <div 
    
    style={{top:`${-currentPos.currentTop}px`,left:`${currentPos.curentLeft}px`}}
     ref={divRef}
    className={classNames(style.move,{
      [style.moveActive]:move
    })}>
        <MoveContent onClose={handleClose} />
    </div>
  </li>
  )
}

export default MoveInfo