import React, {ChangeEvent, createRef, KeyboardEvent, useState} from 'react'
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

    const inpRef = createRef<HTMLInputElement>()

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimedName = e.currentTarget.value.trim()

        if (trimedName) {
            setName(trimedName)
            error && setError('')
        } else {
            name && setName('')
            setError('Name is required')
        }

    }

    const onKeyPresshandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
            inpRef.current?.blur()
            setName('')
        } else {
            setError('Name is required')
        }
    }

    const addUser = () => {
        if (name) {
            addUserCallback(name.trim())
            alert(`Hello  ${name.trim()}!`) // need to fix
            setName('')
        } else setError('Name is required')


    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            ref={inpRef}
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
