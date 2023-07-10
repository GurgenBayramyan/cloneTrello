import React from "react";
import { IInput } from "./inputTypes";
import style from "./Input.module.scss";
const Input = ({ placholder }: IInput) => {
  return placholder === "password"
    ? <input className={style.input} type="password" placeholder={placholder} />
    : <input className={style.input} type="text" placeholder={placholder} />;
};
export default Input;
