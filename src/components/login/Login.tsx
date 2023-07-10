import React from "react";
import style from "./Login.module.scss";
import Input from "../Input";
import { NavLink } from "react-router-dom";

const Login =()=> {
  return (
      <div className={style.loginPage}>
        
        <form>
          <h2>login</h2>
          <input className={style.input} type="text" placeholder="email" />
          <input className={style.input} type="password" placeholder="password" />
          <button type="submit" className={style.btn}>logIn</button>
          <NavLink to='/registration'>go to registration page</NavLink>
        </form>
      </div>
  );
}
export default Login
