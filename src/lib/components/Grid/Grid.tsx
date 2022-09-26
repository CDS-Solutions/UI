import React, { FC } from 'react'
import styles from './grid.module.css'


enum shadowEnum{
    S = 's',
    M  = 'm',
    XL = 'xl'
}

type GridProps = {
    color?: string,
    width?:string
    shadow?: shadowEnum | string,
    children?: JSX.Element[] | JSX.Element
    tcolumns?: number
}


const Grid:FC<GridProps> = ({color, shadow, width, tcolumns, children, ...rest }) => {


    const shadowStyle = () =>{
        switch (shadow) {
            case shadowEnum.S:
                return {
                    boxShadow:'0px 4px 19px -2px rgba(34, 60, 80, 0.2)',
                    backgroundColor: color,
                    gridTemplateColumns: `repeat(${tcolumns}, 1fr)`
                }
            case shadowEnum.M:
                return {
                    boxShadow:'0px 11px 19px -2px rgba(34, 60, 80, 0.2)',
                    backgroundColor: color,
                    gridTemplateColumns: `repeat(${tcolumns}, 1fr)`
                }
            case shadowEnum.XL:
                return {
                    boxShadow:'0px 14px 19px -2px rgba(34, 60, 80, 0.2)',
                    backgroundColor: color,
                    gridTemplateColumns: `repeat(${tcolumns}, 1fr)`
                }
            default:
                break;
        }
    }



    return (
        <div
            style={{...shadowStyle(), width }}
            className={styles.conteiner}
            {...rest}
        >
            {children}
        </div>
    )
}

Grid.defaultProps = {
    color: 'white',
    shadow: shadowEnum.S
}

export default Grid