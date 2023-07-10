import React from "react";
import style from "./Login.module.scss";
import Input from "../Input";
import Button from "../Button";

const Login =()=> {
  return (
    <>
      <div className={style.loginPage}>
        <h2>login</h2>
        <form>
          <Input placholder="email" />
          <Input placholder="password" />
          <Button name="login"></Button>
        </form>
      </div>
    </>
  );
}
export default Login
