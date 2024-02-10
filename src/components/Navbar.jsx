import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import clsx from 'clsx'


const Navbar = () => {
  const navTheme = useSelector(state => state.theme.light)

  const changeNavbarTheme = clsx({
    "light": navTheme,
    "darkness": !navTheme

  })

  return (
    <nav  className={changeNavbarTheme} >
        <ul>
            <li className={changeNavbarTheme}>
                <NavLink to={"/form"}>R E G I S T R A T I O N</NavLink>
            </li>
            <li className={changeNavbarTheme}>
                <NavLink to={"/data-base"}>Y O U R  D A T A</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar