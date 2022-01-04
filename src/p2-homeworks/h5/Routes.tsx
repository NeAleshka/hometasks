import React from 'react'
import {Routes, Route} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    Junior:'/junior',
    JuniorPlus:'/junior+'
}

function RoutesPage() {

    return (
        <div>
            <Routes>
                    <Route path={'/'} element={<PreJunior/>}/>
                    <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                    <Route path={PATH.Junior} element={<Junior/>}/>
                    <Route path={PATH.JuniorPlus} element={<JuniorPlus/>}/>
                    <Route path={'/*'} element={<Error404/>}/>
                </Routes>
        </div>
    )
}

export default RoutesPage
