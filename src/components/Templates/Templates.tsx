import Task from "components/Task/Task";
import { FC, useEffect, useRef } from "react";
import { ITemplateProps } from "./TemplatesTypes";
import style from "./Templates.module.scss";

const Templates:FC<ITemplateProps> = ({openModal,onClose}) => {
 
  const divRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if(onClose) {
      onClose()
    }
  }

  useEffect(()=>{
    const div = divRef.current!
    div.scrollIntoView({
      block: 'center',
      inline: 'center'
    })
  },[])

  return (
  <div ref={divRef} tabIndex={0} onBlur={handleClose} className={style.templates}>
    <div className={style.templates_header}>
      <p>Card Templates</p>
      <span onClick={onClose} >x</span>
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
