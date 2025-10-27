import React, { useState } from 'react';
import { MuiColorInput } from 'mui-color-input';

export default function ColorPicker()
{
    
    const [color, setColor] = useState('#187BCD');
    const handleChange = (newColor:any) =>  { setColor(newColor); }; // 型注釈は省略しました

    // PopoverPropsを定義し、ColorPickerに渡す
    const PopoverProps = {
        disableScrollLock: true, // Popoverが開いた際、bodyのスクロールロックを無効化
    };

    return ( 
        <MuiColorInput 
            label="Choose Color" 
            value={color} 
            onChange={handleChange}
            PopoverProps={PopoverProps} // ★ ここで適用 ★
        /> 
    );
    
}
