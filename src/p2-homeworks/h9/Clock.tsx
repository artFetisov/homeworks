import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    function getCorrectValue(value: number) {
        return value < 10 ? `0${value}` : value
    }

    function getTime(date: Date) {
        const hours = getCorrectValue(date.getHours())
        const minutes = getCorrectValue(date.getMinutes())
        const seconds = getCorrectValue(date.getSeconds())

        return `${hours}:${minutes}:${seconds}`
    }

    function getCorrectDate(date: Date) {
        const day = getCorrectValue(date.getDate())
        const month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth()
        const year = date.getFullYear()
        return `${day}.${month}.${year}`
    }

    const stringTime = date ? getTime(date) : ''
    const stringDate = date ? getCorrectDate(date) : ''

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
