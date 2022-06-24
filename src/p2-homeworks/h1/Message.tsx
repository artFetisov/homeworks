import React, {FC} from 'react'
import styles from './Message.module.css'

interface IMessageProps {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: FC<IMessageProps> = ({avatar, name, message, time}) => {
    return (
        <div className={styles.message}>
            <img src={avatar} className={styles.avatar}/>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <span className={styles.textMessage}>{message}</span>
                <span className={styles.time}>{time}</span>
            </div>
        </div>
    )
}

export default Message

