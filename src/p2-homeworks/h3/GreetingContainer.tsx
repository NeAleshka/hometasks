import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name:string)=>void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string| null>(null)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if(e.currentTarget.value.trim() && error){
            debugger
           setError('')
        }
        debugger
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        debugger
        if (!name.trim()){
            setError('Error')
        return
        }
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName('')
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
