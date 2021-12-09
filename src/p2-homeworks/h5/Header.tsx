import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './pages/NavLink.module.css'

function Header() {
    return (
        <div className={s.header}>
            <div><NavLink to={'/'} className={({isActive})=>isActive?`${s.navLink} ${s.activeNavLink}`:`${s.navLink}` }>Pre Junior</NavLink></div>
            <div><NavLink to={PATH.Junior} className={({isActive})=>isActive?`${s.navLink} ${s.activeNavLink}`:`${s.navLink}` }>Junior</NavLink></div>
            <div> <NavLink to={PATH.JuniorPlus} className={({isActive})=>isActive?`${s.navLink} ${s.activeNavLink}`:`${s.navLink}` }>Junior+</NavLink></div>
            <div className={s.block}/>
        </div>

    )
}

export default Header
