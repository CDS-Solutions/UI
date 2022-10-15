import React, { FC } from 'react'
import { roundedVariant } from '../Button/Button';

type Orientation = 'row' |'column'

enum variantedEnum{
    text = "text",
    contained = "contained",
    outlined = "outlined"
}

type ColorGroupProps = {
    children:  any
    varianted?: variantedEnum | string
    orientation?: Orientation | any
    rounded?: roundedVariant | string,
    disabled?: boolean,
    color?: string,
    width?:string,
    height?:string,
    gap?: number

}

const ButtonGroup:FC<ColorGroupProps> = ({varianted, gap, disabled, rounded, width, color, orientation, children}) => {

    
    const groupStyles = () =>{
       return{
            display: "flex",
            flexDirection: orientation,
            gap: gap + 'px'
       }
    }

    return (
        <div style={{...groupStyles()}}>
            {children.map((child:any) =>{
                return  React.cloneElement(child, 
                    {   
                        varianted: varianted, 
                        width: width,
                        color: color,
                        disabled: disabled,
                        rounded: rounded
                    })
            })}
        </div>
    )
}

ButtonGroup.defaultProps={
    varianted: variantedEnum.contained
}

export default ButtonGroup