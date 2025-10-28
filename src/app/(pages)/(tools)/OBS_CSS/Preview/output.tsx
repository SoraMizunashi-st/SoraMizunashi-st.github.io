

import styles from "./output.module.css"
import React from 'react'

interface OutputProps {
    generatedCSS?: string;
}

export default function Output({ generatedCSS }: OutputProps) {
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(generatedCSS ?? '');
            // optional: could show a toast
        } catch (e) {
            // ignore
        }
    };

    return (
        <>
            <div className = {styles.outputContenor} >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ margin: 0, fontWeight: 700 }}>生成された CSS</p>
                    <div>
                        <button onClick={copy} style={{ marginLeft: 8 }}>コピー</button>
                    </div>
                </div>

                <pre style={{ whiteSpace: 'pre-wrap', marginTop: 12, background: '#0b1220', color: '#e6eef8', padding: 12, borderRadius: 6, overflowX: 'auto' }}>
                    {generatedCSS ?? '（まだ生成されていません）'}
                </pre>
            </div>
        </>
    );
}