import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {ILoadingState, ToggleIsLoadingAC} from "./bll/loadingReducer";

function HW10() {
    const dispatch = useDispatch()
    const {isLoading} = useSelector<AppStoreType, ILoadingState>(state => state.loading)

    const setLoading = () => {
        dispatch(ToggleIsLoadingAC(true))
        setTimeout(() => {
            dispatch(ToggleIsLoadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
