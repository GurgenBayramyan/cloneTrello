import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import style from "./Templates.module.scss";
import { close } from "store/slices/templatesSlice/templatesSlice";
import Task from "components/Task/Task";
import { FC, useEffect, useRef, useState } from "react";
import { ITemplateProps } from "./TemplatesTypes";
import { getTemplateMenuState } from "helpers";

const Templates:FC<ITemplateProps> = ({openModal}) => {
  const dispatch = useAppDispatch();
  const divRef = useRef<HTMLDivElement>(null)
  const [position,setPosition] = useState({
    top:0,
    left:0
  })
  const templatesBlock = useAppSelector(state=>state.templateSlice);
  console.log(templatesBlock.top)
  // useEffect(()=>{
  //   const { top, height, width, left } = divRef.current!.getBoundingClientRect();
 

  //   setPosition(prevState => {
  //     return {
  //       ...prevState,
  //       ...getTemplateMenuStatePosition(templatesBlock.top!, height, width, templatesBlock.left!)
  //     }
  //   })
  // },[])

  const handleClose = () => {
      dispatch(close())
  }

  console.log("hiii")
  return (
    <div ref={divRef} style={{top:`${position.top}px`,left:`${position.left}px`}} tabIndex={0} onBlur={handleClose} className={style.templates}>
      <div className={style.templates_header}>
        <p>Card Templates</p>
        <span onClick={handleClose} >x</span>
      </div>
      <Task openModal={openModal} />
      <Task openModal={openModal} />
      <Task openModal={openModal} />
      <div className={style.parentBlock}>
        <div className={style.newTemplate}>
          <span>+ Create a new Template</span>
        </div>
        <div className={style.editeTemplates}>
          <span>Edit templates</span>
        </div>
      </div>
    </div>
  );
};

export default Templates;
