import styles from "./textDecorator.module.css"

export default function ToolsInterfaceMDX({ 
    settings, setSetting, handleGenerate,
    PresetList, FontList, FontSizeSlider, IconFrameShapeList, IconSizeSlider, OnOffSwitch, 
    SuperChatAnimationList, MemberShipAnimationList, ColorPicker, GenerateButton
} : any){
    return(
        <>
            <h1> OBS Comment Custum Generator v1.0.0</h1>
            <p>本ツールは、PC版webブラウザでの使用を想定しています。</p>
            <p>スマートフォンやタブレット使用は(使いづらいので)おやめ下さい。</p>
            <br/>
            <hr/>
            <h2> プリセットを使用する場合選択してください。</h2> 
            <p>※特に指定が無い場合、一般的な上から下に流れるコメント欄として出力します。</p>
            <br/>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆プリセット</p>
                </div>
                <div>
                    <PresetList path ="preset"/> {/* ✅ 修正済みコンポーネント */}
                </div>
            </div>

            <hr/>
            <h2>(1)基本スタイル</h2> 
            <hr/>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆フォント指定</p>
                </div>
                <div>
                    <FontList path = "basicStyle.fontFamily"/> 
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆フォントサイズ</p>
                </div>
                <div>
                    {/*将来的に、スライダーの値を上部ポップアウト以外でわかりやすく表示するようにする。*/}
                    <FontSizeSlider path= "basicStyle.fontSize"/> 
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆文字色(コメント自体の文字色)</p>
                </div>
                <div>
                    {ColorPicker("basicStyle.textColor")({})} {/* 🚨 呼び出し形式修正 */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆文字の縁どり</p>
                </div>
                <div>
                    {OnOffSwitch("basicStyle.textStrokeEnabled")({})} {/* 🚨 呼び出し形式修正 */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆ふちどり色</p>
                </div>
                <div>
                    {ColorPicker("basicStyle.textStrokeColor")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <hr/>
            <h2> (2)アイコン</h2>
            <hr/>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆アイコン表示</p>
                </div>
                <div>
                    {OnOffSwitch("icon.enabled")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆アイコン枠の形状</p>
                </div>
                <div>
                    <IconFrameShapeList path = "icon.frameShape" /> {/* ✅ 修正済みコンポーネント */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆アイコンサイズ</p>
                </div>
                <div>
                    {/*将来的に、スライダーの値を上部ポップアウト以外でわかりやすく表示するようにする。*/}
                    <IconSizeSlider path = "icon.size"/> {/* ✅ 修正済みコンポーネント */}
                </div>
            </div>
            <hr/>
            <h2>(3)ネームハイライト&バッジ</h2> 
            <hr/>
            <h3>チャンネルオーナー(あなた自身)</h3> 

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆ネームハイライト色</p>
                </div>
                <div>
                    {ColorPicker("highlight.owner.highlightColor")({})} {/* 🚨 呼び出し形式修正 */}
                </div>
            </div>
            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆バッジ</p>
                </div>
                <div>
                    {OnOffSwitch("highlight.owner.badgeEnabled")({})} {/* 🚨 呼び出し形式修正 */}
                </div>
            </div>

            <h3>モデレーター</h3>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆ネームハイライト色</p>
                </div>
                <div>
                    {ColorPicker("highlight.moderator.highlightColor")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>
            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆バッジ</p>
                </div>
                <div>
                    {OnOffSwitch("highlight.moderator.badgeEnabled")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <h3>メンバーシップ</h3>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆ネームハイライト色</p>
                </div>
                <div>
                    {ColorPicker("highlight.member.highlightColor")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>
            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆バッジ</p>
                </div>
                <div>
                    {OnOffSwitch("highlight.member.badgeEnabled")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <h3> オプション</h3>
            <p>一般に非推奨とされる項目です。</p>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆チャンネル登録ユーザーと一般ユーザーを色分けする。</p>
                </div>
                <div>
                    {OnOffSwitch("highlight.subscribersColoring")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆初見さんをハイライト</p>
                </div>
                <div>
                    {OnOffSwitch("highlight.firstTimerHighlightEnabled")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆チャンネル登録ユーザーのハイライト色</p>
                </div>
                <div>
                    {ColorPicker("highlight.subscriberHighlightColor")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <hr/>
            <h2>(4)有料コンテンツ対応</h2> 
            <hr/>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆金額ごとのカラーリングで背景を塗りつぶす。</p>
                </div>
                <div>
                    {OnOffSwitch("paidContent.colorFillEnabled")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆スーパーチャット時アニメーション</p>
                </div>
                <div>
                    <SuperChatAnimationList path="paidContent.superChatAnimation" /> {/* ✅ 修正済みコンポーネント */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆メンバーシップアニメーション</p>
                </div>
                <div>
                    <MemberShipAnimationList path = "paidContent.memberShipAnimation"/> {/* 🚨 Path割り当て */}
                </div>
            </div>


            <hr/>
            <h2>(5)アニメーション</h2> 
            <hr/>
            {/* 以下のセクションは未実装コンポーネントと path の割り当てが必要です */}
            
            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆基本コメントアニメーション</p>
                </div>
                <div>
                    {/* dropdown ( default = None ) */}
                    {/* プレースホルダーの関数呼び出しを避けるため null を返すのが安全です */}
                    {null} 
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆出現時のコメントアニメーション</p>
                </div>
                <div>
                    {/* dropdown ( default = None ) */}
                    {null}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆退場時のコメントアニメーション</p>
                </div>
                <div>
                    {/* dropdown ( default = None ) */}
                    {null}
                </div>
            </div>

            <hr/>
            <h2> (6)パーティクル</h2>
            <hr/>
            {/* 以下のセクションは未実装コンポーネントと path の割り当てが必要です */}
            
            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆基本コメントパーティクルをON</p>
                </div>
                <div>
                    {OnOffSwitch("particle.baseEnabled")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆基本コメントパーティクルの種類</p>
                </div>
                <div>
                    {/* dropdown ( default = None ) */}
                    {null}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆コメント出現時パーティクルをON</p>
                </div>
                <div>
                    {OnOffSwitch("particle.entryEnabled")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆コメント出現時パーティクルの種類</p>
                </div>
                <div>
                    {/* dropdown ( default = None ) */}
                    {null}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆コメント退場時パーティクルをON</p>
                </div>
                <div>
                    {OnOffSwitch("particle.exitEnabled")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆コメント退場時時パーティクルの種類</p>
                </div>
                <div>
                    {/* dropdown ( default = None ) */}
                    {null}
                </div>
            </div>

            <hr/>
            <h2> (7)その他</h2>
            <hr/>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆コメント前方にタイムスタンプを付与する。</p>
                </div>
                <div>
                    {OnOffSwitch("other.timestampEnabled")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p>◆コメント削除を非表示にする。(※このコメントは削除されました、自体を表示しない。)</p>
                </div>
                <div>
                    {OnOffSwitch("other.deleteHideEnabled")({})} {/* 🚨 Path割り当て＆呼び出し形式修正 */}
                </div>
            </div>

            <hr/>

            <div className={ styles.controlRow }>
                <div className={ styles.controlLabel}>
                    <p></p>
                </div>
                <div>
                    <GenerateButton handleGenerate={handleGenerate} /> {/* 🚨 handleGenerateを直接Propsとして渡す */}
                </div>
            </div>
        </>
    );
}