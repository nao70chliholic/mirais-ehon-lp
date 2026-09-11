/**
 * MIRAISえほん プロジェクト基本データ
 *
 * ★更新はこのファイルだけ触れば済むようにしています。
 *   進捗が動いたら roadmap の status と latestNews、lastUpdated を書き換えてください。
 */

export const READYFOR_URL = 'https://readyfor.jp/projects/mirais-storybook';

/** クラウドファンディング最終実績 */
export const crowdfunding = {
  goalAmount: 1_200_000,
  totalAmount: 1_749_000,
  supporterCount: 199,
  achievementRate: '145.75',
  periodStart: '2026年8月1日',
  periodEnd: '2026年8月31日',
  /** ネクストゴール（180万円）は未達。ハードカバー化はクラファン終了後に決定 */
  nextGoalAmount: 1_800_000,
  hardcoverDecided: true,
} as const;

/** お届け予定時期（READYFORの実行予定日と揃えること） */
export const deliveryTarget = '2026年12月中旬';

/** このページの最終更新日 */
export const lastUpdated = '2026年9月11日';

/**
 * 近況（3行程度）。
 * 日付を固定で書くと過ぎた瞬間に古くなるので、いま起きていることだけを書く。
 */
export const latestNews: string[] = [
  'ストーリーの最終調整と、れおんさんによる本描きを進めています。',
  '印刷仕様（判型・紙・製本）は9月中旬に決定予定です。',
  '支援してくださった方へのお礼参りライブを、順次おこなっています。',
];

export type RoadmapStatus = 'done' | 'now' | 'todo';

export type RoadmapStep = {
  label: string;
  title: string;
  body: string;
  status: RoadmapStatus;
};

/**
 * 制作ロードマップ。
 * 「9月末に試し刷り」のような日付固定の書き方は、過ぎた瞬間に嘘になるので使わない。
 */
export const roadmap: RoadmapStep[] = [
  {
    label: '2026年8月',
    title: 'クラウドファンディング成立',
    body: '199名の皆さまから1,749,000円のご支援をいただきました。支援総額と必要冊数を確認し、ハードカバーでのお届けが決まりました。',
    status: 'done',
  },
  {
    label: '2026年9月',
    title: 'ストーリー・イラスト制作／印刷仕様の決定',
    body: '物語を最終調整しながら、イラストの本描きを進めています。印刷仕様は9月中旬に決定予定です。',
    status: 'now',
  },
  {
    label: '2026年10月',
    title: '試し刷り・最終調整・入稿',
    body: '実際に刷ってみて、色や紙の手ざわりを確かめ、一冊の本として仕上げます。',
    status: 'todo',
  },
  {
    label: '2026年11月',
    title: '印刷・製本',
    body: 'ハードカバーの絵本として印刷・製本します。',
    status: 'todo',
  },
  {
    label: '2026年12月',
    title: '支援者の皆さまへお届け',
    body: `${deliveryTarget}までに、ご支援くださった皆さまのお手元へお届けします。`,
    status: 'todo',
  },
];

/** 絵本の仕様 */
export const bookSpec = {
  target: '4〜6歳のお子さんと親御さん',
  format: '24ページ前後・ハードカバー',
  formatNote: 'ソフトカバーから変更し、ハードカバーでお届けします',
  readingTime: '寝る前の5分間',
  character: 'うさぎの「ベイビールナ」',
  specNote: '判型・紙・製本の詳細は2026年9月中旬に決定予定です。',
} as const;

/** 動画クレジットの1行 */
export type VideoCreditLine = {
  /** 役割（例: 'BGM'）。役割名を出さない場合は省略 */
  role?: string;
  name: string;
  url?: string;
};

/** コンセプトムービー（48秒） */
export const conceptVideo = {
  youtubeId: '', // YouTube埋め込みに戻す場合は 'bFPtuHewNjU'
  src: '/videos/MIRAIS_ehon_CM_LP_1080p.mp4?v=2',
  heading: 'MIRAISえほんプロジェクト コンセプトムービー',
  credits: [
    { role: '動画音声協力', name: '八木なお', url: 'https://lit.link/yaginao' },
  ] as VideoCreditLine[],
};

/**
 * 家族の未来のイメージ動画（声の美容液 × MIRAIS）
 *
 * ★youtubeId か src のどちらかを入れるとページに表示されます。
 *   両方空のあいだは、このセクションごと非表示です。
 *   youtubeId は https://youtu.be/XXXXXXXXXXX の XXXXXXXXXXX の部分。
 */
export const familyVideo = {
  youtubeId: 'roABC8Ka7Sk',
  src: '', // mp4を直接置く場合のみ使用（youtubeId が優先）
  heading: '【声の美容液】咲紀 × MIRAIS「家族で読む『だいすき』」',
  credits: [
    { role: '朗読', name: '咲紀', url: 'https://lit.link/masakix2nd' },
    { role: '脚本原案', name: 'aya', url: 'https://lit.link/inza20261123' },
  ] as VideoCreditLine[],
};
