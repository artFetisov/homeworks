import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Slider, styled } from '@mui/material'
import styles from './SuperRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SelectedPropsType = Pick<DefaultInputPropsType, 'type' | 'onChange' | 'className'>

type SuperRangePropsType = SelectedPropsType & {
  onChangeRange?: (newValue: number) => void
  value: number
}

export const PrettoSlider = styled(Slider)({
  color: ' #01CB22',
  height: 8,
  width: 250,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
})

const SuperRange: React.FC<SuperRangePropsType> = ({ type, onChange, onChangeRange, value, className, ...restProps }) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    onChangeRange && onChangeRange(newValue as number)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.value}>{value}</span>
        <PrettoSlider getAriaLabel={() => 'Temperature range'} value={value} onChange={handleChange} />
      </div>
    </>
  )
}

export default SuperRange
