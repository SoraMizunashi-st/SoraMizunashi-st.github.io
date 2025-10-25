declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

// .mdファイルもコンポーネントとして扱う場合に含める
declare module '*.md' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}