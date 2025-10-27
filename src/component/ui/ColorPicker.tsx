
import React, { useState } from 'react';
import { MuiColorInput } from 'mui-color-input';

export default function ColorPicker()
{
    
    const [color, setColor] = useState('#187BCD');
    const handleChange = (newColor: string) =>  { setColor(newColor); };

    return ( <MuiColorInput label="Choose Color" value={color} onChange={handleChange}/> );
    
}
