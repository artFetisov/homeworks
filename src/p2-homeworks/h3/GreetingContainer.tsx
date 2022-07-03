import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (error && e.currentTarget.value.trim() !== '') setError('')
        setName(e.currentTarget.value) // need to fix
    }

    const onKeyPresshandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addUser()
        }
    }

    const addUser = () => {
        if (name.trim().length > 0) {
            addUserCallback(name.trim())
            alert(`Hello  ${name.trim()}!`) // need to fix
            setName('')
            setError('')
        } else {
            setError('Введите корректное имя')
        }

    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPresshandler}
        />
    )
}

export default GreetingContainer
