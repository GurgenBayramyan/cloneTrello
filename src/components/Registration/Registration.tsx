import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegistr } from "schemas";
import { IRegistration } from "./RegistrationTypes";
import { postRegistration } from "services/autication";
import { ToastContainer, ToastOptions, toast} from "react-toastify";
import style from "./Registration.module.scss";
import {toastDefaultValue } from "helpers";
import classNames from "classnames";
import { IErrorObjectForAlert, RespStatus } from "types";

const Registration = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<IRegistration>({
    resolver: yupResolver(schemaRegistr),
  });
  const {repeatPassword,password} = watch();
  const iscoincide = repeatPassword === password && password !== "" && repeatPassword !== "" ;

  const onSubmit: SubmitHandler<IRegistration> = async(data) => {
    const resp = await postRegistration(data);
    if(resp.statusText === RespStatus.request){
      navigate("/login")
      toast.success(resp.data,toastDefaultValue() as ToastOptions<{}>)  
    }else{
      toast.error(resp.response.data,{...toastDefaultValue() as ToastOptions<{}> ,position:"top-center"})
    }
    
    
  };

  const onerror:SubmitErrorHandler<IRegistration> = (errors) =>{

    toast.error(
      <div>
        {Object.keys(errors).map((item, index) => {
          return (
            <div className={style.errorMess} key={item}>
                <span className={style.spanOne}>{index+1}--{item} is </span>
                <span>{errors[item as keyof typeof errors]?.message}</span>
                <hr />
            </div>
          )
        })}
      </div>,{
        ...toastDefaultValue() as ToastOptions<{}> ,position:"top-left"
      }
    )
  }
  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit(onSubmit, onerror)}>
        <h2>Hello friend!</h2>
        <div className={style.blockInput}>
          <input
            className={classNames(style.input,{
              [style.redBorder]:errors.firstname?.message
            })}
            type="text"
            placeholder="firstName"
            {...register("firstname")}
          />
          <span>{errors.firstname?.message}</span>
        </div>
        <div className={style.blockInput}>
          <input
            className={classNames(style.input,{
              [style.redBorder]:errors.lastname?.message
            })}
            type="text"
            placeholder="lastName"
            {...register("lastname")}
          />
          <span>{errors.lastname?.message}</span>
        </div>

        <div className={style.optionBlock}>
          <label htmlFor="gender">Choose a gender</label>
          <select id="gender" defaultValue="" {...register("genders")}>
            <option value="" disabled>
              select gender
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <span>{errors.genders?.message}</span>
        </div>
        <div className={style.blockInput}>
        <input
          className={classNames(style.input,{
            [style.redBorder]:errors.email?.message
          })}
          type="text"
          placeholder="email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
        </div>

        <div className={style.blockInput}>
        <input
          className={classNames(style.input,{
            [style.redBorder]:errors.age?.message
          })}
          type="date"
          placeholder="age"
          {...register("age")}
        />
        <span>{errors.age?.message}</span>
        </div>
        
        <div className={style.blockInput}>
        <input
          className={classNames(style.input,{
            [style.redBorder]:errors.password?.message
          })}
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
        </div>
        <div className={style.blockInput}>
        <input
          className={classNames(style.input,{
            [style.redBorder]:errors.repeatPassword?.message,
            
          })}
          type="password"
          placeholder="repeat password"
          {...register("repeatPassword")}
        />
        <span>{errors.repeatPassword?.message}</span>
        </div>
      
        <button type="submit" className={style.btn}>
          Registration
        </button>
        <NavLink to="/login">go to login page</NavLink>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Registration;
