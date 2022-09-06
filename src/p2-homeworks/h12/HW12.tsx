import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import {changeThemeAC, IThemeState, ThemeType} from "./bll/themeReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes: ThemeType[] = ['dark', 'red', 'some'];

function HW12() {
    const {theme} = useSelector<AppStoreType, IThemeState>(state => state.theme)
    const dispatch = useDispatch()

    const onChangeOption = (option: string) => {
        dispatch(changeThemeAC(option as ThemeType))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}
            />
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
