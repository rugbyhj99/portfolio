import React from 'react'
import './AppLayout.style.css'
import logo from './logo.png'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <nav className="navbar">
            <div className='navbar-logo'>
                <img src={logo} alt='logo'/>
            </div>
            
        </nav>
        {/* 라우터 안에 있는 자손 가져오기 Outlet */}
        <Outlet/>
        <div className='footer'>
            <div>Copyright ⓒ 2024. HoJae All rights reserved.</div>
        </div>
    </div>
  )
}

export default AppLayout