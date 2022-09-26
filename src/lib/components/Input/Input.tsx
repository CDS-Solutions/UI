import React, { FC } from 'react'
import styles from './Input.module.css'

type InputProps = {
    type?: string,
    color?: string,
    width?: string,
    height?: string,
    disabled?: boolean,
    onChange?: (e: any) => void
}

const Input:FC<InputProps> = ({type, color, width, height, disabled, onChange}) => {
  return (
    <input
        className={styles.container}
        type={type}
        height={height}
        disabled={disabled}
        onChange={onChange}
        style={{border:`2px solid ${color}`, width, height}}
    />
  )
}

Input.defaultProps = {
    color:"#3c403a",
    width:"150px",
    height:"20px",
    disabled: false
}

export default Input