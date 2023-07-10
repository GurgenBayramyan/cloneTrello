import React from 'react'
import style from './Registration.module.scss'
import { NavLink } from 'react-router-dom'


const  Registration =() => {
 
  return (
    <div className={style.form}>
        <form >
                <h2>Hello friend!</h2>
                <input className={style.input} type="text" placeholder="firstName" />
                <input className={style.input} type="text" placeholder="lastName" />
                <input className={style.input} type="text" placeholder="gender" />
                <input className={style.input} type="text" placeholder="email" />
                <input className={style.input} type="text" placeholder="age" />
                <input className={style.input} type="password" placeholder="password" />
                <input className={style.input} type="password" placeholder="repeat password" />
                <button type="submit" className={style.btn}>Registration</button>
                <NavLink to="/login">go to login page</NavLink>
        </form>
    </div>
  )
}
export default Registration
