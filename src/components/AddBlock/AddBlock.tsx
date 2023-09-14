import { useAppDispatch } from "hooks/changDispatchSekector";
import { FocusEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { createListAction } from "store/actionTypes";
import style from "./AddBlock.module.scss";
import { CircularProgress } from "@mui/material";
const AddBlock = () => {
  const { id } = useParams();
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ fieldName: string }>({
    mode: "onSubmit",
  });
  const changeLoading = () =>{
    setLoading((prev)=> !prev)
  }
  const onSubmit: SubmitHandler<{ fieldName: string }> = async (data) => {
    dispatch(createListAction({ id: id!, fieldName: data.fieldName,changeLoading, }));
    reset();
  };
  const handleChangeActive = () => {
    setActive((prev) => !prev);
  };
  const handleBlur = (e: FocusEvent<HTMLElement>) => {
    if (e.relatedTarget) {
      return;
    }
    setActive((prev) => !prev);
    reset();
  };

  return loading ? (
    <div className={style.loading}>
      <CircularProgress color="success" />
    </div>
  ) : active ? (
    <form
      onBlur={handleBlur}
      tabIndex={0}
      onSubmit={handleSubmit(onSubmit)}
      className={style.formListAdd}
    >
      <input
        autoFocus={true}
        type="text"
        {...register("fieldName", {
          required: true,
        })}
      />
      <div className={style.columnBlock}>
        <input data-name="sb" type="submit" value="add List" />
        <span onClick={handleChangeActive}>X</span>
      </div>
    </form>
  ) : (
    <div onClick={handleChangeActive} className={style.addBlock}>
      <span>+</span>
      <span>Add another list</span>
    </div>
  );
};

export default AddBlock;
