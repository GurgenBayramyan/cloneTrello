import React from 'react'
import style from './Registration.module.scss'
import Input from '../Input/Input'

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

                {/* <Input  placholder='firstname'/>
                <Input  placholder='lastName'/>
                <Input  placholder='gender'/>
                <Input  placholder='email'/>
                <Input  placholder='age'/> */}
                <button type="submit" className={style.btn}>Registration</button>
        </form>
    </div>
  )
}
export default Registration
