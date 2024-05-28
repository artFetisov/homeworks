import React, { useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import styles from './HW11.module.css'

function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  const handleChangeValueFirstSlider = (newValue: number) => {
    setValue1(newValue)
  }

  function handleChangeValues(numbers: number[]) {
    setValue1(numbers[0])
    setValue2(numbers[1])
  }

  return (
    <div>
      <hr />
      homeworks 11
      <div className={styles.wrap}>
        <SuperRange value={value1} className={styles.customRange} onChangeRange={handleChangeValueFirstSlider} />
      </div>
      <div className={styles.wrap}>
        <SuperDoubleRange value={[value1, value2]} onChangeRange={handleChangeValues} />
      </div>
      <hr />
      <hr />
    </div>
  )
}

export default HW11
