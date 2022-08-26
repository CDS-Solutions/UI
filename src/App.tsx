import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import ColorGroup from './components/ColorGroup/ColorGroup';
import Input from './components/Input/Input';
import Switch from './components/Switch/Switch';

function App() {

  const [disabled, setDisabled] = useState(true)
  const [buttonValue, setButtonValue] = useState<string>('ебать')

  return (
    <div className={styles.container}>

      <ColorGroup color='green'>

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

      </ColorGroup>
      

    </div>
  );
}

export default App;
