// component/ui/FontList.jsx

import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const GOOGLE_FONTS = [
    { name: 'Noto Sans JP', value: 'Noto Sans JP' },
    { name: 'Roboto', value: 'Roboto' },
    { name: 'Oswald', value: 'Oswald' },
    { name: 'M PLUS Rounded 1c', value: 'M PLUS Rounded 1c' },
    { name: 'Kosugi Maru', value: 'Kosugi Maru' },
];

export default function FontList() {
    {/* 選択されたフォントの状態を管理 */}
    const [selectedFont, setSelectedFont] = useState(GOOGLE_FONTS[0].value); 

    {/* ドロップダウンの選択が変更されたときのハンドラ */}
    const handleChange = (event:any) => {
        {/* event.target.valueは、Selectコンポーネントから選択された値（value属性） */}
        setSelectedFont(event.target.value);
        {/* 将来的に親コンポーネントに値を渡すロジックをここに追加する (例: props.onChange(event.target.value)) */}
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
        >
            {/* GOOGLE_FONTSリストをマッピングしてMenuItemを生成 */}
            {GOOGLE_FONTS.map((font) => (
                <MenuItem key={font.value} value={font.value}>
                    {font.name}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
    );
}