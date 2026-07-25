import re

with open('src/app/page_draft.tsx', 'r') as f:
    draft = f.read()

def extract_section(draft_text, start_comment, end_comment=None):
    start_idx = draft_text.find(start_comment)
    if start_idx == -1:
        return ""
    if end_comment:
        end_idx = draft_text.find(end_comment, start_idx)
        if end_idx == -1:
            next_sec = draft_text.find("{/*", start_idx + len(start_comment))
            end_idx = next_sec if next_sec != -1 else len(draft_text)
        return draft_text[start_idx:end_idx].strip()
    return ""

money_section = extract_section(draft, "{/* 8. お金の話・目標金額 */}", "{/* 過去の実績（READYFOR） */}")
returns_section = extract_section(draft, "{/* 11. リターン紹介 */}", "{/* 応援スポンサー */}")
sponsor_section = extract_section(draft, "{/* 応援スポンサー */}", "{/* LINEオープンチャット案内 */}")
line_section = extract_section(draft, "{/* LINEオープンチャット案内 */}", "{/* 12. CTA */}") # actually might be EOF or CTA
if line_section == "":
    line_section = extract_section(draft, "{/* LINEオープンチャット案内 */}", "{/* 13. 最後のメッセージ */}")
comments_section = extract_section(draft, "{/* 7. 応援コメント */}", "{/* 8. お金の話・目標金額 */}")

