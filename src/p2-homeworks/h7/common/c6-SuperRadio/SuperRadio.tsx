import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import styles from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        checked,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChange && onChange(e)
        onChangeOption && onChangeOption(e.target.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i} className={styles.radio}>
            <input
                className={styles.input}
                type={'radio'}
                name={name}
                checked={o === value}
                value={o}
                onChange={onChangeCallback}
            />
            <span className={styles.span}>{o}</span>
        </label>
    )) : []


    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
