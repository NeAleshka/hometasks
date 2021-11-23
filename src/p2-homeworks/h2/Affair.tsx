import React from 'react'
import {AffairType} from "./HW2";
import styleClass from './Affair.module.css'

export type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number)=> void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    return (
        <div className={styleClass.affair} key={props.affair._id}>
         <div  className={styleClass.name}>{props.affair.name}</div>
            <div className={styleClass.priority}>{props.affair.priority}</div>
            <button className={styleClass.button} onClick={deleteCallback}>X</button>
        </div>
    )
}
export default Affair
