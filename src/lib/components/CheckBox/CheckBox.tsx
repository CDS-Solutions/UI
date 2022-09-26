import React, { FC, useState } from 'react'
import styles from './CheckBox.module.css'

type CheckBoxProps = {
    color?: string,
    disabled?:boolean,
    width?: number,
    height?: number,
    label?:string
}

const CheckBox:FC<CheckBoxProps> = ({width, height, color, label}) => {

    const [isActive, setIsActive] = useState<boolean>(false)

    return (
       <div className={styles.container}>
            <div 
                style={{
                    width:`${width}px`,
                    height:`${height}px`,
                    backgroundColor: isActive ? color : '#d4d4d4'
                }}
                className={ `${styles.checkbox} ${isActive && styles.active} `}
                onClick={() => setIsActive(!isActive)}
            >

                <svg style={{
                    fill: isActive ? 'white' : color,
                    opacity: isActive ? 1 : 0.5
                }} 
                    className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                    <path stroke="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /> 
                    fill: currentColor stroke: currentColor

                </svg>
            </div>

            {label && (<label  onClick={() => setIsActive(!isActive)} >{label}</label>)}
            
       </div>
    )
}

CheckBox.defaultProps = {
    disabled:false,
    width:20,
    height:20,
}

export default CheckBox