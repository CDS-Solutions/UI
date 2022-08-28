import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import CheckBox from './components/CheckBox/CheckBox';
import ColorGroup from './components/ColorGroup/ColorGroup';
import Input from './components/Input/Input';
import Switch from './components/Switch/Switch';
// import TransferList from './components/TransferList/TransferList';

function App() {

  const [disabled, setDisabled] = useState(true)
  const [buttonValue, setButtonValue] = useState<string>('ебать')
  // const secondArray  = ['первый элемент', 'ваыаыва','ываывацуауа']
  // const firstArray  = ['первый элемент', 'ваыаыва','ываывацуауа']


  return (
    <div className={styles.container}>

      <ColorGroup color='#2679ff'>

        <Button 
          disabled={disabled}
          varianted="contained"
          onClick={() => console.log(1)}
        >
          {buttonValue}
        </Button>

        <Button 
          disabled={disabled}
          varianted="outlined"
          onClick={() => console.log(1)}
        >
          {buttonValue}
        </Button>

        <Button 
          disabled={disabled}
          varianted="text"
          onClick={() => console.log(1)}
        >
          {buttonValue}
        </Button>

        <Input disabled={disabled} onChange={(e:any) => setButtonValue(e.target.value)}/>

        <Switch onChange={setDisabled}/>

        {/* <TransferList firstArray={firstArray} secondArray={secondArray}/> */}
        <CheckBox label={buttonValue} disabled={disabled}/>
      </ColorGroup>
      

    </div>
  );
}

export default App;
