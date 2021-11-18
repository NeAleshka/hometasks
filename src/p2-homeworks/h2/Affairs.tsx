import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styleClass from  './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter:(filter:FilterType)=>void
    deleteAffairCallback: (_id: number)=> void
}

function Affairs(props: AffairsPropsType) {
    debugger
    const mappedAffairs = props.data.map((a) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}
            <button className={styleClass.button} onClick={setAll}>All</button>
            <button className={styleClass.button} onClick={setHigh}>High</button>
            <button className={styleClass.button} onClick={setMiddle}>Middle</button>
            <button className={styleClass.button} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
