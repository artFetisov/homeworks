import React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { PrettoSlider } from '../c7-SuperRange/SuperRange'
import styles from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
  onChangeRange: (value: number[]) => void
  value: number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({ onChangeRange, value }) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    onChangeRange(newValue as number[])
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.firstValue}>{value[0]}</div>
      <PrettoSlider getAriaLabel={() => 'Temperature range'} value={value} onChange={handleChange} />
      <div className={styles.secondValue}>{value[1]}</div>
    </div>
  )
}

export default SuperDoubleRange
