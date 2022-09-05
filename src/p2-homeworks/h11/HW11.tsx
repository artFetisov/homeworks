import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import styles from './HW11.module.css';

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    function onChangeValues(numbers: number[]) {
        setValue1(numbers[0])
        setValue2(numbers[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={styles.wrap}>
                <SuperRange
                    value={value1}
                    className={styles.customRange}
                    onChangeRange={setValue1}
                />
                <span className={styles.span}>{value1}</span>
            </div>

            <div className={styles.wrap}>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeValues}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
