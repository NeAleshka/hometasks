import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";

const style={
    display: "inline-block",
    color:"white",
    width:'126px',
    margin:'20px auto',
}

function App() {
    return (
        <div className={s.App}>
            <div style={style}>react homeworks:</div>
            <HW5/>
        </div>
    )
}

export default App
