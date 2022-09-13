import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import CheckBox from './components/CheckBox/CheckBox';
import ColorGroup from './components/ColorGroup/ColorGroup';
import Grid from './components/Grid/Grid';
import Input from './components/Input/Input';
import Switch from './components/Switch/Switch';
// import TransferList from './components/TransferList/TransferList';

function App() {

  const [disabled, setDisabled] = useState(true)
  const [buttonValue, setButtonValue] = useState<string>('ебать')
  const [countColumns, setCountColumns] = useState<number>(2)
  const [orientation, setOrientation] = useState<string>('row')
  
  // const secondArray  = ['первый элемент', 'ваыаыва','ываывацуауа']
  // const firstArray  = ['первый элемент', 'ваыаыва','ываывацуауа']


  return (
    <div className={styles.container}>
      <Grid tcolumns={1}>
        
        <Grid tcolumns={1}>
          <ButtonGroup
            gap={5}
            orientation={orientation}
            varianted="conteined"
            disabled={disabled}
          >
            
            <Button>
              "VALUE"
            </Button>
            <Button>
              "VALUE"
            </Button>
            <Button>
              "VALUE"
            </Button>
            <Button>
              "VALUE"
            </Button>

          </ButtonGroup>
        </Grid>

        <ButtonGroup gap={5} >
              <Button
                onClick={()=> setOrientation('column')}
              >
                Col
              </Button>
              <Button
                onClick={()=> setOrientation('row')}

              >
                Row
              </Button>
        </ButtonGroup>
      </Grid>

       <Grid tcolumns={3}>
          <Button 
            disabled={disabled}
            varianted="outlined"
            onClick={()=> setCountColumns(1)}
          >
            1
          </Button>
          <Button 
            disabled={disabled}
            varianted="outlined"
            onClick={()=> setCountColumns(2)}
          >
            2
          </Button>
          <Button 
            disabled={disabled}
            varianted="outlined"
            onClick={()=> setCountColumns(3)}
          >
            3
          </Button>
       </Grid>

      <Grid shadow='m' tcolumns={countColumns}>
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
      </Grid>

      
      

    </div>
  );
}

export default App;
