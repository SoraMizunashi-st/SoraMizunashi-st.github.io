// preview.tsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./textDecorator.module.css";
import comment from "./comment.module.css";
import { GeneratorSettings } from "../types/generator.type"; // <- 提供ファイルの場所に合わせてください

interface PreviewProps {
    settings: GeneratorSettings;
    // optional root ref so parent can mutate CSS vars for instant preview
    rootRef?: React.Ref<HTMLDivElement> | null;
}

function Preview({ settings, rootRef }: PreviewProps) {
    // guard defaults so this component can be used even if some fields are missing
        const basic = settings?.basicStyle ?? { fontFamily: "sans-serif", fontSize: 14, textColor: "#000", textStrokeEnabled: false, textStrokeColor: "#000" };
        const icon = settings?.icon ?? { enabled: true, size: 40, frameShape: "circle" as const };
        const highlight = settings?.highlight ?? {
            owner: { highlightColor: "transparent", nameColor: basic.textColor, badgeEnabled: false },
            moderator: { highlightColor: "transparent", nameColor: basic.textColor, badgeEnabled: false },
            member: { highlightColor: "transparent", nameColor: basic.textColor, badgeEnabled: false },
        };
        const sample = (settings as any)?.sample ?? {};

    const baseTextStyle: React.CSSProperties = {
        fontFamily: basic.fontFamily,
        // use CSS var for instant preview if set by the slider: --obs-font-size
        fontSize: `var(--obs-font-size, ${basic.fontSize}px)`,
        color: basic.textColor,
        textShadow: basic.textStrokeEnabled
            ? `1px 1px 0 ${basic.textStrokeColor}, -1px -1px 0 ${basic.textStrokeColor}, 1px -1px 0 ${basic.textStrokeColor}, -1px 1px 0 ${basic.textStrokeColor}`
            : undefined,
        lineHeight: 1.2,
    };

    const avatarRadius = icon.frameShape === "circle" ? "50%" : icon.frameShape === "rounded" ? "8px" : "0";

    const avatarStyle: React.CSSProperties = {
        width: `${icon.size}px`,
        height: `${icon.size}px`,
        minWidth: `${icon.size}px`,
        borderRadius: avatarRadius,
        backgroundColor: icon.enabled ? "#bdbdbd" : "transparent",
        display: icon.enabled ? "block" : "none",
        flexShrink: 0,
    };

    // use CSS calc based on the CSS var so these update visually without React re-render
    const timestampStyle: React.CSSProperties = {
        color: "#6b7280",
        fontSize: `calc(var(--obs-font-size, ${basic.fontSize}px) - 2px)`,
        marginLeft: 8,
    };

    const likeStyle: React.CSSProperties = {
        color: "#6b7280",
        fontSize: `calc(var(--obs-font-size, ${basic.fontSize}px) - 4px)`,
        marginLeft: 8,
    };

    const getNameStyle = (userType: "owner" | "moderator" | "member" | "normal"): React.CSSProperties => {
        const cfg =
            userType === "owner" ? highlight.owner :
            userType === "moderator" ? highlight.moderator :
            userType === "member" ? highlight.member :
            { highlightColor: "transparent", nameColor: basic.textColor, badgeEnabled: false };

        // use a permissive access so TypeScript won't complain if cfg has a different shape
        const highlightColor = (cfg as any).highlightColor ?? "transparent";
        const nameColor = (cfg as any).nameColor ?? basic.textColor;
        const hasHighlight = !!highlightColor && highlightColor !== "transparent";

        return {
            backgroundColor: highlightColor,
            color: nameColor,
            padding: hasHighlight ? "2px 6px" : undefined,
            borderRadius: hasHighlight ? 999 : undefined,
            fontWeight: 600,
            marginRight: 8,
            display: "inline-block",
        } as React.CSSProperties;
    };

    const sampleComments = [
        {
            id: "c1",
            userType: "owner" as const,
            name: sample.ownerName ?? "ChannelOwner",
            time: "2分前",
            text: sample.ownerText ?? "配信へようこそ！コメントしてね。",
            verified: true,
            likes: 124,
        },
        {
            id: "c2",
            userType: "normal" as const,
            name: sample.userName ?? "RandomUser123",
            time: "5分前",
            text: sample.userText ?? "すごい！解説わかりやすいです。",
            verified: false,
            likes: 3,
        },
        {
            id: "c3",
            userType: "moderator" as const,
            name: sample.modName ?? "Moderator_Taro",
            time: "10分前",
            text: sample.modText ?? "荒らし注意。表示設定を確認しました。",
            verified: false,
            likes: 6,
        },
        {
            id: "c4",
            userType: "member" as const,
            name: sample.memberName ?? "GoldMember",
            time: "20分前",
            text: sample.memberText ?? "メンバー限定の絵文字使ってみた！",
            verified: false,
            likes: 12,
        },
    ];
    // YouTube-like stacked preview: new comments appear at the top and push existing ones down.
    const containerRef = useRef<HTMLDivElement | null>(null);
    // ensure at least 10 initial items (pad by repeating samples)
    const makeInitial = () => {
        const out: typeof sampleComments = [] as any;
        let i = 0;
        while (out.length < 50) {
            const base = sampleComments[i % sampleComments.length];
            out.push({ ...base, id: `${base.id}-init-${out.length}` });
            i++;
        }
        return out;
    };
    const [activeComments, setActiveComments] = useState<typeof sampleComments>(makeInitial());
    const elRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // Note: automatic generation is disabled per user request. If you want to add a comment
    // programmatically, call setActiveComments(prev => [newComment, ...prev]) to prepend.

    return (
        <div ref={rootRef ?? containerRef} className={styles.textDecorator} style={{ ...baseTextStyle, position: 'relative' }}>
            <div style={{ maxWidth: 700, position: 'relative', height: '100%', overflow: 'hidden', paddingRight: 8 }} ref={containerRef}>
                <p style={{ margin: "6px 0 8px 0", fontWeight: 700, fontSize: 16, lineHeight: 1.2 }}>コメント プレビュー</p>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: 12 }} />
                {/* stacked comments: newest at top, older pushed down */}
                {activeComments.map((c, idx) => (
                    <div
                        key={c.id}
                        ref={(el) => { elRefs.current[c.id] = el; }}
                        className={comment.CommentBlock}
                        style={{ display: 'flex', gap: 12, padding: '8px 0', alignItems: 'flex-start' }}
                    >
                        <div style={avatarStyle} className={comment.IconPlaceholder} />

                        <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                                {c.userType === "owner" && highlight.owner.badgeEnabled && (
                                    <span className={comment.Badge} style={{ background: "#ff3b30", color: "#fff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>
                                        チャンネル
                                    </span>
                                )}
                                {c.userType === "moderator" && highlight.moderator.badgeEnabled && (
                                    <span className={comment.Badge} style={{ background: "#10b981", color: "#fff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>
                                        モデレーター
                                    </span>
                                )}
                                {c.userType === "member" && highlight.member.badgeEnabled && (
                                    <span className={comment.Badge} style={{ background: "#f59e0b", color: "#fff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>
                                        メンバー
                                    </span>
                                )}

                                <span style={getNameStyle(c.userType)} className={comment.UserName}>
                                    {c.name}
                                </span>

                                {c.verified && <span style={{ color: "#3b82f6", fontSize: 12 }}>✔︎</span>}

                                <span style={timestampStyle} className={comment.Timestamp}>
                                    {c.time}
                                </span>

                                <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
                                    <button style={{ background: "transparent", border: "none", cursor: "pointer", color: "#6b7280" }}>♡</button>
                                    <span style={likeStyle}>{c.likes}</span>
                                </span>
                            </div>

                            <p className={comment.CommentText} style={{ margin: "6px 0 0 0" }}>
                                {c.text}
                            </p>

                            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                                <button style={{ background: "transparent", border: "none", color: "#6b7280", cursor: "pointer", fontSize: Math.max(12, basic.fontSize - 4) }}>
                                    返信
                                </button>
                                <button style={{ background: "transparent", border: "none", color: "#6b7280", cursor: "pointer", fontSize: Math.max(12, basic.fontSize - 4) }}>
                                    翻訳
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// memoize so Preview only re-renders when the `settings` reference (or its used slices) change.
export default React.memo(Preview);
