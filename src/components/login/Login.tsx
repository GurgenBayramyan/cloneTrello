import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "./LoginTypes";
import { schemaLogin } from "schemas";
import { postLogin } from "services/autication";
import { ToastContainer, ToastOptions, toast} from "react-toastify";
import { toastDefaultValue,  toastOk } from "helpers";
import style from "./Login.module.scss";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import classNames from "classnames";
import { RespStatus } from "types";
import { IRegistration } from "components/Registration/RegistrationTypes";


const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ email: string; password: string }>({
    resolver: yupResolver(schemaLogin),
    mode: "onSubmit",
  });
  const cookie = Cookies.get("token");
  
  
  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    const resp = await postLogin(data);
    if(resp.statusText === RespStatus.request){
      const {token,message }= resp.data
      toast.success(message,toastDefaultValue() as ToastOptions<{}>)  
        navigate("/")
        Cookies.set("token",token)
        reset();
    }else{
      toast.error(resp.response.data,{...toastDefaultValue() as ToastOptions<{}> ,position:"top-center"})
    }
    
  };
  const onerror:SubmitErrorHandler<IRegistration> = (e) =>{
    // errorAlertFunction(e)
}
  return (
    <div className={style.loginPage}>
      <form onSubmit={handleSubmit(onSubmit,onerror)}>
        <h2>login </h2>
        <div className={style.inputBlock}>
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

        <div className={style.inputBlock}>
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
        <button type="submit" className={style.btn}>
          logIn
        </button>
        <NavLink to="/registration">go to registration page</NavLink>
      </form>
      <ToastContainer
        position="top-center"
        />
    </div>
  );
};
export default Login;
