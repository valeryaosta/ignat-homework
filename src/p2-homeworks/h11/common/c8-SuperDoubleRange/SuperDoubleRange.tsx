import React, {ChangeEvent} from 'react'
import {Slider} from "@material-ui/core";
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number] | number) => void
    value?: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({onChangeRange, value}) => {

    const onChangeHandler = (event: ChangeEvent<{}>, value: (number[] | number)) => {
        onChangeRange && onChangeRange(value as number)
    }

    return (
        <Slider value={value}
                className={s.slider}
                onChange={onChangeHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
        />
    )
}

export default SuperDoubleRange
