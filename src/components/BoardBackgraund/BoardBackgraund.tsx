import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { openBackMenuBlock } from "store/slices/popupsSlice/popupSlice";
import { useEffect, useRef } from "react";
import { backgroundStateSelector, popupsSelector } from "store/selectors";
import DoneIcon from '@mui/icons-material/Done';
import style from "./BoardBackgraund.module.scss";
import { backgraundImagesFirst, backgraundImagesFor, backgraundImagesLast, backgraundImagesTree } from "types/constants";
import { setUrl } from "store/slices/boardSlice/boardSlice";



const BoardBackgraund = () => {
  const dispatch = useAppDispatch();
  const {top,right,show} = useAppSelector(backgroundStateSelector);
  const allboards = useAppSelector(state=>state.boardSlice)
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
   show ?  <div ref={divRef} onBlur={handleBlur} tabIndex={0} style={{top:`${top}px`,right:`${right}px`}} className={style.boardBackgraund}>
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
                key={img.id}
                onClick={()=>handleChangeBackgraund(img.url)}
                style={{ backgroundImage: `url("${img.url}")` }}
              >{allboards.url === img.url && <DoneIcon fontSize="small" sx={{color:"black"}} /> }</div>
            );
          })}
     </div>
     <div className={style.last}>
     {backgraundImagesLast.map((img) => {
            return (
              <div
              key={img.id}
                onClick={()=>handleChangeBackgraund(img.url)}
                style={{ backgroundImage: `url("${img.url}")` }}
              >{allboards.url === img.url && <DoneIcon fontSize="small" sx={{color:"black"}} /> }</div>
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
                key={img.simbol}
                onClick={()=>handleChangeBackgraund(img.url)}
                style={{ backgroundImage: `url("${img.url}")` }}
                title={img.simbol}
              >{allboards.url === img.url && <DoneIcon fontSize="small" sx={{color:"black"}} /> }</div>
            );
          })}
     </div>
     <div className={style.last}>
     {backgraundImagesFor.map((img) => {
            return (
              <div
              key={img.id}
                onClick={()=>handleChangeBackgraund(img.url)}
                style={{ backgroundImage: `url("${img.url}")` }}
                title={img.simbol}
              >{allboards.url === img.url && <DoneIcon fontSize="small" sx={{color:"black"}} /> }</div>
            );
          })}
     </div>
   </div>
 </div>:null
  );
};

export default BoardBackgraund;
