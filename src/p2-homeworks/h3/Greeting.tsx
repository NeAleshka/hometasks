import React, {ChangeEvent, useState} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
  users: UserType[]
    addUserCallback: (name: string) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {users,addUserCallback}
) => {

    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.trim() && error) {
            setError('')
        }
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        if (!name.trim()) {
            setError('Name is empty!!!')
            return
        }
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName('')
    }

    const totalUsers = users.length // need to fix

    const inputClassError = error ? s.error : ''

    return (
        <div className={s.hw3}>
            <input value={name}  placeholder={'Enter Name'} onChange={setNameCallback} className={`${inputClassError} ${s.inputName}` }/>
            <button className={`${inputClassError} ${s.buttonAdd}`}  onClick={addUser}>Add</button>
            <span className={s.totalUsers}> Number of users: {totalUsers}</span>
            <div className={s.textError}>{error}</div>
        </div>
    )
}

export default Greeting
