import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { openBackMenuBlock, setUrl } from "store/slices/popupsSlice/popupSlice";
import { useEffect, useRef } from "react";
import { backgroundStateSelector } from "store/selectors";
import style from "./BoardBackgraund.module.scss";
import { backgraundImagesFirst, backgraundImagesFor, backgraundImagesLast, backgraundImagesTree } from "types/constants";



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
  const handleChangeBackgraund = (url:string) => {
    dispatch(setUrl(url));
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
     {backgraundImagesFirst.map((img) => {
            return (
              <div
                onClick={()=>handleChangeBackgraund(img)}
                style={{ backgroundImage: `url("${img}")` }}
              ></div>
            );
          })}
     </div>
     <div className={style.last}>
     {backgraundImagesLast.map((img) => {
            return (
              <div
                onClick={()=>handleChangeBackgraund(img)}
                style={{ backgroundImage: `url("${img}")` }}
              ></div>
            );
          })}
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
     {backgraundImagesTree.map((img) => {
            return (
              <div
                onClick={()=>handleChangeBackgraund(img.url)}
                style={{ backgroundImage: `url("${img.url}")` }}
                title={img.simbol}
              ></div>
            );
          })}
     </div>
     <div className={style.last}>
     {backgraundImagesFor.map((img) => {
            return (
              <div
                onClick={()=>handleChangeBackgraund(img.url)}
                style={{ backgroundImage: `url("${img.url}")` }}
                title={img.simbol}
              ></div>
            );
          })}
     </div>
   </div>
 </div>:null
  );
};

export default BoardBackgraund;
