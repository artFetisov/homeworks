import React from 'react'

import {homeWorkReducer, SortActionCreators} from '../homeWorkReducer'
import {IUserState} from "../../HW8";

let initialState: IUserState[]
beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, SortActionCreators.sortUp())

    const sortedArray = initialState.sort((a, b) => a.name.localeCompare(b.name))
    const firstElement = sortedArray[0]
    const secondElement = sortedArray[1]
    const lastElement = sortedArray[sortedArray.length - 1]

    expect(newState[0]._id).toBe(firstElement._id)
    expect(newState[1]._id).toBe(secondElement._id)
    expect(newState[newState.length - 1].age).toBe(lastElement.age)
})

test('sort name down', () => {
    const newState = homeWorkReducer(initialState, SortActionCreators.sortDown())

    const sortedArray = initialState.sort((a, b) => b.name.localeCompare(a.name))
    const firstElement = sortedArray[0]
    const secondElement = sortedArray[1]
    const lastElement = sortedArray[sortedArray.length - 1]

    expect(newState[0]).toBe(firstElement)
    expect(newState[1]).toBe(secondElement)
    expect(newState[newState.length - 1]).toBe(lastElement)
})
test('check age 18', () => {
    const age = 18
    const newState = homeWorkReducer(initialState, SortActionCreators.checkAge(age))

    expect(newState.filter(i => i.age < age).length).toBe(0)
})
