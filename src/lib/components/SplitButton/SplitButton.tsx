import React, { FC, useState } from 'react'
import { variantedEnum, variantedStyle } from '../Button/Button'
import styles from './SplitButton.module.css'

type SplitButtonProps = {
    color?:string,
    disabled?: boolean,
    width?:string,
    height?:string,
    variables: string[],
    varianted?: variantedEnum | string,
    onClick: (variable: string) => void
    
}

const SplitButton: FC<SplitButtonProps> = ({variables, varianted, color, onClick}) => {

    const [selectedVariable, setSelectedVariable] = useState<string>(variables[0])
    const [isShowVariables, setIsShowVariables] = useState<boolean>(false)

    let button_style = {...variantedStyle(varianted || '', color || '')}

    const handleVariable = (variable: string) =>{
        setSelectedVariable(variable)
        setIsShowVariables(false)
    }

    const item = (variable: string) =>{
        let style = variable === selectedVariable  && styles.selected 
        return (
            <div
                key={variable}
                onClick={() => handleVariable(variable)}
                className={style || ''}>
                {variable}
            </div>
        )
    }

    return (
        <div className={styles.wrap_buttons}>

            <button onClick={() => onClick(selectedVariable)} className={styles.button} style={button_style}>
                {selectedVariable}
            </button>

            <button
                onClick={() => setIsShowVariables(!isShowVariables)}
                className={styles.icon_button} style={button_style}
            >
                /\
            </button>

            <div className={`${styles.items} ${isShowVariables && styles.show}`}>
                {variables.map((variable: string) =>{
                    return item(variable) 
                })}
            </div>
        </div>
   
  )
}

SplitButton.defaultProps ={
    color: '#3c403a',
    varianted: variantedEnum.contained,
    disabled: false

}
export default SplitButton