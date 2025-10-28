import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const GOOGLE_FONTS = [
    { name: 'Default', value: 'Default'},
    { name: 'Noto Sans JP', value: 'Noto Sans JP' },
    { name: 'Roboto', value: 'Roboto' },
    { name: 'Oswald', value: 'Oswald' },
    { name: 'M PLUS Rounded 1c', value: 'M PLUS Rounded 1c' },
    { name: 'Kosugi Maru', value: 'Kosugi Maru' },
];

// MenuPropsを定義し、Selectに渡す
const MenuProps = {
    disableScrollLock: true, // スクロールロックを無効化し、画面の「カクつき」を防止
};


type Props = {
    setSetting?: (path: string, value: any) => void;
    currentValue?: string;
    path?: string; // optional path if consumer wants custom
}

export default function FontList(props: Props) {
    const initial = props.currentValue ?? GOOGLE_FONTS[0].value;
    const [selectedFont, setSelectedFont] = useState<string>(initial);

    const handleChange = (event: any) => {
        const v = event.target.value as string;
        setSelectedFont(v);
        // propagate to parent if provided
        try {
            if (typeof props.setSetting === 'function') {
                const path = props.path ?? 'basicStyle.fontFamily';
                props.setSetting(path, v);
            }
        } catch (e) {
            // ignore
        }
    };

    return (
        <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="font-select-label">フォントを選択</InputLabel>
            <Select
                labelId="font-select-label"
                id="font-select"
                value={selectedFont}
                label="フォントを選択"
                onChange={handleChange}
                MenuProps={MenuProps}
            >
                {GOOGLE_FONTS.map((font) => (
                    <MenuItem key={font.value} value={font.value}>
                        {font.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}