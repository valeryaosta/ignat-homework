import React from "react";
import s from "./HW12.module.css";
import {useSelector, useDispatch} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'dark-text', 'red-text', 'some-text'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.color)
    const action = useDispatch()

    const onChangeCallback = (color: string) => {
        action(changeThemeC(color))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*SuperSelect or SuperRadio*/}
            <SuperSelect title={'Colors'} options={themes} onChangeOption={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
