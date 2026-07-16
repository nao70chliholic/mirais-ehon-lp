'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Heart, Star, BookOpen, 
  ChevronDown, Users, CheckCircle, ArrowRight
} from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function CrowdfundingLP() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800 selection:bg-rose-200 overflow-hidden font-zen">
      
      {/* 1. ファーストビュー */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 pt-20 pb-16">
        {/* 背景の有機的グラデーション */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-rose-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-amber-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto w-full"
        >
          <div className="text-center space-y-10">
            <motion.div variants={fadeIn}>
              <span className="inline-block bg-white/60 backdrop-blur-md text-rose-600 px-6 py-2 rounded-full text-sm font-bold tracking-widest mb-6 shadow-[0_4px_20px_-4px_rgba(225,29,72,0.1)] border border-white/80">
                MIRAIS 8周年記念プロジェクト
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.3] text-slate-900 tracking-tight">
              うまくできない日も、<br className="hidden md:block"/>
              <span className="relative inline-block mt-2">
                <span className="relative z-10">大好きは残せる。</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-5 bg-rose-200/60 -z-10 rounded-full transform -rotate-1"></span>
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              育休コミュニティMIRAISの1,800人の声から、<br className="hidden md:block"/>親子で読み返す絵本をつくります。
            </motion.p>

            <motion.div variants={fadeIn} className="mt-16 w-full max-w-2xl mx-auto aspect-square rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-[8px] border-white/80 backdrop-blur-sm relative group bg-white">
              <img 
                src="/luna_reading.png" 
                alt="絵本を読むルナちゃん" 
                className="object-contain w-full h-full transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            
            <motion.div variants={fadeIn} className="pt-10 flex justify-center">
               <a href="#returns" className="group relative inline-flex items-center justify-center px-8 md:px-12 py-5 text-lg font-bold text-white transition-all bg-slate-900 rounded-full hover:bg-rose-500 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1">
                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                 <span className="relative flex items-center">
                   応援のかたちを見る <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                 </span>
               </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. 共感 */}
      <section className="py-32 px-6 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="text-center space-y-4">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-slate-800 leading-tight">
              子育てをしていると、<br className="md:hidden"/>こんな日はありませんか。
            </motion.h2>
            <motion.p variants={fadeIn} className="text-rose-500 font-bold tracking-widest text-sm md:text-base">
              完璧な親なんて、たぶんどこにもいません。
            </motion.p>
          </div>

          <div className="space-y-10 text-center text-lg md:text-xl text-slate-600 leading-loose font-serif">
            <motion.p variants={fadeIn}>早く寝てほしくて、つい強い声を出してしまった夜。</motion.p>
            <motion.p variants={fadeIn}>保育園に子どもを預けて、後ろ髪を引かれながら向かった朝。</motion.p>
            <motion.p variants={fadeIn}>「先にやることあるでしょ！」と言ったあとの、小さな背中。</motion.p>
            <motion.p variants={fadeIn}>下の子が生まれて、上の子に我慢をさせてしまった日。</motion.p>
            
            <motion.div variants={fadeIn} className="flex justify-center py-8">
               <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent opacity-50"></div>
            </motion.div>

            <motion.p variants={fadeIn} className="text-slate-800">
              そして、寝顔を見ながら思うのです。<br/>
              「今日も、ちゃんと笑ってあげられなかったな」って。
            </motion.p>
            <motion.p variants={fadeIn} className="text-slate-800 font-bold text-xl md:text-2xl mt-8">
              でも——思い出してみてください。<br/>
              その「ごめんね」の奥には、いつだって「大好き」がありました。
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="relative mt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-amber-50 transform -skew-y-2 rounded-3xl -z-10"></div>
            <div className="bg-white/60 backdrop-blur-lg border border-white/80 p-8 md:p-12 rounded-3xl shadow-lg text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-rose-900 leading-relaxed">
                うまくできなかった日ほど、<br/>
                大好きだったことを、覚えていたい。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. 問題提起 */}
      <section className="py-32 px-6 bg-slate-900 text-slate-100 relative overflow-hidden">
        {/* 背景の微妙なノイズ・星空感 */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black"></div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto relative z-10 text-center space-y-12"
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
              愛情は毎日あふれているのに、<br/>残す場所がない。
            </h2>
            <p className="text-slate-400 font-medium tracking-wide">今の親たちは、「もっと」に囲まれています。</p>
          </motion.div>

          <div className="text-lg md:text-xl text-slate-300 leading-loose space-y-8 font-serif">
            <motion.p variants={fadeIn}>
              SNSを開けば、キラキラした育児が流れてきます。<br/>
              検索すれば、「正解」らしきものが無限に出てきます。<br/>
              そのたびに、「私はちゃんとできていないかもしれない」と、<br className="hidden md:block"/>小さく削られていく。
            </motion.p>
            <motion.p variants={fadeIn}>
              写真は何千枚も撮っているのに、<br/>
              あの日の気持ち——生まれた瞬間の震えるような喜びも、<br/>
              眠れない夜の不安も、初めて「ママ」と呼ばれた日のことも、<br/>
              言葉にしないまま、毎日の忙しさに流れていきます。
            </motion.p>
            <motion.p variants={fadeIn} className="text-rose-200">
              親の「大好き」は、確かにあったのに。<br/>
              それを手渡せる形が、今はまだ、ありません。
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 4. MIRAISとは */}
      <section className="py-32 px-6 bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center space-y-4 mb-20">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-slate-800 leading-tight">
              「育休を、ただの休みで終わらせない」<br className="md:hidden"/>コミュニティから。
            </motion.h2>
            <motion.p variants={fadeIn} className="text-emerald-600 font-bold tracking-widest text-sm">
              MIRAIS（ミライズ）について
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn} className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p>
                MIRAISは、2018年に始まった育休者のコミュニティです。産休・育休中、復職前後のメンバーが集まり、「育休を、自分と家族の未来を考える時間に変える」活動を続けてきました。
              </p>
              <p>
                私たちが8年間ずっと大切にしてきたのは、「母である前に、一人の人間として、自分の人生を生きていい」ということ。
              </p>
              <p className="font-bold text-slate-800">
                1,800人が通ってきた「育休のリアル」があるから、つくれる絵本があります。
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="relative group">
               <div className="absolute inset-0 bg-emerald-200 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6 opacity-50"></div>
               <img src="https://placehold.co/600x450/e2e8f0/475569?text=MIRAIS+Members" alt="MIRAISメンバー" className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/3] border border-white" />
            </motion.div>
          </div>
          
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { number: "1,800+", label: "累計参加メンバー", color: "emerald" },
              { number: "8年目", label: "コミュニティの歩み", color: "amber" },
              { number: "340+", label: "出版支援実績", color: "rose" }
            ].map((stat, idx) => (
              <div key={idx} className={`bg-${stat.color}-50/50 backdrop-blur-sm border border-${stat.color}-100 p-8 rounded-3xl text-center hover:bg-${stat.color}-50 transition-colors`}>
                <div className={`text-4xl font-serif font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
                <div className="text-sm font-bold text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 5. なぜ絵本なのか */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#fdfbf7] to-amber-50/50">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-20"
        >
          <div className="text-center space-y-4">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-slate-800">
              なぜ、絵本なのか。
            </motion.h2>
            <motion.p variants={fadeIn} className="text-amber-600 font-bold tracking-widest text-sm">
              「気持ちを残す」ための、一番やさしい形。
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: BookOpen, color: "amber", title: "絵本は、残るから。", 
                desc: "SNSの投稿は流れていきます。でも絵本は、本棚に立っています。5年後も、10年後も、ふとした日に開くことができます。" 
              },
              { 
                icon: Users, color: "rose", title: "親子で「一緒に」読むから。", 
                desc: "手紙では少し重い。口で言うのは照れくさい。絵本なら、膝の上で同じページを見ながら自然な対話が生まれます。" 
              },
              { 
                icon: Star, color: "emerald", title: "物語でしか届かないから。", 
                desc: "「愛されている」と説明しても届かない。キャラクターと一緒に感じたことは心に残ります。だから子どもが読んで楽しい絵本を作ります。" 
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="relative group">
                <div className={`absolute inset-0 bg-${item.color}-100 rounded-3xl transform transition-transform group-hover:scale-105 group-hover:rotate-1 opacity-50`}></div>
                <div className="relative bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-white shadow-sm hover:shadow-xl transition-shadow h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-${item.color}-50 flex items-center justify-center mb-8 border border-${item.color}-100 text-${item.color}-500 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-800 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. 絵本の紹介 */}
      <section className="py-32 px-6 bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-20"
        >
          <div className="text-center space-y-4">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-slate-800">
              どんな絵本になるの？
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-rose-50/30 p-8 md:p-12 rounded-[2.5rem] border border-rose-100">
            <motion.div variants={fadeIn} className="space-y-8">
              <h3 className="text-2xl font-serif font-bold text-slate-800">
                MIRAISえほん 第1弾<br/>
                <span className="text-lg text-slate-500 font-sans font-normal mt-2 block">（タイトルは制作中）</span>
              </h3>
              <ul className="space-y-5 text-slate-700 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-rose-400 mr-4 shrink-0 mt-1" />
                  <span><strong>対象:</strong> 4〜6歳のお子さんと、その親御さん</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-rose-400 mr-4 shrink-0 mt-1" />
                  <span><strong>仕様:</strong> 24ページ前後・ソフトカバー<br/><span className="text-sm text-slate-500">※ネクストゴールでハードカバー化を目指します</span></span>
                </li>
              </ul>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-600 leading-relaxed font-medium">
                描きたいのは、0〜2歳の子育て真っ最中に親が感じていた気持ち。それを、少し大きくなった4〜6歳のわが子と一緒に読み返せるように設計します。
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="relative group">
               <div className="absolute inset-0 bg-rose-200 blur-2xl opacity-40 rounded-full group-hover:opacity-60 transition-opacity"></div>
               <img src="/luna_chat.png" alt="お話しするルナちゃん" className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl transition-transform group-hover:scale-105" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 11. リターン紹介 (Pricing/Support) */}
      <section id="returns" className="py-32 px-6 bg-slate-50">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-16"
        >
          <div className="text-center space-y-4">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-slate-800">
              応援のかたち
            </motion.h2>
            <motion.p variants={fadeIn} className="text-slate-500 font-medium tracking-widest text-sm">
              あなたに合ったコースをお選びください
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* 3000円 */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col group">
              <div className="mb-6">
                <h3 className="font-bold text-xl text-slate-800">まずは応援コース</h3>
                <div className="text-3xl font-bold text-slate-400 mt-4 group-hover:text-rose-400 transition-colors">¥3,000</div>
              </div>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                リターン品なしの、純粋な応援。お礼のメッセージと、制作の裏側がわかる活動報告をお届けします。
              </p>
              <button className="w-full py-4 rounded-xl bg-slate-50 text-slate-600 font-bold hover:bg-slate-100 transition-colors">
                このコースで応援する
              </button>
            </motion.div>

            {/* 5000円 (Highlight) */}
            <motion.div variants={fadeIn} className="relative bg-white p-8 rounded-[2rem] border-2 border-rose-400 shadow-xl flex flex-col transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white font-bold px-6 py-1.5 rounded-full text-sm shadow-md">
                おすすめ
              </div>
              <div className="mb-6 mt-2">
                <h3 className="font-bold text-xl text-slate-800">絵本1冊お届けコース</h3>
                <div className="text-4xl font-bold text-rose-500 mt-4">¥5,000</div>
              </div>
              <div className="text-slate-600 mb-8 flex-grow leading-relaxed space-y-4">
                <p className="font-bold text-slate-800">完成した絵本1冊 ＋ お礼メッセージ</p>
                <p className="text-sm">絵本の代金ではなく、制作全体を応援いただき、完成した1冊をお届けするコースです。</p>
              </div>
              <button className="w-full py-4 rounded-xl bg-rose-500 text-white font-bold hover:bg-rose-600 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                絵本を受け取って応援
              </button>
            </motion.div>

            {/* 10000円 */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col group">
              <div className="mb-6">
                <h3 className="font-bold text-xl text-slate-800">お名前掲載コース</h3>
                <div className="text-3xl font-bold text-slate-400 mt-4 group-hover:text-rose-400 transition-colors">¥10,000</div>
              </div>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                絵本の巻末に、お名前を掲載します ＋ 絵本1冊。この絵本が読み継がれるかぎり、あなたの応援も一緒に残ります。
              </p>
              <button className="w-full py-4 rounded-xl bg-slate-50 text-slate-600 font-bold hover:bg-slate-100 transition-colors">
                名前を残して応援する
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 14. 最後のメッセージ */}
      <section className="py-40 px-6 bg-slate-900 text-slate-300 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://placehold.co/1920x1080/0f172a/1e293b?text=+')] bg-cover mix-blend-screen"></div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center space-y-16 relative z-10"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            今日も、うまくできなかったあなたへ。
          </motion.h2>

          <div className="space-y-10 text-lg md:text-xl leading-loose font-serif font-medium">
            <motion.p variants={fadeIn}>
              このページを、最後まで読んでくださってありがとうございます。
            </motion.p>
            
            <motion.div variants={fadeIn} className="py-8">
              <p className="text-2xl md:text-3xl text-rose-300 font-bold">
                うまくできない日も、大好きは残せる。
              </p>
            </motion.div>
            
            <motion.p variants={fadeIn}>
              その「大好き」を、10年後のあなたと、<br/>
              大きくなったあの子のために、一緒に形にしませんか。
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="pt-20">
             <a href="#returns" className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white transition-all bg-rose-500 rounded-full hover:bg-rose-600 overflow-hidden shadow-[0_0_40px_rgba(244,63,94,0.3)] hover:shadow-[0_0_60px_rgba(244,63,94,0.5)] hover:-translate-y-1">
               <span className="relative flex items-center tracking-wider">
                 プロジェクトに参加する
               </span>
             </a>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
