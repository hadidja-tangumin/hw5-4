import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../store/userActions'
import './UserForm.css'
import "../pages/Theme.css"
import clsx from 'clsx'


const UserForm = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')


  const dispatch = useDispatch()

  const onCLick = () => {
    dispatch(userAction({userNickname: userName, email: userEmail, password: userPassword}))
  }

  const noReboot = (e) => {
    e.preventDefault()
  }
  const formTheme = useSelector(state => state.theme.light)

  const changeFormTheme = clsx({
    "light": formTheme,
    "darkness": !formTheme
  })

  return (
      <div>
          <form className={`user-form ${changeFormTheme}`} onSubmit={noReboot}>
              <h1 className={changeFormTheme}>Login</h1>
            <input
              className={changeFormTheme}
              type="text" placeholder='nickname' 
              value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <input
              className={changeFormTheme}
              type="email" placeholder='gmail' 
              value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            <input 
              className={changeFormTheme}
              type="text" placeholder='password' 
              value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
            <button onClick={onCLick} className="formBtn"><span className={changeFormTheme}>save</span></button>
            <p className='under-info'>Don’t have an account yet? <p className={`registerNow ${changeFormTheme}`}>Register now!</p></p>
        </form>
    </div>
  )
}

export default UserForm