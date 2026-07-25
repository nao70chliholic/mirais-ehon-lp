const fs = require('fs');
const filePath = 'src/app/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Update imports
content = content.replace(
  /import \{ \n  Star, BookOpen, \n  Users, CheckCircle, ArrowRight, Heart, PenTool, Image as ImageIcon, MessagesSquare, Smile\n\} from 'lucide-react';/,
  "import { \n  Star, BookOpen, Camera, MessageCircle,\n  Users, CheckCircle, ArrowRight, Heart, PenTool, Image as ImageIcon, MessagesSquare, Smile\n} from 'lucide-react';"
);

// Replace lines 328 to 439
const lines = content.split('\n');
const startLine = 328; // 1-indexed
const endLine = 439; // 1-indexed

const newBlock = `
{/* 9. 制作ドキュメント */}
      <section className="py-24 md:py-36 px-6 bg-white relative overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              この絵本は、<br className="md:hidden" />みんなで育てています。
            </motion.h2>
            <p className="text-lg text-[#5d4037] leading-relaxed max-w-2xl mx-auto font-medium pt-4">
              ここまでに、数十回のミーティングを重ねました。<br />
              親たちが自分の本音を書き出し、何度も話し合い、イラストを描き、ようやくここまで来ました。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn} className="bg-[#f4f7f5] rounded-3xl p-8 aspect-video flex flex-col items-center justify-center border-2 border-dashed border-[#86bfa0] text-[#5d4037]/60 relative group overflow-hidden">
              <Camera className="w-10 h-10 mb-4" />
              <p className="font-bold">オンライン会議の様子</p>
              <p className="text-sm mt-2">（※後ほど写真差し替え）</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[#f4f7f5] rounded-3xl p-8 aspect-video flex flex-col items-center justify-center border-2 border-dashed border-[#86bfa0] text-[#5d4037]/60 relative group overflow-hidden">
              <MessageCircle className="w-10 h-10 mb-4" />
              <p className="font-bold">付箋が並ぶアイデア出し（Miro）</p>
              <p className="text-sm mt-2">（※後ほど写真差し替え）</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[#f4f7f5] rounded-3xl p-8 aspect-video flex flex-col items-center justify-center border-2 border-dashed border-[#86bfa0] text-[#5d4037]/60 relative group overflow-hidden">
              <PenTool className="w-10 h-10 mb-4" />
              <p className="font-bold">イラストのラフ画</p>
              <p className="text-sm mt-2">（※後ほど写真差し替え）</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[#f4f7f5] rounded-3xl p-8 aspect-video flex flex-col items-center justify-center border-2 border-dashed border-[#86bfa0] text-[#5d4037]/60 relative group overflow-hidden">
              <BookOpen className="w-10 h-10 mb-4" />
              <p className="font-bold">試作品・読み聞かせテスト</p>
              <p className="text-sm mt-2">（※後ほど写真差し替え）</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

{/* 10. ロードマップ */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              120万円は「ゴール」ではなく、<br/>
              プロジェクトを育てるスタートです。
            </motion.h2>
          </div>

          <motion.div variants={fadeIn}>
            <h3 className="text-2xl md:text-3xl font-bold text-[#5d4037] text-center mb-12">ロードマップ：120万円で何ができるか</h3>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-start bg-white p-6 md:p-8 rounded-3xl border-l-8 border-rose-400 shadow-sm">
                <Heart className="w-10 h-10 text-rose-400 shrink-0 mr-6 mt-1" />
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#5d4037] mb-3">120万円：初版制作・発送（ファーストゴール）</h4>
                  <p className="text-[#5d4037] text-lg leading-relaxed">第1弾絵本を制作し、初版200冊を印刷・発送。プロジェクトを次につなげる広報活動を行います。</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 md:p-8 rounded-3xl border-l-8 border-amber-400 shadow-sm">
                <Star className="w-10 h-10 text-amber-400 shrink-0 mr-6 mt-1" />
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#5d4037] mb-3">ストレッチゴール：ハードカバー化</h4>
                  <p className="text-[#5d4037] text-lg leading-relaxed">より長く、美しく残せるように絵本のハードカバー化を実現します。</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 md:p-8 rounded-3xl border-l-8 border-emerald-400 shadow-sm">
                <Users className="w-10 h-10 text-emerald-400 shrink-0 mr-6 mt-1" />
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#5d4037] mb-3">その先：寄贈・販売展開・第2弾へ</h4>
                  <p className="text-[#5d4037] text-lg leading-relaxed">絵本を必要とする施設への寄贈、一般販売展開、そして新たなテーマでの第2弾制作へと活動を広げます。</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-16 space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-[#f0a8b9] leading-relaxed">
                このプロジェクトは、<br/>絵本をつくって終わりではありません。
              </p>
              <p className="text-xl text-[#5d4037] leading-relaxed max-w-2xl mx-auto">
                MIRAISえほんをきっかけに、親の気持ちを未来へ残す文化を育てていきます。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

{/* 11. 応援コメント */}
      <section className="py-24 md:py-36 px-6 bg-[#fefce8] relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037]">
              応援の声が届いています
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-[2rem] shadow-sm relative">
              <MessagesSquare className="absolute top-6 right-6 w-8 h-8 text-[#f9e28c] opacity-50" />
              <p className="text-[#5d4037] font-bold text-lg mb-6 relative z-10 leading-relaxed">
                「この絵本が完成したら、絶対に自分の子どもにも読ませたいです！親の等身大の気持ちがこんなに優しく表現されているなんて感動しました。」
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f4f7f5] rounded-full flex items-center justify-center text-[#86bfa0] font-bold">M</div>
                <div>
                  <p className="font-bold text-[#5d4037]">MIRAIS卒業生</p>
                  <p className="text-xs text-[#5d4037]/70">2歳児のママ</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 rounded-[2rem] shadow-sm relative">
              <MessagesSquare className="absolute top-6 right-6 w-8 h-8 text-[#f9e28c] opacity-50" />
              <p className="text-[#5d4037] font-bold text-lg mb-6 relative z-10 leading-relaxed">
                「いつも上手く笑えなくて自己嫌悪に陥る日々ですが、この絵本ラフを読んで救われました。私たちに必要なのは、こういう『完璧じゃない自分を肯定する本』です。」
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f4f7f5] rounded-full flex items-center justify-center text-[#86bfa0] font-bold">K</div>
                <div>
                  <p className="font-bold text-[#5d4037]">プロジェクト応援者</p>
                  <p className="text-xs text-[#5d4037]/70">育休中のパパ</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 rounded-[2rem] shadow-sm relative">
              <MessagesSquare className="absolute top-6 right-6 w-8 h-8 text-[#f9e28c] opacity-50" />
              <p className="text-[#5d4037] font-bold text-lg mb-6 relative z-10 leading-relaxed">
                「MIRAISの皆さんの熱量がすごい！ただの絵本制作ではなく、一つのムーブメントを作ろうとする姿勢に胸を打たれました。全力で応援します！」
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f4f7f5] rounded-full flex items-center justify-center text-[#86bfa0] font-bold">A</div>
                <div>
                  <p className="font-bold text-[#5d4037]">パートナー企業</p>
                  <p className="text-xs text-[#5d4037]/70">出版関係者</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

{/* 12. 資金の使い道 */}
      <section className="py-24 md:py-36 px-6 bg-white relative overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="bg-[#f4f7f5] p-8 md:p-16 rounded-[3rem] shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#86bfa0] text-center mb-10">資金の使い道（目安）</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 円グラフ */}
              <div className="flex justify-center py-6">
                <div 
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-lg border-8 border-white" 
                  style={{ background: 'conic-gradient(#fb7185 0% 35%, #34d399 35% 58%, #fbbf24 58% 76%, #60a5fa 76% 91%, #c084fc 91% 96%, #94a3b8 96% 100%)' }}
                ></div>
              </div>
              
              {/* 凡例と注記 */}
              <div className="space-y-8">
                <div className="space-y-4 text-[#5d4037] text-lg font-medium leading-relaxed">
                  <div className="flex items-center"><div className="w-4 h-4 bg-rose-400 rounded-full mr-3 shrink-0"></div> MIRAIS入会・リターン提供費</div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-emerald-400 rounded-full mr-3 shrink-0"></div> 印刷・製本費</div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-amber-400 rounded-full mr-3 shrink-0"></div> 増刷・寄贈・今後の展開</div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-blue-400 rounded-full mr-3 shrink-0"></div> READYFOR手数料</div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-purple-400 rounded-full mr-3 shrink-0"></div> 広報・発送・運営費</div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-slate-400 rounded-full mr-3 shrink-0"></div> 絵本制作・編集費</div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-emerald-100">
                  <p className="text-sm text-[#5d4037] leading-relaxed mb-4">
                    ※現在の想定リターン構成に基づく目安であり、支援内容によって割合は変動する前提です。
                  </p>
                  <div className="p-4 bg-[#fefce8] border border-[#f9e28c] rounded-xl text-xs text-[#5d4037] leading-relaxed">
                    <strong>注記：</strong><br/>
                    「MIRAIS入会・再参加＋えほん応援コース」に含まれる参加費は、コミュニティの運営および活動提供に活用します。それ以外のご支援は、MIRAISえほん制作・リターン提供・プロジェクト運営に大切に活用します。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
`;

const newLines = [...lines.slice(0, startLine - 1), newBlock.trim(), ...lines.slice(endLine)];
fs.writeFileSync(filePath, newLines.join('\n'));
console.log('Update complete');
