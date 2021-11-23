import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styleClass from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    const buttonsName = [{name: "All", onClick:()=>props.setFilter('all')},
        {name: "High", onClick:()=>props.setFilter('high')},
        {name: "Middle",onClick:()=>props.setFilter('middle') },
        {name: "Low", onClick:()=>props.setFilter('low')},]

    const mappedButtons = buttonsName.map((bt)=>(
        <button className={styleClass.button} onClick={bt.onClick}>{bt.name}</button>
    ))
    return (
        <div>
            {mappedAffairs}
            {mappedButtons}
        </div>
    )
}

export default Affairs
