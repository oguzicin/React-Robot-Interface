import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Voltage', 'Current'];

export default function ControllableStates() {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      
      
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 140  }}
        renderInput={(params) => <TextField {...params}  />}
      />
    </div>
  );
}
// <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
//<div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
