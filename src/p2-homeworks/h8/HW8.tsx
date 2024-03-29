import React, {useState} from 'react'
import {homeWorkReducer, SortActionCreators} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export interface IUserState {
    _id: number,
    name: string,
    age: number
}

const initialPeople: IUserState[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<IUserState[]>(initialPeople)

    const finalPeople = people.map((p: IUserState, ind: number) => (
        <div key={p._id}>
            <span>{ind + 1}. </span>
            <span>{p.name}</span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortActionCreators.sortUp()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortActionCreators.sortDown()))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, SortActionCreators.checkAge(18)))

    return (
        <div>
            <hr/>
            homeworks 8
            <div style={{marginLeft: '20px'}}>
                {finalPeople}
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={checkAge}>check 18</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