part1 = """import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Star, BookOpen, 
  Users, CheckCircle, ArrowRight, Heart, PenTool, Image as ImageIcon, MessagesSquare, Smile
} from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function CrowdfundingLP() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#5d4037] selection:bg-rose-200 overflow-hidden font-zen">
      
      {/* 1. ファーストビュー */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 pt-24 pb-16">
        <div className="absolute inset-0 bg-[#fdfbf7] -z-20"></div>
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-rose-100/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-amber-100/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 -z-10"></div>
        
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeIn} className="mb-8">
            <span className="inline-block px-6 py-2 rounded-full bg-white border border-rose-100 text-[#d4b028] font-bold text-sm md:text-base tracking-widest shadow-sm">
              育休コミュニティMIRAIS発！親心を未来に残す絵本
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-4xl md:text-[4rem] font-serif font-bold text-[#5d4037] mb-10 leading-tight">
            うまくできない日も、<br className="md:hidden"/>大好きは残せる。
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-2xl text-[#795548] mb-12 font-medium leading-[2.2]">
            親の「ありのままの気持ち」を、<br/>
            未来の子どもへ手渡す絵本をつくります。
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto mt-4">
             <a href="#returns" className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white transition-all bg-[#f0a8b9] rounded-full hover:bg-rose-400 overflow-hidden shadow-xl hover:shadow-rose-300/50 hover:-translate-y-1 w-full sm:w-auto">
               <span className="relative flex items-center">
                 プロジェクトを応援する <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
               </span>
             </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. はじめに */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto relative z-10 text-center space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              読む絵本ではなく、<br className="md:hidden"/>残す絵本を作りたい。
            </motion.h2>
          </div>

          <div className="text-xl md:text-2xl text-[#5d4037] leading-[2.5] space-y-12">
            <motion.p variants={fadeIn}>
              子どもを愛しているのに、<br/>笑顔でいられなかった日。
            </motion.p>
            <motion.p variants={fadeIn}>
              早く寝てほしいと思った夜。<br/>ひとりになりたいと思った瞬間。
            </motion.p>
            <motion.p variants={fadeIn}>
              でも、その奥には、<br/>いつも子どもへの愛がありました。
            </motion.p>
            <motion.div variants={fadeIn} className="relative mt-24">
              <div className="bg-white border-2 border-dashed border-rose-300 p-10 md:p-16 rounded-[2.5rem] text-center shadow-sm">
                <p className="text-2xl md:text-3xl font-serif font-bold text-[#f0a8b9] leading-[1.8]">
                  私たちが作りたいのは、<br/>
                  そんな親の気持ちを未来へ残す絵本です。
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. MIRAISえほんとは */}
      <section className="py-24 md:py-36 px-6 bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              MIRAISえほんとは
            </motion.h2>
          </div>
          
          <div className="text-xl md:text-2xl text-[#5d4037] leading-[2.5] space-y-8 max-w-3xl mx-auto">
            <motion.p variants={fadeIn}>
              MIRAISえほんは、育休コミュニティMIRAISのメンバーの体験から生まれる物語です。
            </motion.p>
            <motion.p variants={fadeIn} className="font-bold">
              今まさに子育ての真ん中にいる親たちの声をもとに、<br className="hidden md:block"/>
              未来の子どもへ残す一冊を作ります。
            </motion.p>
          </div>
          
          <motion.div variants={fadeIn} className="mt-16 text-center max-w-3xl mx-auto">
             <div className="aspect-video bg-[#fef5f7] rounded-2xl border-2 border-rose-100 flex items-center justify-center overflow-hidden shadow-sm">
               <img src="/luna_sketch.png" alt="MIRAISえほんイメージ" className="h-full object-cover mix-blend-multiply opacity-80" />
             </div>
             <p className="mt-4 text-slate-500 font-medium">※制作中のイメージ画像</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. なぜMIRAISが作るのか */}
      <section className="py-24 md:py-36 px-6 bg-gradient-to-b from-white to-[#fefce8] relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              なぜMIRAISが作るのか
            </motion.h2>
          </div>
          <div className="text-xl md:text-2xl text-[#5d4037] leading-[2.5] space-y-10 max-w-3xl mx-auto">
            <motion.p variants={fadeIn}>
              親子愛を描く絵本は、世の中にたくさんあります。
            </motion.p>
            <motion.p variants={fadeIn}>
              でも、今まさに育休中で、復職を控え、子育てに揺れる親たちの<br/>
              <span className="text-2xl md:text-3xl font-bold text-[#f0a8b9] inline-block my-4">「生きた声」</span><br/>
              から生まれる絵本は、ほとんどありません。
            </motion.p>
            <motion.p variants={fadeIn} className="font-bold text-[#86bfa0] pt-8 text-2xl md:text-3xl">
              だから、MIRAISだから作る意味があります。
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 5. この絵本で届けたいこと */}
      <section className="py-24 md:py-36 px-6 bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center space-y-6 mb-16">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              この絵本で届けたいこと
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeIn} className="bg-[#fef5f7] p-10 md:p-12 rounded-[2.5rem] border border-rose-100 text-center shadow-sm">
              <h3 className="font-bold text-2xl text-[#f0a8b9] mb-6 border-b border-rose-200 pb-4 inline-block">子どもへ</h3>
              <p className="text-[#5d4037] leading-[2.2] text-lg font-medium">「あなたはずっと、大切に思われていた」という変わらない愛を伝えます。</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[#eef7f2] p-10 md:p-12 rounded-[2.5rem] border border-[#a8d5ba] text-center shadow-sm">
              <h3 className="font-bold text-2xl text-[#86bfa0] mb-6 border-b border-[#a8d5ba] pb-4 inline-block">親へ</h3>
              <p className="text-[#5d4037] leading-[2.2] text-lg font-medium">うまくできなかった自分を責めるのではなく、一生懸命だった自分を抱きしめるお守りに。</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[#fefce8] p-10 md:p-12 rounded-[2.5rem] border border-[#f9e28c] text-center shadow-sm">
              <h3 className="font-bold text-2xl text-[#d4b028] mb-6 border-b border-[#f9e28c] pb-4 inline-block">未来の家族へ</h3>
              <p className="text-[#5d4037] leading-[2.2] text-lg font-medium">数年後、一緒に読み返したときに、「こんなこともあったね」と笑い合える時間を届けます。</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 6. MIRAISとは */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center space-y-6 mb-16">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              育休コミュニティMIRAISとは
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center bg-white p-10 md:p-16 rounded-[3rem] shadow-sm">
            <div className="space-y-6 text-lg md:text-xl text-[#5d4037] leading-relaxed">
              <p>MIRAISは、「なんとなく過ごす育休をなくしたい」という想いから生まれた、育休中の親たちが自分らしい人生を考え、つながり、挑戦するコミュニティです。</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-[#86bfa0] mr-3" /> 設立から8年間</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-[#86bfa0] mr-3" /> 参加メンバー約1,800人</li>
              </ul>
              <p className="pt-4 font-bold">代表 栗林真由美</p>
            </div>
            <motion.div variants={fadeIn} className="mx-auto">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-[#f4f7f5] shadow-lg">
                <img src="/mayumi.png" alt="栗林真由美" className="w-full h-full object-cover object-[20%_10%]" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 7. 制作チーム紹介 */}
      <section className="py-24 md:py-36 px-6 bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center space-y-6 mb-16">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              「みんなで作っています」<br className="md:hidden"/>制作チームの紹介
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-rose-100 shadow-md bg-[#f4f7f5]">
                <img src="/naonao.jpg" alt="なおなお" className="w-full h-full object-cover" />
              </div>
              <div><p className="text-sm font-bold text-[#86bfa0] mb-1">発起人 / 副代表</p><p className="font-bold text-[#5d4037] text-xl">なおなお</p></div>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#a8d5ba] shadow-md bg-rose-50">
                <img src="/mayumi.png" alt="栗林真由美" className="w-full h-full object-cover object-[20%_10%]" />
              </div>
              <div><p className="text-sm font-bold text-[#86bfa0] mb-1">代表</p><p className="font-bold text-[#5d4037] text-xl">栗林真由美</p></div>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#f9e28c] shadow-md bg-[#fefce8]">
                <img src="/leon.png" alt="れおん" className="w-full h-full object-cover" />
              </div>
              <div><p className="text-sm font-bold text-[#86bfa0] mb-1">イラストレーター</p><p className="font-bold text-[#5d4037] text-xl">れおん</p></div>
            </motion.div>
          </div>

          <div className="bg-[#fefce8] p-10 md:p-16 rounded-[3rem] shadow-sm">
            <h3 className="text-center font-bold text-2xl text-[#5d4037] mb-12">制作メンバー</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { role: "デザイン担当", name: "ゆきまる" },
                { role: "ライティング", name: "わさびーぬ" },
                { role: "広報・PR", name: "はあち" },
                { role: "進行管理", name: "しょうたん" },
                { role: "復職予定パパ", name: "なっちゃん" },
                { role: "育休中ママ", name: "ゆんちゃん" },
                { role: "コミュニティ運営", name: "まゆゆ" },
              ].map((member, idx) => (
                <motion.div key={idx} variants={fadeIn} className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center border-2 border-[#f9e28c] shadow-sm">
                    <Smile className="w-8 h-8 text-[#d4b028]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#86bfa0] mb-1">{member.role}</p>
                    <p className="font-bold text-[#5d4037]">{member.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto pt-16">
              <div className="rounded-[2rem] overflow-hidden shadow-lg border-[8px] border-white transform md:-rotate-1">
                <img src="/team.jpg" alt="MIRAISえほん制作チーム" className="w-full h-auto object-cover" />
              </div>
              <p className="text-center text-amber-600 font-bold tracking-widest text-sm mt-6">多様なメンバーがそれぞれの強みを活かして制作しています。</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. 絵本の概要 */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center space-y-6 mb-16">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              絵本の概要
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-10 md:p-16 rounded-[3rem] shadow-sm">
            <motion.div variants={fadeIn} className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#5d4037]">MIRAISえほん 第1弾<br/><span className="text-lg text-rose-400 font-sans font-normal mt-2 block">（タイトルは制作中）</span></h3>
              <ul className="space-y-5 text-[#5d4037] text-lg">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-rose-400 mr-4 shrink-0 mt-1" /> <span><strong>対象年齢:</strong> 4〜6歳のお子さんと親御さん</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-rose-400 mr-4 shrink-0 mt-1" /> <span><strong>ページ数・仕様:</strong> 24ページ前後・ソフトカバー</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-rose-400 mr-4 shrink-0 mt-1" /> <span><strong>読み聞かせ時間:</strong> 寝る前の5分間</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-rose-400 mr-4 shrink-0 mt-1" /> <span><strong>主人公:</strong> うさぎの「ベイビールナ」</span></li>
              </ul>
              <div className="p-6 md:p-8 bg-[#fef5f7] rounded-2xl text-[#5d4037] font-medium leading-relaxed shadow-inner">
                <strong>世界観:</strong> やさしくて思いやりがあるけど、ちょっぴりあわてんぼうなルナ。「ちゃんとしたい！」って頑張りすぎて空回りしちゃう姿は、この本を読む親御さんに少し似ています。
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center relative group">
              <div className="absolute inset-0 bg-white blur-xl opacity-60 rounded-full"></div>
              <img src="/luna_sketch.png" alt="ベイビールナ" className="relative w-full max-w-sm mx-auto rounded-3xl mix-blend-multiply transition-transform group-hover:scale-105" />
            </motion.div>
          </div>
        </motion.div>
      </section>

"""

