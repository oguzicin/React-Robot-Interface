import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 50,
    
  },
  
];

export default function VerticalAccessibleSlider() {
  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  return (
    <Box sx={{ height: 300 }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
          },
        }}
        orientation="vertical"
        defaultValue={50}
        aria-label="Temperature"
        valueLabelDisplay="auto"
        onKeyDown={preventHorizontalKeyboardNavigation}
        marks={marks}
        
      />
    </Box>

  );
}
