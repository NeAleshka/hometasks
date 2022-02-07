import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ChangeThemeType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, ChangeThemeType>(state => state.changeTheme)
    const dispatch = useDispatch()
    const onChangeCallback = (color: string) => {
        dispatch(changeThemeAC(color))
    }


    return (
        <div className={s[theme.color]}>
            <hr/>
            <span className={s[theme.color + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperSelect
                    options={themes}
                    value={theme.color}
                    onChangeOption={onChangeCallback}
                />
            </div>
            {/*should work (должно работать)*/}

            <hr/>
        </div>
    );
}

export default HW12;
