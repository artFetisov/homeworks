import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'

type AffairPropsType = {

    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priority = props.affair.priority

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>{props.affair.name}</div>
            <div className={styles.itemPriority}
                 style={{background: priority === 'middle' ? 'green' : priority === 'high' ? 'red' : 'blue'}}>{props.affair.priority}</div>
            <button className={styles.btnRed} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
