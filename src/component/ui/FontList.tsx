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


export default function FontList() {
    const [selectedFont, setSelectedFont] = useState(GOOGLE_FONTS[0].value); 

    const handleChange = (event:any) => { // 型注釈は省略しました
        setSelectedFont(event.target.value);
        // 将来的に親コンポーネントに値を渡すロジックをここに追加する (例: props.onChange(event.target.value))
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
            MenuProps={MenuProps} // ★ ここで適用 ★
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