以下は、このリポジトリ内で素早く生産的に動けるようにするためのプロジェクト固有の指示メモです。

- 目的: 新しい機能追加やバグ修正を行う AI コーディングエージェントが、重要な構成、開発フロー、設計パターンをすぐに把握できるようにする。

1) ビッグピクチャ（すぐ把握すべき構成）
  - このリポジトリはモノレポ風に複数プロジェクトを含みます。作業対象の主な Web プロジェクトは `SoraMizunashi-st.github.io`（ルートにあるフォルダ）です。
  - フロントエンドは Next.js（app router, Next 16）で実装されています。ソースは `src/app` 配下。
  - OBS コメント用 CSS 生成ツールは `src/app/(pages)/(tools)/OBS_CSS` にまとまっています。

2) 主要コンポーネントと責務
  - `src/app/(pages)/(tools)/OBS_CSS/page.tsx` : ページのエントリ。`"use client"` を有効にしてクライアントコンポーネントとして動作させる。
  - `ToolsInterfaceContainer.tsx` : 全体のレイアウトと State 管理を行う親コンポーネント。MDX へ UI コンポーネントを注入する役割も持つ。
  - `types/generator.type.tsx` : `GeneratorSettings` 型と `initialSettings`（デフォルト値）。ジェネレータの設定スキーマはここを変更する。
  - `ToolsInterface.mdx` : 設定 UI の本文（MDX）。`ToolsInterfaceContainer` からコンポーネント（PresetList, FontList, OnOffSwitch など）を props として注入する方式を採用している。
  - `Preview/preview.tsx`, `Preview/output.tsx` : `settings` を受け取りプレビューおよび最終出力を表示する。

3) 典型的な開発フロー（ローカル）
  - 依存インストール: レポ内 `SoraMizunashi-st.github.io` フォルダで `npm install`（またはプロジェクトで使っているパッケージマネージャ）。
  - 開発サーバ: `npm run dev`（PowerShell 環境ではそのまま実行）。Next.js は `--turbopack` フラグを有効にしている。
  - ビルド: `npm run build`（本番ビルド）。
  - 起動: `npm run start`（ビルド後のスタート）。
  - Lint: `npm run lint`（eslint）。

4) プロジェクト固有のコードパターン（重要）
  - MDX に UI コンポーネントを注入するパターン：`ToolsInterfaceContainer` は `ToolsInterfaceMDX` をインポートし、props として関数コンポーネント（例: `PresetList={(props)=> <PresetList {...props} .../>}`）を渡す。MDX側は渡されたプロップで UI をレンダリングする。
    - 変更例: 新しい UI ウィジェットを追加するには、`OBS_CSS/component/` にコンポーネントを作成し、`ToolsInterfaceContainer` から `ToolsInterfaceMDX` に渡す。
  - 設定更新の共通パターン：`setSetting(path: string, value: any)` を使い、ドット区切りのパス（例 `basicStyle.fontSize`）でネストされた state を更新する。
    - `GeneratorSettings` と `initialSettings` は `types/generator.type.tsx` にあるので、スキーマ変更はここを編集する。
  - プレビュー連携：`PreviewBox` に `settings` を直渡しすることでクライアント側の即時プレビューを行っている。プレビューのロジックは `Preview/preview.tsx` を参照。

5) 変更を加える際の短いチェックリスト
  - UI（MDX）を変えるとき: `ToolsInterfaceContainer.tsx` から該当コンポーネントを MDX に渡しているか確認。
  - 設定スキーマを変更する時: `types/generator.type.tsx` の `GeneratorSettings` と `initialSettings` を更新し、`Preview/preview.tsx` と各コンポーネントの `currentValue` 取得ロジックを見直す。
  - クライアント/サーバ境界: `use client` がどのファイルで宣言されているか確認（`page.tsx` がクライアントエントリになっている）。クライアントフック（useState 等）を使うファイルは `use client` が有効なコンポーネント階層にある必要あり。

6) よく使う編集ポイント（ファイル例）
  - 状態とデフォルト: `src/app/(pages)/(tools)/OBS_CSS/types/generator.type.tsx`
  - UI 親: `src/app/(pages)/(tools)/OBS_CSS/ToolsInterfaceContainer.tsx`
  - MDX レイアウト: `src/app/(pages)/(tools)/OBS_CSS/ToolsInterface.mdx`
  - プレビュー/出力: `src/app/(pages)/(tools)/OBS_CSS/Preview/preview.tsx`, `.../output.tsx`

7) モノレポ注意点
  - このリポジトリには複数プロジェクト（C++、Python、他のツール）が混在する。変更は必ず対象プロジェクト（`SoraMizunashi-st.github.io`）のソースパス内に限定すること。不要なサブプロジェクトの依存を編集しない。

8) 未カバー・要確認事項（エージェントが人に確認するべき点）
  - CSS 生成の最終仕様（`handleGenerate` の期待出力フォーマット）。現状 `ToolsInterfaceContainer` の `handleGenerate` はプレースホルダです。どの CSS ルール、どの出力形式（.css テキスト / JSON / OBS 用スニペット）を期待するか確認してください。
  - CI やデプロイ手順（GitHub Pages / Vercel など）の現在の設定。README にデプロイ手順がない場合は人に確認。

フィードバックをください：この指示ファイルに抜けや誤りがあれば、修正したい箇所（例: 出力フォーマットの例、よく使うコマンド）を教えてください。必要があれば内容を拡張して CI やレビューフローも追加します。
