import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PhotoSizeSelectSmallIcon from '@mui/icons-material/PhotoSizeSelectSmall';
import { FC, MouseEvent, useState } from 'react';
import { ICreateProps, IFormState } from './CreateContentTypes';
import {SubmitHandler, useForm } from "react-hook-form";
import style from './CreateContent.module.scss'
const CreateContent:FC<ICreateProps> = ({onClose}) => {
    const [content, setContent] = useState(true);
    const [classNameBlock,setClassNameBlock] = useState<string>("");
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<{ boardTitle: string }>({
      mode: "onTouched"
    });
    const onSubmit:SubmitHandler<IFormState> = (data) => {
        console.log(data)
    }
    const handleAddBackgraund = (e: React.MouseEvent<HTMLDivElement>) => {
      setClassNameBlock(e.currentTarget.className);
  };
    const handleClick = () => {
        setContent(!content)
    }
    const stopProp = (e:MouseEvent)=> e.stopPropagation()
    return content ? (
      <div  onClick={stopProp} className={style.creatBoardParent}>
        <div onClick={handleClick} className={style.createBoard}>
          <div className={style.iconsBlock}>
            <ViewTimelineIcon sx={{ fontSize: "15px" }} />
            <p>Create board</p>
          </div>
          <span>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </span>
        </div>
        <div className={style.createBoard}>
          <div className={style.iconsBlock}>
            <PhotoSizeSelectSmallIcon sx={{ fontSize: "15px" }} />
            <p>Start with a template</p>
          </div>
          <span>Get started faster with a board template.</span>
        </div>
        <div className={style.createBoard}>
          <div className={style.iconsBlock}>
            <PeopleAltIcon sx={{ fontSize: "15px" }} />
            <p>Create Workspace</p>
          </div>
          <span>
            A Workspace is a group of boards and people. Use it to organize your
            company, side hustle, family, or friends.
          </span>
        </div>
      </div>
    ) : (
      <div onClick={stopProp} className={style.creatBoardParentTwo}>
        <div className={style.creatBoardParentTwo_header}>
          <div onClick={handleClick} className={style.rightIcon}>
            <span className={style.left}>{"<"}</span>
          </div>
          <span className={style.boardTitle}>Create board</span>
          <div onClick={onClose} className={style.rightIcon}>
            <span>x</span>
          </div>
        </div>
        <div  className={`${style.backgraundImg} ${classNameBlock}` }>
            <div className={style.childBackgraundImg}>
                <img src="https://trello.com/assets/14cda5dc635d1f13bc48.svg" alt="" />
            </div>
        </div>
        <h5>Background</h5>
        <div className={style.backgraunds}>
            <div className={style.backgraunds_top} >
                <div onClick={handleAddBackgraund}  className={style.selecBackgraundOne} title='Custom img'></div>
                <div onClick={handleAddBackgraund} className={style.selecBackgraundTwo} title='Custom img'></div>
                <div onClick={handleAddBackgraund} className={style.selecBackgraundTree} title='Custom img'></div>
                <div  onClick={handleAddBackgraund}  className={style.selecBackgraundFor} title='Custom img'></div>
            </div>
            <div className={style.backgraunds_down} >
              <div onClick={handleAddBackgraund} className={style.selectBackgraundDownA} title='❄️' ></div>
              <div onClick={handleAddBackgraund} className={style.selectBackgraundDownB} title='🌊'></div>
              <div onClick={handleAddBackgraund} className={style.selectBackgraundDownC} title='🔮'></div>
              <div onClick={handleAddBackgraund} className={style.selectBackgraundDownD} title='🌈' ></div>
              <div onClick={handleAddBackgraund} className={style.selectBackgraundDownE} title='🍑' ></div>
              <div className={style.selectBackgraundDownF} >
                  <span>...</span>
              </div>
            </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.labelBlock}>
              <label htmlFor="boardTitle">Board Title <span>*</span></label>
              <input autoFocus  type="text" id='boardTitle' {...register("boardTitle",{required:"👋  Board title is required"})} />
              <p>{errors.boardTitle?.message}</p>
          </div>
            
           <div className={style.selectBlock}>
              <label>Visability</label>
              <div  className={style.select}>
                  <span>Workspace</span>
                  <div className={style.iconBlock}>
                      <KeyboardArrowDownIcon />
                  </div>
              </div>
           </div> 
           <div className={style.btns}>
                <button  className={style.createBtn} type='submit'>Create</button>
                <button className={style.templateBtn}>Start with a template</button>
           </div>
           <div className={style.paragBlock}>
              <p>By using  images from  Unsplash, you agree to their <span>license</span> and <span>Terms of Service</span></p>
           </div>
        </form>
        
      </div>
    );
}

export default CreateContent