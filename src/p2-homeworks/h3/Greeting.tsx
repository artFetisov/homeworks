import React, {ChangeEvent, KeyboardEvent} from 'react'
import styles from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number// need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {

    const isError = error.length > 0
    const inputClass = error.length ? styles.errorInput : ''  // need to fix with (?:)

    return (
        <div className={styles.wrapper}>
            <input
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPressHandler}
                className={inputClass}
                autoFocus={true}
            />
            <span className={styles.error}>{error ? error : ''}</span>
            <button onClick={addUser} disabled={isError} className={styles.btn}>add</button>
            <span className={styles.counter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
