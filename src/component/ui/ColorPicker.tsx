import React, { useEffect, useState } from 'react';
import { MuiColorInput } from 'mui-color-input';

// Props: this component can be used standalone, but when used inside ToolsInterface
// it will receive `path`, `setSetting`, and `currentValue` from the container wrapper.
export default function ColorPicker({ path, setSetting, currentValue, label }: any) {
    const initial = typeof currentValue === 'string' ? currentValue : '#187BCD';
    const [color, setColor] = useState<string>(initial);

    // Sync when parent currentValue changes
    useEffect(() => {
        if (typeof currentValue === 'string' && currentValue !== color) {
            setColor(currentValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValue]);

    const handleChange = (newColor: any) => {
        setColor(newColor);
        // If used within the generator, update the global settings
        try {
            if (typeof path === 'string' && typeof setSetting === 'function') {
                setSetting(path, newColor);
            }
        } catch (e) {
            // ignore
        }
    };

    // PopoverPropsを定義し、ColorPickerに渡す
    const PopoverProps = {
        disableScrollLock: true, // Popoverが開いた際、bodyのスクロールロックを無効化
    };

    return (
        <MuiColorInput
            label={label ?? 'Choose Color'}
            value={color}
            onChange={handleChange}
            PopoverProps={PopoverProps}
        />
    );
}
