# CDS-Solutions UI

#### Full list of the components : 
- Button - has a value, color, and callback props
- ButtonGroup - a container that can combine multiple buttons
- CheckBox - has a value, color, and callback props
- ColorGroup- a container that can add color value to all components in that container
- Grid - simple layout presets
- Input - text input, has a value and callback props
- SplitButton - button with multiple options of values
- Switch - input that has a two states, on and off
- PieChart - displays a pie chart, accepts a list of objects
- TransferList (soon)

## Apperance

<img src="https://i.ibb.co/ZGp94Bf/image.png" width="300" height="350" /> | <img src="https://i.ibb.co/1dbxWrY/image.png" width="300" height="350" /> | 
<img src="https://i.ibb.co/qJN05xd/image.png" width="300" height="200" />


## Code example

`
	 
	 <ColorGroup color={color}>
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
            <b>asdasd</b>
          </Button>

          <Switch onChange={setDisabled}/>

          <CheckBox label={buttonValue} disabled={disabled}/>

          <SplitButton
            onClick={(value) => console.log(value)}
            variables={['First', 'Second', 'Third']}
          />
		  
        </ColorGroup>
`
