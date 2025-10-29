

import styles from './ToolsSection.module.css';

import Link from 'next/link';


const tools = [
    { 
        id: 1, 
        title: '青系だけの色見本', 
        description: '読んで字のごとく青系だけの色見本です。\n青色が好きな人、どうぞ！', 
        link: '/TheBlue',
        thumbnail: '/carousel/theblue.webp'
    },
    { 
        id: 2, 
        title: 'OBS Comment Custom Generator', 
        description: 'YoutubeコメントをOBSで使用するときのCSSを簡単に作れるツールです。\n※テスト中', 
        link: '/OBS_CSS',
        thumbnail: '/images/obs-tool-thumbnail.jpg'
    },
    { 
        id: 3, 
        title: 'Gradient Designer v1.0.0', 
        description: 'cssのカラープロパティのグラデーション設定が視覚的に作れるツールです。\n※テスト中', 
        link: '/GradDesigner',
        thumbnail: '/images/gradient-tool-thumbnail.jpg'
    },
    { 
        id: 4, 
        title: 'StarSeeker v1.0.0', 
        description: 'あなたの現在地(市単位)から、ざっくりとした見える星の一覧表示\n※テスト中', 
        link: '/StarSeeker',
        thumbnail: '/images/starseeker-tool-thumbnail.jpg'
    },
    { 
        id: 5, 
        title: 'RandomNewsTaker', 
        description: 'ランダムなニュースを取得して表示するツールです。',
        link: '/RandomNewsTaker',
        thumbnail: '/images/news-tool-thumbnail.jpg'
    },
    { 
        id: 6, 
        title: 'StyleTester', 
        description: '選んだ４色のカラーパレットでデザインをテストするツールです。\n※テスト中', 
        link: '/StyleTester',
        thumbnail: '/images/style-tester-tool-thumbnail.jpg'
    },
    { 
        id: 7, 
        title: 'tmpToolG', 
        description: '一時的なツールGです。', 
        link: '/ToolsG',
        thumbnail: '/images/tmp-g-thumbnail.jpg'
    },
    { 
        id: 8, 
        title: 'tmp ToolH', 
        description: '一時的なツールHです。', 
        link: '/ToolsH',
        thumbnail: '/images/tmp-h-thumbnail.jpg'
    },
];

export default function ToolsSection() {
    return (
        <section id="tools" className={styles.section}>
            <h2>Tools</h2>
            <div className={styles.projectGrid}>
                {tools.map(tool => (
                    // Linkコンポーネントを使用し、カード全体をクリック可能にする
                    // 注意: Linkタグの子要素には必ず1つの要素が必要です。
                    // 今回は `projectItem` を子とします。
                    <Link href={tool.link} key={tool.id} className={styles.projectLinkWrapper}>
                        <div 
                            className={styles.projectItem}
                            // 💡 style属性で背景画像を動的に設定
                            style={{ backgroundImage: `url(${tool.thumbnail})` }} 
                        >
                            {/* 💡 テキストの視認性を確保するオーバーレイはCSSで::beforeを使用 */}
                            <h3 className={styles.toolTitle}>{tool.title}</h3>
                            {/* 💡 descriptionは改行文字で分割して表示 */}
                            {tool.description && (
                                <div className={styles.toolDescription}>
                                    {tool.description.split('\n').map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}