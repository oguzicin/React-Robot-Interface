import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#FFFFFF', 
    '& + .MuiSwitch-track': {
      backgroundColor: '#FFFFFF', 
    },
  },
  '& .MuiSwitch-switchBase': {
    color: '#ADD8E6', 
    '& + .MuiSwitch-track': {
      backgroundColor: '#808080', 
    },
  },
}));

export default function Switch1({ onToggle }: { onToggle: (checked: boolean) => void }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onToggle(isChecked);  
  };

  return (
    <CustomSwitch 
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'customized switch' }}
    />
  );
}
