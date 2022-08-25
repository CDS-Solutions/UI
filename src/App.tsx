import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import ColorGroup from './components/ColorGroup/ColorGroup';
import Switch from './components/Switch/Switch';

function App() {

  const [disabled, setDisabled] = useState(false)

  return (
    <div className={styles.container}>

      <ColorGroup color='green'>

        <Button 
          disabled={disabled}
          varianted="contained"
          onClick={() => console.log(1)}
        >
          ебать
        </Button>

        <Button 
          disabled={disabled}
          varianted="outlined"
          onClick={() => console.log(1)}
        >
          ебать
        </Button>

        <Button 
          disabled={disabled}
          varianted="text"
          onClick={() => console.log(1)}
        >
          ебать
        </Button>


        <Switch onChange={setDisabled}/>

      </ColorGroup>
      

    </div>
  );
}

export default App;
