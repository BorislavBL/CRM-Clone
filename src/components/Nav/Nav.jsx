import React from 'react'
import logo from '../../assets/images/crm-logo.png'
import {useNavigate} from "react-router-dom"

function Nav() {
  const navigate  = useNavigate()
  return (
    <nav className='nav'>
        <div className='logo-container'>
            <img className="logo" src={logo} alt="logo"/>
        </div>
        <div className='controls'>
          <div className="icon" onClick={()=> navigate('/ticket')}>+</div>
          <div className="icon" onClick={()=> navigate('/')}>{"<<"}</div>
        </div>
    </nav>
  )
}

export default Nav