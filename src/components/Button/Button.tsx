import React, { FC } from 'react'
import styles from './Button.module.css'


export enum variantedEnum{
    text = "text",
    contained = "contained",
    outlined = "outlined"
}

type ButtonPropsT = {
    varianted?: variantedEnum | string,
    children?: React.ReactNode,
    disabled?: boolean,
    color?: string,
    onClick?: () => void
}


const Button:FC<ButtonPropsT> = ({disabled, children, varianted, color, onClick}) => {

    const variantedStyle = () =>{
        switch (varianted) {
            case variantedEnum.text:
                return {
                    backgroundColor: "white",
                    color: color,
                    border:'none'
                }
            case variantedEnum.contained:
                return {
                    backgroundColor: color,
                    color: "white",
                    border: `2px solid ${color}`,
                    
                }
            case variantedEnum.outlined:
                return {
                    backgroundColor: "white",
                    color: color,
                    border: `2px solid ${color}`,
                }
            default:
                break;
        }
    }

    return (
        <button 
            style={variantedStyle()}
            className={styles.container}
            disabled={disabled}
            onClick={onClick}  
        >
            {children}
        </button>
    )
}

Button.defaultProps ={
    color: '#3c403a',
    varianted: variantedEnum.contained,
    disabled: false
}
export default Button