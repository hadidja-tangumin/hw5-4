import React from 'react'
import { Outlet } from 'react-router'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { themeAction } from '../store/themeAction'
import "../pages/Theme.css"


const Layout = () => {
  const dispatch = useDispatch()
  const isTheme = useSelector(state => state.theme.light)

  const changeTheme = clsx({
    "natural": isTheme,
    "light": isTheme,
    "darkness": !isTheme
  })

  const toggleTheme = () => {
    dispatch(themeAction())
  }

    return (
    <div>
      <button onClick={toggleTheme} className={`${changeTheme} themeBtn`}>{isTheme ? "🌕" : "🌒"}</button>
      <Outlet/>
      <footer>
          <h3 className="love">31.01.24</h3>
      </footer>
    </div>
  )
}

export default Layout