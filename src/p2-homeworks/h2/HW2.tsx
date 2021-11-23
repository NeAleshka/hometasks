import React, {useState} from 'react'
import Affairs from './Affairs'

export type AffairPriorityType = 'high'|'low'|'middle'
export type AffairType ={
    _id:number
    name:string
    priority:AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') return affairs
    return affairs.filter(f=>f.priority===filter)
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {return affairs.filter(f=>f._id!==_id)}
const style={
    backgroundColor: "#143891"
}
function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
    return (
        <div style={style}>
            <hr/>
            <h2>HomeTask2</h2>
            <Affairs data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}/>
        </div>
    )
}
export default HW2
