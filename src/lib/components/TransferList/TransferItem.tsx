import React, { FC, useState } from 'react'
import styles from './TransferList.module.css'


type TransferItemProps ={
  name: string
}

const TransferItem:FC<TransferItemProps> = ({name}) => {

  const [selectCopy, setSelectCopy] = useState<any>()

  const onPointerDownDiv = (event: React.PointerEvent) => {
    (event.target as HTMLDivElement).setPointerCapture(event.pointerId);
    (event.target as HTMLDivElement).classList.add(styles.select)
  };
  
  const onPointerUpDiv = (event: React.PointerEvent) => {
    (event.target as HTMLDivElement).releasePointerCapture(event.pointerId);
    (event.target as HTMLDivElement).classList.remove(styles.select)
  };

  return (
    <div 
        
      onPointerDown={onPointerDownDiv}

      onPointerUp={onPointerUpDiv}
         
   
      className={styles.item}>{name}</div>
    
  )
}

export default TransferItem