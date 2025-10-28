import React from 'react';

// Simple toggle button to switch background transparency
export default function BackgroundToggle({ path, setSetting, currentValue, label }: any) {
    const enabled = !!currentValue;

    const handleClick = () => {
        if (typeof setSetting === 'function' && typeof path === 'string') {
            setSetting(path, !enabled);
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{
                padding: '6px 10px',
                borderRadius: 6,
                border: '1px solid #ccc',
                background: enabled ? '#2563eb' : '#fff',
                color: enabled ? '#fff' : '#111',
                cursor: 'pointer'
            }}
            aria-pressed={enabled}
            title={label ?? '背景を透過にする'}
        >
            {label ?? '背景透過'}: {enabled ? 'ON' : 'OFF'}
        </button>
    );
}
