import React, {ChangeEvent, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

const EDITABLE_SPAN_VALUE = 'editable-span-value'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>(EDITABLE_SPAN_VALUE, value)
    }
    const restore = () => {
        const state = restoreState<string>(EDITABLE_SPAN_VALUE, '')
        setValue(state)
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div style={{marginLeft: '20px'}}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
