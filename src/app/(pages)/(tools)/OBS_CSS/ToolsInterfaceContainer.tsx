
import React, { useState, useCallback, useRef } from 'react';

import tools_styles from './tools.module.css';

import ToolsInterfaceMDX from './ToolsInterface';

import { GeneratorSettings , initialSettings} from "./types/generator.type"

// コンポーネント群
import PresetList from "./component/ObsGeneratorPreset"
import FontList from "../../../../component/ui/FontList"
import FontSizeSlider from "./component/FontSizeSliderFast"
import IconFrameShapeList from "./component/IconFrameShapeList"
import IconSizeSlider from "./component/IconSizeSlider"
import OnOffSwitch from "./component/OnOffSwitch"

import SuperChatAnimationList from "./component/SuperChatAnimationList"
import MemberShipAnimationList from "./component/MembershipAnimationList"
import ColorPicker from "../../../../component/ui/ColorPicker"
import GenerateButton from "./component/GenerateButton"
import SimpleSelect from "./component/SimpleSelect"
import BackgroundToggle from "./component/BackgroundToggle"

// レイアウトとプレビュー
import PreviewBox from "./Preview/preview";
import OutputBox from "./Preview/output"; // ツールレイアウトのCSSをインポート (パスはプロジェクト構造に合わせて調整)


