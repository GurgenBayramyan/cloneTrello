import React, { useEffect } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "./LoginTypes";
import { schemaLogin } from "schemas";
import { postLogin } from "services/autication";
import { ToastContainer, toast} from "react-toastify";
import { toastError, toastOk } from "helpers";
import style from "./Login.module.scss";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";


const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ email: string; password: string }>({
    defaultValues: {},
    resolver: yupResolver(schemaLogin),
    mode: "onChange",
  });
  const cookie = Cookies.get("token");
  
  
  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    const resp = await postLogin(data);
    if(resp.statusText === "OK"){
      const {token,message }= resp.data
        toastOk(message)
        navigate("/")
        Cookies.set("token",token)
        reset();
    }else{
      toastError(resp)
    }
    
  };

  return (
    <div className={style.loginPage}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>login </h2>
        <div className={style.inputBlock}>
          <input
            className={style.input}
            type="text"
            placeholder="email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </div>

        <div className={style.inputBlock}>
          <input
            className={style.input}
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
