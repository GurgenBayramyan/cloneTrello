import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import style from "./BoardBackgraund.module.scss";
import { openBackMenuBlock, setClassName } from "store/slices/popupsSlice/popupSlice";
import { useEffect, useRef } from "react";
import { backgroundStateSelector } from "store/selectors";
const BoardBackgraund = () => {
  const dispatch = useAppDispatch();
  const {top,right,show} = useAppSelector(backgroundStateSelector)
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    divRef.current?.focus()
  },[show])
  const handleClose = () => {
      dispatch(openBackMenuBlock(false))
  }
  const handleBlur = (e:React.FocusEvent<HTMLDivElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if(relatedTarget?.dataset.name === "divparents"){
      return
    }
    dispatch(openBackMenuBlock(false))
  }
  const handleChangeBackgraund = (e:React.MouseEvent<HTMLDivElement>) => {
    dispatch(setClassName(e.currentTarget.className));
  }
  return (
   show ?  <div ref={divRef} data-name = "UI" onBlur={handleBlur} tabIndex={0} style={{top:`${top}px`,right:`${right}px`}} className={style.boardBackgraund}>
   <div className={style.boardBackgraund_header}>
     <p>Board backgraund</p>
     <span onClick={handleClose}>x</span>
   </div>
   <div className={style.photosBlock}>
     <h5>Photos</h5>
     <div className={style.seeSection}>
       <span>See more</span>
     </div>
   </div>
   <div className={style.backgraunds}>
     <div className={style.first}>
       <div onClick={handleChangeBackgraund}  className={style.backgraund1}></div>
       <div  onClick={handleChangeBackgraund} className={style.backgraund2}></div>
       <div onClick={handleChangeBackgraund}  className={style.backgraund3}></div>
     </div>
     <div className={style.last}>
       <div onClick={handleChangeBackgraund}  className={style.backgraund4}></div>
       <div onClick={handleChangeBackgraund}  className={style.backgraund5}></div>
       <div  onClick={handleChangeBackgraund} className={style.backgraund6}> </div>
     </div>
   </div>
   <div className={style.photosBlock}>
     <h5>Colors</h5>
     <div className={style.seeSection}>
       <span>See more</span>
     </div>
   </div>
   <div className={style.backgraunds}>
     <div className={style.first}>
       <div  onClick={handleChangeBackgraund} className={style.backgraund9}></div>
       <div  onClick={handleChangeBackgraund} className={style.backgraund10}></div>
       <div  onClick={handleChangeBackgraund} className={style.backgraund11}></div>
     </div>
     <div className={style.last}>
       <div onClick={handleChangeBackgraund}  className={style.backgraund12}></div>
       <div  onClick={handleChangeBackgraund} className={style.backgraund13}></div>
       <div onClick={handleChangeBackgraund}  className={style.backgraund14}> </div>
     </div>
   </div>
 </div>:null
  );
};

export default BoardBackgraund;
