import React, { FC } from 'react'
import styles from './CheckBox.module.css'
import icon from './check-solid.svg'
import styled from 'styled-components'


type CheckBoxProps = {
    color?: string,
    disabled?:boolean
}

const CheckBox:FC<CheckBoxProps> = ({color, disabled}) => {
    const ColoredSpan = styled.span`
        --color-bg: ${color};
    `

    return (
    <div className={styles.container}>
        <input disabled={disabled} className={styles.checkbox} type="checkbox" name="" id="" />
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path stroke="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />  fill: currentColor stroke: currentColor  </svg>
        <ColoredSpan  className={styles.mark}></ColoredSpan>
    </div>
    )
}

CheckBox.defaultProps = {
    disabled:false
}

export default CheckBox