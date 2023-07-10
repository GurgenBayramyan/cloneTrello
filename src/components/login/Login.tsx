import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SubmitHandler, useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { ILogin } from "./LoginTypes";
import { schemaLogin } from "components/schemas";
import style from "./Login.module.scss";
import { postLogin } from "components/services/autication";



const Login =()=> {
const { register, handleSubmit, formState:{ errors } } = useForm<{login:string,password:string}>({
  	defaultValues: {},
    resolver: yupResolver(schemaLogin)
  });
  
  const onSubmit:SubmitHandler<ILogin> = data => postLogin(data);
  return (
      <div className={style.loginPage}>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>login</h2>
          <input className={style.input} type="text" placeholder="email" {...register("login")}/>
          <input className={style.input} type="password" placeholder="password" {...register("password")}/>
          <button type="submit" className={style.btn}>logIn</button>
          <NavLink to='/registration'>go to registration page</NavLink>
        </form>
      </div>
  );
}
export default Login
