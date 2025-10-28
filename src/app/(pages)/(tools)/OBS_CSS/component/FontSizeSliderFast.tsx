import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// 高速スライダー:
// - スライダーのドラッグ中はローカル state を使ってサムの動きを滑らかにする
// - 親の setSetting は requestAnimationFrame で更新をスロットルして 60FPS 程度に抑える
// - onChangeCommitted（ドラッグ確定）でも最終値を確実に親へ送る
const FONT_PRESETS = [14, 18, 22, 28, 36, 48];

export default function FontSizeSliderFast({ path, setSetting, currentValue, previewSetter }: any) {
  const initial = typeof currentValue === 'number' ? currentValue : FONT_PRESETS[2];
  const [localValue, setLocalValue] = React.useState<number>(initial);
  const rafRef = React.useRef<number | null>(null);
  const pendingRef = React.useRef<number | null>(null);

  // 親から currentValue が変わったときにローカルを同期
  React.useEffect(() => {
    if (typeof currentValue === 'number' && currentValue !== localValue) {
      setLocalValue(currentValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue]);

  const flushPending = React.useCallback(() => {
    if (pendingRef.current !== null) {
      setSetting(path, pendingRef.current);
      // ensure preview reflects committed value as well
      try { previewSetter?.(pendingRef.current as number); } catch (e) { }
      pendingRef.current = null;
    }
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, [path, setSetting]);

  const scheduleUpdate = React.useCallback((v: number) => {
    pendingRef.current = v;
    // update preview immediately (visual only)
    try { previewSetter?.(v); } catch (e) { }
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (pendingRef.current !== null) {
          setSetting(path, pendingRef.current);
          pendingRef.current = null;
        }
      });
    }
  }, [path, setSetting]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setLocalValue(newValue);
      // スロットル更新
      scheduleUpdate(newValue);
    }
  };

  const handleCommitted = (_: React.SyntheticEvent | Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      // 最終確定は必ず親に送る
      pendingRef.current = newValue;
      flushPending();
    }
  };

  React.useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      pendingRef.current = null;
    };
  }, []);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={localValue}
        value={localValue}
        // snap to preset marks only
        step={null}
        marks={FONT_PRESETS.map((v) => ({ value: v, label: String(v) }))}
        onChange={handleChange}
        onChangeCommitted={handleCommitted}
        valueLabelDisplay="auto"
        min={FONT_PRESETS[0]}
        max={FONT_PRESETS[FONT_PRESETS.length - 1]}
      />
    </Box>
  );
}
