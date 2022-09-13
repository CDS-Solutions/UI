import React, { FC } from 'react'

type ColorGroupProps = {
    children:  any,
    color: string | any
}

const ColorGroup:FC<ColorGroupProps> = ({color, children}) => {

    return (
        <>
            {children.map((child:any) =>{
                return  React.cloneElement(child, {color:color})
            })}
        </>
    )
}

export default ColorGroup