part2 = """
      {/* 13. 最後のメッセージ */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              さいごに
            </motion.h2>
          </div>

          <div className="space-y-16">
            {/* 代表メッセージ */}
            <motion.div variants={fadeIn} className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm relative border-t-8 border-[#86bfa0]">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#f4f7f5] shadow-md bg-rose-50 shrink-0">
                  <img src="/mayumi.png" className="w-full h-full object-cover object-[20%_10%]" alt="栗林真由美" />
                </div>
                <div>
                  <p className="font-bold text-lg text-[#5d4037] mb-1">MIRAISとして</p>
                  <p className="text-xl font-bold text-[#86bfa0]">代表 栗林真由美</p>
                </div>
              </div>
              <div className="space-y-6 text-lg text-[#5d4037] leading-relaxed">
                <p>私たち親から子への溢れるほどの愛が絵本を通してまっすぐ子どもたちへ伝わり、愛されていた確かな記憶と共にこれから未来を生きる親子を温かく繋いでいく一冊へ——。</p>
                <p>そんな願いを込めて挑戦しています。</p>
                <p>一人でも多くのママパパと子どもたちへ届けるため、最後まで誠心誠意走り抜けます。</p>
                <p className="font-bold">ぜひ私たちMIRAISと一緒に、仲間としてこの温かい輪を広げていただけたら幸いです。</p>
              </div>
            </motion.div>

            {/* 発起人メッセージ */}
            <motion.div variants={fadeIn} className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm relative border-t-8 border-[#f0a8b9]">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#f4f7f5] shadow-md bg-[#f4f7f5] shrink-0">
                  <img src="/naonao.jpg" className="w-full h-full object-cover" alt="なおなお" />
                </div>
                <div>
                  <p className="font-bold text-lg text-[#5d4037] mb-1">この絵本に込めた想い</p>
                  <p className="text-xl font-bold text-[#f0a8b9]">発起人 なおなお</p>
                </div>
              </div>
              <div className="space-y-6 text-lg text-[#5d4037] leading-relaxed">
                <p>やさしくしたいのに、怒ってしまう日。<br/>笑っていたいのに、余裕がなくなる日。<br/>寝顔を見ながら、今日もまたうまくできなかったなと思う夜。</p>
                <p>この絵本が、子育ての中で自分を責めてしまう親に届いてほしいです。そして、いつか大きくなった子どもたちへ。<br/>「あなたはずっと、大切に思われていた」<br/>そう伝わる一冊になったらうれしいです。</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 14. 最後のCTA */}
      <section className="py-32 md:py-48 px-6 bg-gradient-to-t from-white to-[#fdfbf7] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[800px] bg-rose-50 blur-[150px] rounded-full opacity-60 -z-10"></div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeIn} className="mb-12">
            <Star className="w-16 h-16 text-[#f9e28c] mx-auto opacity-80" />
          </motion.div>
          
          <motion.p variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-[#5d4037] mb-12 leading-tight">
            うまくできない日も、<br className="md:hidden"/>大好きは残せる。
          </motion.p>
          
          <motion.p variants={fadeIn} className="text-xl md:text-2xl text-[#795548] font-bold mb-16 leading-relaxed">
            親心を未来へ残す一冊を、<br className="hidden md:block"/>一緒に育ててください。
          </motion.p>
          
          <motion.div variants={fadeIn} className="pt-8">
            <p className="text-xl md:text-2xl font-bold text-[#86bfa0] mb-8 bg-white/60 p-4 rounded-2xl inline-block shadow-sm">8月1日より、READYFORにて開始</p>
            <div>
              <a href="#returns" className="group relative inline-flex items-center justify-center px-12 md:px-24 py-6 md:py-8 text-2xl font-bold text-white transition-all bg-[#f0a8b9] rounded-full hover:bg-rose-400 overflow-hidden shadow-2xl hover:shadow-rose-300/50 hover:-translate-y-2 w-full sm:w-auto">
                <span className="relative flex items-center tracking-wider">
                  プロジェクトを応援する <ArrowRight className="ml-4 w-8 h-8 transition-transform group-hover:translate-x-3" />
                </span>
              </a>
            </div>
            <div className="text-[#795548] font-medium space-y-2 text-sm md:text-base mt-6">
              <p>※スムーズにご支援いただくために、事前のREADYFORへの会員登録（無料）をおすすめしております。</p>
              <p className="font-bold">※READYFORのプロジェクトページへ遷移します（準備中）</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
"""

with open('src/app/page.tsx', 'w') as f:
    f.write(part1)
    if money_section:
        f.write("\n\n" + money_section)
    if comments_section:
        f.write("\n\n" + comments_section)
    if returns_section:
        f.write("\n\n" + returns_section)
    if sponsor_section:
        f.write("\n\n" + sponsor_section)
    if line_section:
        f.write("\n\n" + line_section)
    f.write("\n\n" + part2)

