import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import style from "./Templates.module.scss";
import { close } from "store/slices/templatesSlice/templatesSlice";
import Task from "components/Task/Task";
import { FC,    useRef  } from "react";
import { ITemplateProps } from "./TemplatesTypes";

const Templates:FC<ITemplateProps> = ({openModal}) => {
  const dispatch = useAppDispatch();
  const divRef = useRef<HTMLDivElement>(null)


  const handleClose = () => {
      dispatch(close())
  }

  return (
    <div  tabIndex={0} onBlur={handleClose} className={style.templates}>
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
