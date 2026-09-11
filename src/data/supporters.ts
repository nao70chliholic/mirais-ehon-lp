/**
 * スポンサー・支援者の掲載データ
 *
 * ★ここが空のあいだは、セクションに「準備中」の案内だけが出ます。
 *   情報が揃った順に配列へ足していけば、そのまま表示されます。
 *   ページ側のコードを触る必要はありません。
 *
 * ★掲載は「本人の同意が取れている方のみ」。
 *   READYFORの支援者名をそのまま転載しないこと。
 */

export type Sponsor = {
  /** 表示名（会社名・団体名・お名前） */
  name: string;
  /** 一言紹介（1〜2行） */
  description?: string;
  /** 公式サイト・SNS・活動ページ */
  url?: string;
  /** public/ 配下のロゴ画像パス（法人のみ。例: '/sponsors/example.png'） */
  logo?: string;
};

/**
 * プレミアム法人スポンサー（2社）
 * ロゴは大サイズで表示。`logo` に public/sponsors/ 配下のパスを入れる。
 */
export const premiumCorporateSponsors: Sponsor[] = [
  {
    name: '株式会社ハゴロモ',
    url: 'https://www.hagoromo.com/',
    // logo: '/sponsors/hagoromo.png',
  },
  {
    name: '三ツ和商事株式会社',
    url: 'https://mitsuwa-shoji.co.jp/',
    // logo: '/sponsors/mitsuwa-shoji.png',
  },
];

/**
 * 法人スポンサー（2社）
 * ロゴは中サイズで表示。
 */
export const corporateSponsors: Sponsor[] = [
  {
    name: '株式会社HalScene',
    url: 'https://halscene.com/',
    // logo: '/sponsors/halscene.png',
  },
  {
    name: '2.5合同会社',
    url: 'https://niitengo.co.jp/',
    // logo: '/sponsors/niitengo.png',
  },
];

/**
 * 個人スポンサー（4名）
 * お名前のみ。リンクは希望された方だけ `url` を入れる。
 */
export const individualSponsors: Sponsor[] = [
  { name: 'norigapore' }, // リンク掲載なしのご希望
  { name: 'かくう', url: 'https://note.com/kakuu3594' },
  { name: '青木 祐利', url: 'https://app.notion.com/p/Only-One-_-3522471365f18051822cc2330894efde?source=copy_link' },
  { name: 'ましもん', url: 'https://awababy.tech/' },
];

/** 想定件数。実データが入るまでの案内文に使う */
export const sponsorCounts = {
  premiumCorporate: 2,
  corporate: 2,
  individual: 4,
} as const;

/**
 * Special Thanks（お名前掲載に同意いただいた支援者の皆さま）
 * LINEオープンチャットで同意を確認できた方から順に追加する。
 */
export const specialThanks: string[] = [];

/**
 * 応援コメント。
 * READYFORに届いたコメントのうち、掲載の同意が取れたものを入れる。
 * 空のあいだはセクションごと非表示になる。
 */
export type SupportVoice = {
  body: string;
  name: string;
  note?: string;
};

export const supportVoices: SupportVoice[] = [];

/**
 * ★掲載候補（まだページには出ません）
 *
 * READYFORの応援コメント一覧から、絵本の内容に触れているものを抜き出したもの。
 * 掲載の同意が取れたコメントを supportVoices へ移すと、ページに表示されます。
 * READYFOR上で公開されている表示名をそのまま使っているため、
 * 転載の可否は必ず本人へ確認すること。
 */
export const supportVoiceCandidates: SupportVoice[] = [
  {
    body: '完成が楽しみです。ハードカバーになりますように…！',
    name: 'ともりん',
    note: '2026年8月31日 / ハードカバーで決定しました',
  },
  {
    body: 'だいすき♡の気持ちがつながって、笑顔の親子が増えますように！応援しています',
    name: 'いけちょ',
    note: '2026年8月29日',
  },
  {
    body: 'MIRAISは卒業して暫く経ちますが、来年4歳になる息子と一緒に読んで楽しみたいと思います。',
    name: 'みっちゃん',
    note: 'MIRAIS卒業生 / 2026年8月30日',
  },
  {
    body: '育休が来る未来はまだ先ですが、自分と自分の両親との関係性を思い出した時、きっと素敵な絵本なんだろうなと思いました。世界の全ての親子が幸せでありますように',
    name: 'Cさん',
    note: '2026年8月27日 / ※表示名は要確認',
  },
  {
    body: '子育てしたことは無いですが、ナナゼロさんとのコラボライブで共感しました。',
    name: 'Kyun',
    note: '2026年8月23日',
  },
  {
    body: 'わたしには小さな子がいないので、絵本ではなく、応援をさせていただきました。',
    name: 'モニカ',
    note: '2026年8月23日',
  },
];