export default function ToolsInterfaceContainer() {
  const [settings, setSettings] = useState<GeneratorSettings>(initialSettings);
  const [generatedCSS, setGeneratedCSS] = useState<string>('');
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Stateを更新するための汎用Setter関数 (ネストされたプロパティも更新可能)
  // よく使う更新: 深いクローンは高コストなので、更新パスに沿って浅いコピーだけを作る
  const setSetting = useCallback((path: string, value: any) => {
    setSettings(prev => {
      const keys = path.split('.');
      // start with a shallow copy of root
      const newRoot: any = Array.isArray(prev) ? [...(prev as any)] : { ...(prev as any) };

      let curNew = newRoot;
      let curOld: any = prev as any;

      for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        const nextOld = curOld ? curOld[k] : undefined;
        const nextNew = Array.isArray(nextOld) ? [...(nextOld as any)] : { ...(nextOld as any) };
        curNew[k] = nextNew;
        curNew = nextNew;
        curOld = nextOld || {};
      }

      curNew[keys[keys.length - 1]] = value;
      return newRoot as typeof prev;
    });
  }, []);

  // ColorPicker と OnOffSwitch は MDX からパスを受け取り動的にレンダリングされるため
  // factory をそのまま残すが、setSetting は軽量化したので頻繁な更新のコストが下がる
  const CustomOnOffSwitch = useCallback((path: string) => (props: any) => {
    const currentValue = path.split('.').reduce((o, k) => (o as any)?.[k], settings as any);
    return (
      <OnOffSwitch
        {...props}
        path={path}
        setSetting={setSetting}
        currentValue={currentValue}
      />
    );
  }, [settings, setSetting]);

  const CustomColorPicker = useCallback((path: string) => (props: any) => {
    const currentValue = path.split('.').reduce((o, k) => (o as any)?.[k], settings as any);
    return (
      <ColorPicker
        {...props}
        path={path}
        setSetting={setSetting}
        currentValue={currentValue}
      />
    );
  }, [settings, setSetting]);

  const CustomBackgroundToggle = useCallback((path: string) => (props: any) => {
    const currentValue = path.split('.').reduce((o, k) => (o as any)?.[k], settings as any);
    return (
      <BackgroundToggle {...props} path={path} setSetting={setSetting} currentValue={currentValue} />
    );
  }, [settings, setSetting]);

  // Simple select factories for animations and particle types
  const CommentAnimationSelect = useCallback((path: string) => (props: any) => {
    const currentValue = path.split('.').reduce((o, k) => (o as any)?.[k], settings as any);
    const options = [
      { label: 'None', value: 'none' },
      { label: 'Slide In', value: 'slideIn' },
      { label: 'Fade', value: 'fade' },
      { label: 'Pop', value: 'pop' },
    ];
    return <SimpleSelect {...props} path={path} setSetting={setSetting} currentValue={currentValue} options={options} label="コメントアニメーション" />;
  }, [settings, setSetting]);

  const ParticleTypeSelect = useCallback((path: string) => (props: any) => {
    const currentValue = path.split('.').reduce((o, k) => (o as any)?.[k], settings as any);
    const options = [
      { label: 'None', value: 'none' },
      { label: 'Sparkle', value: 'sparkle' },
      { label: 'Burst', value: 'burst' },
      { label: 'Bubble', value: 'bubble' },
    ];
    return <SimpleSelect {...props} path={path} setSetting={setSetting} currentValue={currentValue} options={options} label="パーティクル種別" />;
  }, [settings, setSetting]);


  // 将来のCSS生成ロジックのプレースホルダー
  const handleGenerate = () => {
    // Generate CSS using the latest visible preview values when possible.
    const basic = settings.basicStyle;
    const icon = settings.icon;

    // try to read live preview values from the preview root (CSS var --obs-font-size and computed color)
    let fontSize = basic.fontSize;
    let textColor = basic.textColor;
    try {
      const root = previewRootRef.current;
      if (root) {
        const cs = window.getComputedStyle(root);
        const varFont = cs.getPropertyValue('--obs-font-size')?.trim();
        if (varFont) {
          const m = varFont.match(/([0-9.]+)px/);
          if (m) fontSize = Number(m[1]);
        }
        const compColor = cs.getPropertyValue('color')?.trim();
        if (compColor) textColor = compColor;
      }
    } catch (e) {
      // ignore if not in browser
    }

    const textShadow = basic.textStrokeEnabled ? `1px 1px 0 ${basic.textStrokeColor}, -1px -1px 0 ${basic.textStrokeColor}, 1px -1px 0 ${basic.textStrokeColor}, -1px 1px 0 ${basic.textStrokeColor}` : 'none';

    // output includes both .obs-comment and a YouTube-like selector example so users can paste directly
    const fam = basic.fontFamily && basic.fontFamily.indexOf(' ') >= 0 ? `"${basic.fontFamily}"` : basic.fontFamily;
    const css = `/* Generated by OBS Comment Generator */\n` +
      `/* Selectors: .obs-comment (recommended) and example YouTube selector included */\n` +
      `.obs-comment, .yt-live-chat-text-message-renderer {\n` +
      `  font-family: ${fam}, sans-serif;\n` +
      `  font-size: ${fontSize}px;\n` +
      `  color: ${textColor};\n` +
      (basic.transparentBackground ? `  background: transparent;\n` : '') +
      (basic.textStrokeEnabled ? `  text-shadow: ${textShadow};\n` : '') +
      `  line-height: 1.2;\n` +
      `}\n\n` +
      `.obs-icon {\n` +
      `  width: ${icon.size}px;\n` +
      `  height: ${icon.size}px;\n` +
      `  border-radius: ${icon.frameShape === 'circle' ? '50%' : icon.frameShape === 'rounded' ? '8px' : '0'};\n` +
      `  background: ${icon.enabled ? '#bdbdbd' : 'transparent'};\n` +
      `}\n`;

    console.log('Generating CSS with settings (computed):', { basic, fontSize, textColor, icon });
    setGeneratedCSS(css);
  };

  // MDX に渡すラッパーはトップレベルで定義しておく（hooks は条件分岐や JSX 内で呼ばない）
  const PresetListProp = useCallback((props: any) => (
    <PresetList {...props} setSetting={setSetting} currentValue={settings.preset} />
  ), [setSetting, settings.preset]);

  const FontListProp = useCallback((props: any) => (
    <FontList {...props} setSetting={setSetting} currentValue={settings.basicStyle.fontFamily} />
  ), [setSetting, settings.basicStyle.fontFamily]);

  // previewRootRef を使って CSS 変数を直接操作し、視覚的に即時反映させる
  const previewRootRef = useRef<HTMLDivElement | null>(null);
  const updatePreviewFontSize = useCallback((v: number) => {
    try {
      previewRootRef.current?.style.setProperty('--obs-font-size', `${v}px`);
    } catch (e) {
      // ignore in non-browser environments
    }
  }, []);

  const FontSizeSliderProp = useCallback((props: any) => (
    <FontSizeSlider {...props} setSetting={setSetting} currentValue={settings.basicStyle.fontSize} previewSetter={updatePreviewFontSize} />
  ), [setSetting, settings.basicStyle.fontSize, updatePreviewFontSize]);

  const IconFrameShapeListProp = useCallback((props: any) => (
    <IconFrameShapeList {...props} setSetting={setSetting} currentValue={settings.icon.frameShape} />
  ), [setSetting, settings.icon.frameShape]);

  const IconSizeSliderProp = useCallback((props: any) => (
    <IconSizeSlider {...props} setSetting={setSetting} currentValue={settings.icon.size} />
  ), [setSetting, settings.icon.size]);

  const SuperChatAnimationListProp = useCallback((props: any) => (
    <SuperChatAnimationList {...props} setSetting={setSetting} currentValue={settings.paidContent.superChatAnimation} />
  ), [setSetting, settings.paidContent.superChatAnimation]);

  const MemberShipAnimationListProp = useCallback((props: any) => (
    <MemberShipAnimationList {...props} setSetting={setSetting} currentValue={settings.paidContent.memberShipAnimation} />
  ), [setSetting, settings.paidContent.memberShipAnimation]);

  const GenerateButtonProp = useCallback((props: any) => <GenerateButton {...props} handleGenerate={handleGenerate} />, [handleGenerate]);
  
  // JS fallback: if CSS sticky doesn't behave, fix sidebar via position:fixed on scroll
  React.useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;

  let originalRect: DOMRect | null = null;
  let mode: 'static' | 'fixed' | 'absolute' = 'static';
  let rafId: number | null = null;

    const measure = () => {
      originalRect = el.getBoundingClientRect();
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!originalRect) measure();
        const docTop = window.scrollY || window.pageYOffset;
        const topOffset = 20;

        // wrapper is the positioned parent (sidebarContainer)
        const wrapper = el.parentElement as HTMLElement | null;
        const wrapperRect = wrapper ? wrapper.getBoundingClientRect() : null;
        const wrapperTopDoc = wrapperRect ? (wrapperRect.top + (window.scrollY || window.pageYOffset)) : 0;
        const wrapperHeight = wrapper ? wrapper.offsetHeight : Infinity;
        const wrapperBottomDoc = wrapperTopDoc + wrapperHeight;

        const elHeight = el.offsetHeight;
        // desired fixed top in doc coords
        const desiredTopDoc = (window.scrollY || window.pageYOffset) + topOffset;

        // if we would overflow the wrapper bottom, switch to absolute at bottom
        if (desiredTopDoc + elHeight > wrapperBottomDoc) {
          if (mode !== 'absolute') {
            // make absolute inside wrapper
            el.style.position = 'absolute';
            el.style.top = `${Math.max(0, wrapperHeight - elHeight)}px`;
            el.style.left = '0';
            el.style.width = '100%';
            el.style.zIndex = '1000';
            mode = 'absolute';
          }
          return;
        }

        // otherwise, if we've scrolled past original top, fix to viewport
        const elRect = el.getBoundingClientRect();
        const elTopDoc = (elRect.top + (window.scrollY || window.pageYOffset));
        const topThreshold = elTopDoc - topOffset;

        if (docTop > topThreshold) {
          if (mode !== 'fixed') {
            const rect = el.getBoundingClientRect();
            el.style.position = 'fixed';
            el.style.top = `${topOffset}px`;
            el.style.left = `${rect.left}px`;
            el.style.width = `${rect.width}px`;
            el.style.zIndex = '1000';
            mode = 'fixed';
          }
        } else {
          if (mode !== 'static') {
            // restore to normal flow
            el.style.position = '';
            el.style.top = '';
            el.style.left = '';
            el.style.width = '';
            el.style.zIndex = '';
            mode = 'static';
          }
        }
      });
    };

    const onResize = () => {
      if (mode === 'fixed') {
        // recompute left/width
        const rect = el.getBoundingClientRect();
        el.style.left = `${rect.left}px`;
        el.style.width = `${rect.width}px`;
      } else {
        measure();
      }
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebarRef.current]);
    return (
<>
  <div className={tools_styles.twoColumnGrid}>
    <div className={tools_styles.toolsContentContainer}>
          <ToolsInterfaceMDX
            settings={settings}
            setSetting={setSetting}
            handleGenerate={handleGenerate}

            // 1. シンプルなコンポーネント（個別の currentValue 依存でメモ化）
            PresetList={PresetListProp}
            FontList={FontListProp}
            FontSizeSlider={FontSizeSliderProp}
            IconFrameShapeList={IconFrameShapeListProp}
            IconSizeSlider={IconSizeSliderProp}
            SuperChatAnimationList={SuperChatAnimationListProp}
            MemberShipAnimationList={MemberShipAnimationListProp}

            // 2. HOC (高階コンポーネント)
            OnOffSwitch={CustomOnOffSwitch}
            ColorPicker={CustomColorPicker}
            BackgroundToggle={CustomBackgroundToggle}

            // 3. Animation / Particle dropdown factories
            CommentAnimationList={CommentAnimationSelect}
            ParticleTypeList={ParticleTypeSelect}

            // 3. 生成ボタン
            GenerateButton={GenerateButtonProp}
          />
    </div>

    <div className={tools_styles.sidebarContainer}>
      <div className={tools_styles.sidebarSkeleton} ref={sidebarRef}>
  <PreviewBox settings={settings} rootRef={previewRootRef}/> {/* プレビューに State と rootRef を渡す */}
      </div>
    </div>
  </div>

  {/* 2. 出力ボックス (2段組みグリッドの下に配置) */}
    <div>
        <OutputBox generatedCSS={generatedCSS} />
      </div>
</>
    );
}