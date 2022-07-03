import React, {MouseEvent} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'
import cn from 'classnames'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

const btnTitles: string[] = ['All', 'High', 'Middle', 'Low']

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const onSetFilter = (e: MouseEvent<HTMLButtonElement>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    return (
        <div className={styles.wrapper}>
            {btnTitles.map(title => (
                <button className={cn(styles.btnGreen, {
                    [styles.btnActive]: title.toLowerCase() === props.filter
                })} onClick={onSetFilter} key={title} value={title.toLowerCase()}>{title}</button>)
            )
            }
            {mappedAffairs.length ? mappedAffairs : <h2>Тасок нет</h2>}
        </div>
    )
}

export default Affairs
