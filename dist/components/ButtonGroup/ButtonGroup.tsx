import React, { FC } from 'react'

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
    disabled?: boolean,
    color?: string,
    width?:string,
    height?:string,
    gap?: number

}

const ButtonGroup:FC<ColorGroupProps> = ({varianted, gap, disabled, width, color, orientation, children}) => {

    
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
                        disabled: disabled
                    })
            })}
        </div>
    )
}

ButtonGroup.defaultProps={
    varianted: variantedEnum.contained
}

export default ButtonGroup