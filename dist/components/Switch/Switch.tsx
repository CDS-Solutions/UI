import React, { FC, useState } from 'react'
import styles from './Switch.module.css'


type SwitchProps = {
    onChange?: (isActive: boolean) => void,
    color?:string
}

const Switch:FC<SwitchProps> = ({onChange, color}) => {

    const [isActive, setIsActive] = useState<boolean>(false)

    const handleClick = () =>{
        setIsActive(!isActive)
        onChange && onChange(isActive)
    }

    return (
        <button
            className={`${styles.container} ${isActive ? styles.active : ''}`}
            onClick={handleClick}
            style={{backgroundColor: color}}
            >
            <div ></div>
        </button>
  )
}

export default Switch