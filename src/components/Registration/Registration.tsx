import React from 'react'
import style from './Registration.module.scss'
import MyInput from '../Input/Input'
import Button from '../Button'
const  Registration =() => {
  return (
    <div className={style.form}>
        <form >
            <div className={style.form_block}>
                <h2>Hello friend!</h2>
                <MyInput  placholder='firstname'/>
                <MyInput  placholder='lastName'/>
                <MyInput  placholder='gender'/>
                <MyInput  placholder='email'/>
                <MyInput  placholder='age'/>
                <Button  name='Registration'/>
            </div>
            <div className={style.form_info}>
                <h2>Glad to see You!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </form>
    </div>
  )
}
export default Registration
