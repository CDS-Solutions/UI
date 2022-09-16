import { FC } from "react";

type RangeProps={
    color?: string 
    min?: number
    max?: number
    step?: number
    value?: number
}


const Range: FC<RangeProps> = ({color, min, max, step, value, ...rest}) =>{
    return(
        <input 

            type="range" 
            min={min} 
            max={max} 
            step={step} 
            value={value}
            style={{accentColor: color}} 
            {...rest} 
        />
    )
}

export default Range


