import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import styles from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <>
            <select className={styles.select} onChange={onChangeCallback} {...restProps}>
                {options?.map((o, ind) => <option value={o} key={ind + '---' + o}>{o}</option>)}
            </select>
        </>

    )
}

export default SuperSelect
