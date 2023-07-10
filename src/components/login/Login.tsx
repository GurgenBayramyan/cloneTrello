import React from "react";
import { NavLink } from "react-router-dom";
import { SubmitHandler, useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { ILogin } from "./LoginTypes";
import { schemaLogin } from "schemas";
import { postLogin } from "components/services/autication";
import style from "./Login.module.scss";



const Login =()=> {
const { register, handleSubmit, formState:{ errors },reset } = useForm<{email:string,password:string}>({
  	defaultValues: {},
    resolver: yupResolver(schemaLogin),
    mode:"onChange"
  });
  const onSubmit:SubmitHandler<ILogin> = async data => {
    await postLogin(data) 
    reset()
    console.log(errors)
  };
 
 
  return (
      <div className={style.loginPage}>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>login</h2>
          <input className={style.input} type="text" placeholder="email" {...register("email")}/>
          <input className={style.input} type="password" placeholder="password" {...register("password")}/>
          <span>{errors.password?.message}</span>
          <button type="submit" className={style.btn}>logIn</button>
          <NavLink to='/registration'>go to registration page</NavLink>
        </form>
      </div>
  );
}
export default Login
