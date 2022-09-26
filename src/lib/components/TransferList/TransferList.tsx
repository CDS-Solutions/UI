import React, { FC,} from 'react'
// import TransferItem from './TransferItem'
import styles from './TransferList.module.css'


type TransferListProps = {
  firstArray: Array<string>
  secondArray: Array<string>
}

const TransferList:FC<TransferListProps> = ({firstArray, secondArray}) => {

  // const [arrayFirst, setArrayFirst] = useState(firstArray)
  // const [arraySecond, setArraySecond] = useState(secondArray)

  return (

    

    <div className={styles.container}>
      {/* <div
      className={styles.transferList}
      
      >
        {arrayFirst.map((e: string) =>{
            return <TransferItem  name={e}/>
          })
        }
        
      </div>
      <div className={styles.transferList}>
        {arraySecond.map((e: string) =>{
            return <TransferItem name={e}/>
          })}
      </div> */}
    </div>
  )
}

export default TransferList