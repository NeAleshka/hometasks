import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void
    addUser: ()=>void
    error: string| null
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : ''

    return (
        <div>
            <input value={name} placeholder={'Enter Name'} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>{error}</div>
        </div>
    )
}

export default Greeting
