import React, { useEffect } from 'react'
import Header from '../Header'
import Content from '../Content'
import Cookies from 'js-cookie'
import { Navigate, useNavigate } from 'react-router-dom'


const Home = ()=> { 
  return (
    <>
        <Header />
        <Content />
    </>
  )
}
export default Home
