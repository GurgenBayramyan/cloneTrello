import React from 'react'
import style from './Registration.module.scss'
import Input from '../Input/Input'
import Button from '../Button'
const  Registration =() => {
  return (
    <div className={style.form}>
        <form >
            <div className={style.form_block}>
                <h2>Hello friend!</h2>
                <Input  placholder='firstname'/>
                <Input  placholder='lastName'/>
                <Input  placholder='gender'/>
                <Input  placholder='email'/>
                <Input  placholder='age'/>
                <Button  name='Registration'/>
            </div>
            {/* <div className={style.form_info}>
                <h2>Glad to see You!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div> */}
        </form>
    </div>
  )
}
export default Registration
