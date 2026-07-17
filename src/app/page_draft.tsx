'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Star, BookOpen, 
  Users, CheckCircle, ArrowRight, Heart, PenTool, Image as ImageIcon, MessagesSquare, Smile
} from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function CrowdfundingLP() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#5d4037] selection:bg-rose-200 overflow-hidden font-zen">

      
      {/* 1. ファーストビュー */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 pt-24 pb-16">
        {/* やさしい水彩風の背景グラデーション */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-[#fef5f7] to-[#fdfbf7] -z-20"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-rose-200/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-amber-100/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-emerald-100/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto w-full"
        >
          <div className="text-center space-y-12">
            <motion.div variants={fadeIn}>
              <span className="inline-block bg-[#f9e28c] text-[#5d4037] px-6 py-2 rounded-full text-sm font-bold tracking-widest shadow-sm">
                MIRAIS 8周年記念プロジェクト
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-bold leading-[1.3] text-[#5d4037] tracking-tight">
              うまくできない日も、<br className="hidden md:block"/>
              <span className="relative inline-block mt-3 md:mt-6">
                <span className="relative z-10">大好きは残せる。</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-5 bg-rose-200/80 -z-10 rounded-full transform -rotate-1"></span>
              </span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="space-y-10 pt-4">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-[#795548] font-bold leading-[2.2]">
                  育休コミュニティMIRAISから生まれた、<br className="hidden md:block"/>
                  親の気持ちを未来の子どもへ残す絵本です。
                </p>
                <p className="text-2xl md:text-3xl text-[#f0a8b9] font-bold leading-relaxed">
                  子育てを頑張る親へ。<br className="md:hidden"/>そして、いつか大きくなる子どもへ。
                </p>
              </div>

              {/* ヒーロー画像プレースホルダー (うさぎの代わり) */}
              <div className="w-full max-w-2xl mx-auto aspect-[4/3] rounded-[2rem] bg-white/60 border-2 border-white backdrop-blur-md shadow-sm flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8 text-rose-300" />
                  </div>
                  <p className="text-rose-400 font-bold tracking-widest text-sm">絵本の表紙イメージ<br/>（現在、心を込めて制作中）</p>
                </div>
              </div>

              <div className="text-lg md:text-xl text-[#5d4037] leading-[2.5] max-w-2xl mx-auto space-y-4 font-medium text-left md:text-center p-6 md:p-0">
                <p>子育ては、きれいな日ばかりではありません。</p>
                <p>怒ってしまう日もあります。<br/>早く寝てほしいと思う夜もあります。<br/>自分を責めてしまう日もあります。</p>
                <p>でも、その奥にはいつも、子どもへの大好きがありました。</p>
                <p className="font-bold text-xl md:text-2xl pt-4 text-[#f0a8b9]">その気持ちを、未来に残す絵本をつくります。</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="pt-12 flex flex-col items-center justify-center space-y-4">
               <p className="text-[#f0a8b9] font-bold text-lg md:text-xl">8月1日 クラウドファンディング開始！</p>
               <a href="#returns" className="group relative inline-flex items-center justify-center px-10 md:px-16 py-6 text-xl font-bold text-white transition-all bg-[#f0a8b9] rounded-full hover:bg-rose-400 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1">
                 <span className="relative flex items-center tracking-wider">
                   プロジェクトを支援する <ArrowRight className="ml-4 w-6 h-6 transition-transform group-hover:translate-x-2" />
                 </span>
               </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. 問題提起（強化版） */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto relative z-10 text-center space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              あんなに悩んだ日も、笑った日も。<br/>
              数年後には、思い出せなくなってしまう。
            </motion.h2>
            <p className="text-rose-400 font-bold tracking-widest text-base">
              子育ての毎日は、あっという間に過ぎていきます。
            </p>
          </div>

          <div className="text-xl md:text-2xl text-[#5d4037] leading-[2.5] space-y-12">
            <motion.p variants={fadeIn}>
              怒ってしまった夜。早く寝てほしかった日。<br/>
              そして、寝顔を見ながら「ごめんね」と思った夜。
            </motion.p>
            <motion.p variants={fadeIn}>
              毎日の忙しさに流されて、<br className="hidden md:block"/>
              その時にあったはずの「大好き」という感情ごと、<br className="hidden md:block"/>
              いつか記憶から消えてしまう。
            </motion.p>
            <motion.div variants={fadeIn} className="relative mt-24">
              <div className="bg-white border-2 border-dashed border-rose-300 p-10 md:p-16 rounded-[2.5rem] text-center shadow-sm">
                <p className="text-2xl md:text-3xl font-serif font-bold text-[#f0a8b9] leading-[1.8]">
                  でも、<br className="md:hidden"/>
                  あの日そこにあった愛だけは、<br/>
                  忘れたくない。
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>


      {/* 3. なぜMIRAISが作るのか */}
      <section className="py-24 md:py-32 px-6 bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              育休中だからこそ、<br className="md:hidden"/>語れた本音がある。
            </motion.h2>
            <p className="text-[#86bfa0] font-bold text-lg">MIRAISがこの絵本をつくる理由</p>
          </div>
          
          <div className="bg-[#fef5f7] p-10 md:p-16 rounded-[3rem] border border-rose-100 shadow-sm relative">
            <div className="space-y-8 text-xl md:text-2xl text-[#5d4037] leading-[2.2]">
              <motion.p variants={fadeIn}>
                MIRAISは、育休中の親たちが自分らしい人生を考え、つながり、挑戦するコミュニティです。8年間、約1,800人の育休メンバーと走ってきました。
              </motion.p>
              <motion.p variants={fadeIn}>
                ここには、「怒ってしまった」「うまくできなかった」という本音を隠さず出し合い、一緒に「次はどうしようか」と考える文化があります。
              </motion.p>
              <motion.p variants={fadeIn} className="font-bold">
                復職前だからこそ残したい気持ちがあります。<br/>
                8年間で積み重なってきた、母たちの飾らない本音。<br/>
                この絵本は、その声から生まれます。
              </motion.p>
            </div>
            
            <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-rose-200">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md bg-rose-50 shrink-0">
                  <img src="/mayumi.png" alt="代表 栗林真由美" className="w-full h-full object-cover object-[20%_10%]" />
                </div>
                <div>
                  <p className="font-bold text-lg text-[#5d4037]">育休コミュニティMIRAIS 代表</p>
                  <p className="text-[#86bfa0] font-bold">栗林真由美</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md bg-[#f4f7f5] shrink-0">
                  <img src="/naonao.jpg" alt="発起人 なおなお" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-lg text-[#5d4037]">発起人 / MIRAIS副代表</p>
                  <p className="text-[#86bfa0] font-bold">なおなお</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>



      {/* 5. なぜ絵本なのか */}
      <section className="py-24 md:py-36 px-6 bg-gradient-to-b from-[#fdfbf7] to-[#fefce8]/60">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-24"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              講座でも、イベントでもなく、<br/>絵本にする理由。
            </motion.h2>
            <motion.p variants={fadeIn} className="text-amber-600 font-bold tracking-widest text-base">
              「気持ちを残す」方法は他にもあります。それでも私たちは絵本を選びました。
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                icon: BookOpen, color: "amber", title: "1. 絵本は、残るから。", 
                desc: "講座は終われば消えます。SNSの投稿は流れていきます。でも絵本は、本棚に立っています。5年後も、10年後も、ふとした日に開くことができます。" 
              },
              { 
                icon: Users, color: "rose", title: "2. 「一緒に」読むものだから。", 
                desc: "手紙では少し重い。口で言うのは照れくさい。絵本なら、膝の上で、同じページを見ながら自然な対話が生まれます。" 
              },
              { 
                icon: Star, color: "emerald", title: "3. 物語でしか届かないから。", 
                desc: "「あなたは愛されている」と説明しても届きません。物語の中でキャラクターと一緒に感じたことは、心に残ります。だから子どもが読んで楽しい絵本を作ります。" 
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="relative group">
                <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border-2 border-dashed border-[#a8d5ba] shadow-sm hover:shadow-xl transition-shadow h-full flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-[#5d4037] mb-6 text-center">{item.title}</h3>
                  <p className="text-[#5d4037] text-lg leading-[2.2] flex-grow">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} className="text-center pt-8">
            <p className="text-2xl md:text-3xl font-serif font-bold text-[#86bfa0] leading-relaxed">
              想いを「伝える」のではなく、<br/>「一緒に読める形」にして手渡す。<br/>それが絵本です。
            </p>
          </motion.div>
        </motion.div>
      </section>


      {/* 7. 絵本の紹介 */}
      <section className="py-24 md:py-36 px-6 bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-20"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037]">
              どんな絵本になるの？
            </motion.h2>
            <p className="text-[#5d4037] text-xl">親子で読み返せる、24ページの絵本です。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-[#fef5f7] p-10 md:p-16 rounded-[3rem] border border-rose-100 shadow-sm">
            <motion.div variants={fadeIn} className="space-y-10">
              <h3 className="text-3xl font-serif font-bold text-[#5d4037] leading-tight">
                MIRAISえほん 第1弾<br/>
                <span className="text-xl text-rose-400 font-sans font-normal mt-4 block">（タイトルは制作中）</span>
              </h3>
              <ul className="space-y-6 text-[#5d4037] text-xl">
                <li className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-rose-400 mr-4 shrink-0 mt-1" />
                  <span><strong>対象:</strong> 4〜6歳のお子さんと、その親御さん</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-rose-400 mr-4 shrink-0 mt-1" />
                  <span><strong>仕様:</strong> 24ページ前後・ソフトカバー<br/><span className="text-base text-slate-500 block mt-2">※ネクストゴールでハードカバー化を目指します</span></span>
                </li>
              </ul>
              <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 text-[#5d4037] text-lg leading-[2.2] font-medium">
                案内役は、うさぎの「ベイビールナ」。<br/><br/>
                やさしくて、思いやりがあって、でもちょっぴりあわてんぼう。
                「ちゃんとしたい!」って頑張りすぎて、空回りしちゃうこともある。
                ——そう、この絵本を手に取るあなたと、あなたのお子さんに、少し似ています。
              </div>
            </motion.div>
            
            {/* 画像 */}
            <motion.div variants={fadeIn} className="relative group text-center">
               <div className="absolute inset-0 bg-white blur-xl opacity-60 rounded-full"></div>
               <img src="/luna_sketch.png" alt="ベイビールナのスケッチ" className="relative w-full max-w-md mx-auto rounded-[2.5rem] mix-blend-multiply transition-transform group-hover:scale-105" />
               <p className="mt-6 text-base text-rose-400 font-bold tracking-widest">制作中のラフスケッチ</p>
            </motion.div>
          </div>

          {/* イラストレーター紹介 */}
          <motion.div variants={fadeIn} className="bg-white p-10 md:p-16 rounded-[3rem] border border-rose-100 shadow-sm mt-12 relative overflow-hidden">
             <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center">
               <div className="mx-auto md:mx-0">
                 <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-[6px] border-rose-50 shadow-lg mx-auto">
                   <img src="/leon.png" alt="イラストレーター れおん" className="w-full h-full object-cover" />
                 </div>
               </div>
               <div className="space-y-6 text-center md:text-left">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#5d4037]">イラストレーター<br className="md:hidden"/><span className="text-[#f0a8b9] ml-0 md:ml-4 text-3xl md:text-4xl">れおん</span> さん</h3>
                 <p className="text-[#5d4037] text-lg leading-relaxed">
                   今回、「ベイビールナ」のキャラクターデザインと絵本のイラストをご担当いただきます。あたたかく、どこかホッとするような素敵なイラストで、親の「大好き」という気持ちをルナに込めて形にしてくださいます。
                 </p>
                 <div className="pt-4">
                   <a href="https://lit.link/leonslab" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-3 bg-[#fdfbf7] border-2 border-[#f0a8b9] text-[#f0a8b9] font-bold rounded-full hover:bg-[#f0a8b9] hover:text-white transition-colors">
                     れおんさんの詳細を見る
                   </a>
                 </div>
               </div>
             </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. 制作ドキュメント */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              「完成品」ではありません。<br/>
              現在進行形の、挑戦のプロセスです。
            </motion.h2>
            <p className="text-[#795548] font-medium text-lg">
              このプロジェクト最大の魅力は、「みんなで作っている」という過程そのものです。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: "企画会議の夜",
                desc: "「どんなメッセージを残したいか？」住む場所も違うメンバーたちがZoomに集まり、夜な夜な議論を重ねました。",
                label: "Meeting",
                icon: <MessagesSquare className="w-5 h-5 text-white" />,
                color: "bg-blue-400"
              },
              {
                title: "なぜ『うさぎのルナ』なのか",
                desc: "子どもに届きやすいキャラクターを模索し、何十枚ものラフスケッチの中から、あわてんぼうで優しいルナが選ばれました。",
                label: "Character",
                icon: <PenTool className="w-5 h-5 text-white" />,
                color: "bg-rose-400"
              },
              {
                title: "親たちの声を集める",
                desc: "1,800人のコミュニティメンバーにアンケートを実施。「うまくいかなかった日のこと」を集め、物語のベースにしました。",
                label: "Voices",
                icon: <Users className="w-5 h-5 text-white" />,
                color: "bg-amber-400"
              },
              {
                title: "イラスト完成・試作",
                desc: "イラストレーターれおんさんの手で、想いが形に。色校正や文字の配置など、細部までこだわり抜いて制作中です。",
                label: "Production",
                icon: <ImageIcon className="w-5 h-5 text-white" />,
                color: "bg-emerald-400"
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative group overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} opacity-10 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110`}></div>
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5d4037] mb-4">{item.title}</h3>
                <p className="text-[#5d4037] leading-relaxed">{item.desc}</p>
                <div className="mt-6 aspect-video bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200">
                  <span className="text-slate-400 font-medium text-sm">※制作風景の写真（ダミー）</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* 5. 仲間紹介 */}
      <section className="py-24 md:py-36 px-6 bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037]">
              絵本づくりに挑む20人の仲間たち
            </motion.h2>
            <p className="text-[#795548] font-medium text-lg">
              育休ママ、復職パパ、プロのクリエイター。多様なメンバーがそれぞれの強みを活かして制作しています。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { role: "イラスト担当", name: "れおん" },
              { role: "デザイン担当", name: "ゆきまる" },
              { role: "ライティング", name: "わさびーぬ" },
              { role: "広報・PR", name: "はあち" },
              { role: "進行管理", name: "しょうたん" },
              { role: "復職予定パパ", name: "なっちゃん" },
              { role: "育休中ママ", name: "ゆんちゃん" },
              { role: "コミュニティ運営", name: "まゆゆ" },
            ].map((member, idx) => (
              <motion.div key={idx} variants={fadeIn} className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-[#fef5f7] flex items-center justify-center border-2 border-rose-100">
                  <Smile className="w-8 h-8 text-rose-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#86bfa0] mb-1">{member.role}</p>
                  <p className="font-bold text-[#5d4037]">{member.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeIn} className="max-w-4xl mx-auto pt-12">
            <div className="rounded-[3rem] overflow-hidden shadow-lg border-[8px] border-white transform md:-rotate-1 bg-[#fefce8]">
              <img src="/team.jpg" alt="MIRAISえほん制作チーム" className="w-full h-auto object-cover" />
            </div>
            <p className="text-center text-amber-600 font-bold tracking-widest text-base mt-6">MIRAISえほん制作チーム</p>
          </motion.div>
        </motion.div>
      </section>


      {/* 7. 応援コメント */}
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
            {[
              { role: "育休中ママ", text: "イヤイヤ期で自己嫌悪に陥る毎日ですが、このプロジェクトを知って『私だけじゃないんだ』と救われました。完成が待ち遠しいです！" },
              { role: "MIRAIS卒業生", text: "復職してからは毎日のように時間が溶けていきます。あの時の感情を未来の子どもに残せるなんて、本当に素晴らしい企画だと思います。" },
              { role: "イラストレーター", text: "親の『大好き』という本音を形にする、とても意義のある絵本です。ルナのあたたかさが、たくさんの親子に届きますように。" }
            ].map((comment, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-white p-8 rounded-[2rem] border-2 border-[#f9e28c] shadow-sm relative mt-4">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#f9e28c] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-3xl font-serif font-bold leading-none mt-2">"</span>
                </div>
                <p className="text-[#5d4037] leading-relaxed mt-4">
                  {comment.text}
                </p>
                <div className="mt-6 text-right">
                  <span className="text-sm font-bold text-[#d4b028] bg-[#fefce8] px-4 py-1 rounded-full">{comment.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* 8. お金の話・目標金額 */}
      <section className="py-24 md:py-36 px-6 bg-white relative overflow-hidden">
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

          <div className="bg-[#f4f7f5] p-8 md:p-16 rounded-[3rem] shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#86bfa0] text-center mb-10">資金の使い道（目安）</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6 text-[#5d4037] text-lg leading-relaxed">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="flex items-center"><div className="w-3 h-3 bg-rose-400 rounded-full mr-3"></div> MIRAIS入会・リターン提供費</span>
                  <span className="font-bold">約35%</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="flex items-center"><div className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></div> 印刷・製本費</span>
                  <span className="font-bold">約23%</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="flex items-center"><div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div> 増刷・寄贈・今後の展開</span>
                  <span className="font-bold">約18%</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="flex items-center"><div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div> READYFOR手数料</span>
                  <span className="font-bold">約15%</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="flex items-center"><div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div> 広報・発送・運営費</span>
                  <span className="font-bold">約5%</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="flex items-center"><div className="w-3 h-3 bg-slate-400 rounded-full mr-3"></div> 絵本制作・編集費</span>
                  <span className="font-bold">約4%</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-emerald-100">
                <p className="text-sm text-[#5d4037] leading-relaxed mb-4">
                  ※現在の想定リターン構成に基づく目安であり、支援内容によって割合は変動する前提です。
                </p>
                <div className="p-4 bg-[#fefce8] border border-[#f9e28c] rounded-xl text-sm text-[#5d4037] leading-relaxed">
                  <strong>注記：</strong><br/>
                  「MIRAIS入会・再参加＋えほん応援コース」に含まれる参加費は、コミュニティの運営および活動提供に活用します。それ以外のご支援は、MIRAISえほん制作・リターン提供・プロジェクト運営に大切に活用します。
                </div>
              </div>
            </div>
          </div>

          <motion.div variants={fadeIn} className="mt-20 pt-16 border-t border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5d4037] text-center mb-12">ロードマップ：120万円で何ができるか</h3>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-start bg-rose-50 p-6 rounded-2xl border-l-8 border-rose-400">
                <Heart className="w-8 h-8 text-rose-400 shrink-0 mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-[#5d4037] mb-2">120万円：初版制作・発送（ファーストゴール）</h4>
                  <p className="text-[#5d4037]">第1弾絵本を制作し、初版200冊を印刷・発送。プロジェクトを次につなげる広報活動を行います。</p>
                </div>
              </div>
              <div className="flex items-start bg-amber-50 p-6 rounded-2xl border-l-8 border-amber-400">
                <Star className="w-8 h-8 text-amber-400 shrink-0 mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-[#5d4037] mb-2">ストレッチゴール：ハードカバー化</h4>
                  <p className="text-[#5d4037]">より長く、美しく残せるように絵本のハードカバー化を実現します。</p>
                </div>
              </div>
              <div className="flex items-start bg-emerald-50 p-6 rounded-2xl border-l-8 border-emerald-400">
                <Users className="w-8 h-8 text-emerald-400 shrink-0 mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-[#5d4037] mb-2">その先：寄贈・販売展開・第2弾へ</h4>
                  <p className="text-[#5d4037]">絵本を必要とする施設への寄贈、一般販売展開、そして新たなテーマでの第2弾制作へと活動を広げます。</p>
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

      {/* 過去の実績（READYFOR） */}


      {/* 過去の実績（READYFOR） */}
      <section className="py-16 md:py-24 px-6 bg-[#fefce8]">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-10"
        >
          <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-serif font-bold text-[#5d4037]">MIRAISの過去のREADYFORプロジェクト</motion.h2>
          <motion.p variants={fadeIn} className="text-[#5d4037] leading-relaxed text-lg">
            MIRAISでは過去にもREADYFORを通じて、産後・育休中のリアルな声をまとめた書籍や手帳を形にし、たくさんの方に届けてきました。
          </motion.p>
          <div className="flex flex-col md:flex-row gap-6 justify-center pt-4">
            <motion.a variants={fadeIn} href="https://readyfor.jp/projects/ikukyu_real_book" target="_blank" rel="noopener noreferrer" className="bg-white p-6 md:p-8 rounded-[2rem] border border-[#f9e28c] shadow-sm hover:shadow-lg transition-all text-left group flex-1">
               <h4 className="font-bold text-lg md:text-xl text-[#5d4037] group-hover:text-rose-400 transition-colors leading-relaxed">産後、知らなかった！の涙を減らす。<br/>育休のリアルがわかる本を届けたい</h4>
               <p className="text-sm text-slate-500 mt-4 font-bold">2021年 プロジェクト達成</p>
            </motion.a>
            <motion.a variants={fadeIn} href="https://readyfor.jp/projects/miraisplanner" target="_blank" rel="noopener noreferrer" className="bg-white p-6 md:p-8 rounded-[2rem] border border-[#f9e28c] shadow-sm hover:shadow-lg transition-all text-left group flex-1">
               <h4 className="font-bold text-lg md:text-xl text-[#5d4037] group-hover:text-rose-400 transition-colors leading-relaxed">育休のリアルな声から誕生。<br/>新しい自分を見つける「手帳」を届けたい！</h4>
               <p className="text-sm text-slate-500 mt-4 font-bold">2022年 プロジェクト達成</p>
            </motion.a>
          </div>
        </motion.div>
      </section>
      {/* 11. リターン紹介 */}


            {/* 11. リターン紹介 */}
      <section id="returns" className="py-16 md:py-36 px-4 md:px-6 bg-[#f4f7f5]">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-16 md:space-y-20"
        >
          <div className="text-center space-y-4 md:space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037]">
              あなたに合った応援のかたち
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[#795548] font-medium text-base md:text-lg">
              どのコースも、「MIRAISえほんの制作を応援し、その証を受け取る」コースです。
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch pt-4">
            
            {/* 絵本1冊 */}
            <motion.div variants={fadeIn} className="relative bg-white p-6 md:p-8 rounded-[2rem] border-2 border-[#f0a8b9] shadow-xl flex flex-col ring-4 ring-rose-50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f0a8b9] text-white font-bold px-6 py-1.5 rounded-full text-sm shadow-md whitespace-nowrap">
                まずは1冊で応援
              </div>
              <div className="mb-4 mt-2 text-center">
                <h3 className="font-bold text-lg md:text-xl text-[#5d4037]">絵本1冊</h3>
                <div className="text-2xl md:text-3xl font-bold text-rose-500 mt-2 md:mt-4">¥5,000</div>
              </div>
              <div className="text-[#5d4037] mb-6 flex-grow leading-relaxed space-y-3 md:space-y-4 text-sm md:text-base">
                <p>完成した絵本1冊とお礼のお手紙をお届けします。</p>
              </div>
              <button className="w-full py-3 md:py-4 rounded-xl bg-[#f0a8b9] text-white font-bold hover:bg-rose-400 shadow-md transition-all hover:-translate-y-1">
                支援する
              </button>
            </motion.div>

            {/* お名前掲載 */}
            <motion.div variants={fadeIn} className="relative bg-white p-6 md:p-8 rounded-[2rem] border-2 border-dashed border-[#86bfa0] shadow-sm flex flex-col">
              <div className="mb-4 mt-2 text-center">
                <h3 className="font-bold text-lg md:text-xl text-[#5d4037]">お名前掲載</h3>
                <div className="text-2xl md:text-3xl font-bold text-[#86bfa0] mt-2 md:mt-4">¥10,000</div>
              </div>
              <p className="text-[#5d4037] mb-6 flex-grow leading-relaxed text-sm md:text-base">
                絵本にお名前を掲載いたします。（絵本本体のお届けはありません）
              </p>
              <button className="w-full py-3 md:py-4 rounded-xl bg-[#eef7f2] text-[#5d4037] font-bold hover:bg-[#cbe8d8] transition-colors">
                支援する
              </button>
            </motion.div>

            {/* 絵本3冊ギフト */}
            <motion.div variants={fadeIn} className="relative bg-white p-6 md:p-8 rounded-[2rem] border-2 border-dashed border-[#a8d5ba] shadow-sm flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#86bfa0] text-white font-bold px-6 py-1.5 rounded-full text-sm shadow-sm whitespace-nowrap">
                大切な人へ贈るなら
              </div>
              <div className="mb-4 mt-2 text-center">
                <h3 className="font-bold text-lg md:text-xl text-[#5d4037]">絵本3冊ギフト</h3>
                <div className="text-2xl md:text-3xl font-bold text-[#86bfa0] mt-2 md:mt-4">¥12,000</div>
              </div>
              <p className="text-[#5d4037] mb-6 flex-grow leading-relaxed text-sm md:text-base">
                絵本3冊をお届けします。ご友人やごきょうだいへのプレゼントに。
              </p>
              <button className="w-full py-3 md:py-4 rounded-xl bg-[#eef7f2] text-[#5d4037] font-bold hover:bg-[#cbe8d8] transition-colors">
                支援する
              </button>
            </motion.div>

            {/* 家族・仲間に届ける5冊 */}
            <motion.div variants={fadeIn} className="relative bg-white p-6 md:p-8 rounded-[2rem] border-2 border-dashed border-[#d4b028] shadow-sm flex flex-col">
              <div className="mb-4 mt-2 text-center">
                <h3 className="font-bold text-lg md:text-xl text-[#5d4037]">家族・仲間に届ける5冊</h3>
                <div className="text-2xl md:text-3xl font-bold text-[#d4b028] mt-2 md:mt-4">¥20,000</div>
              </div>
              <p className="text-[#5d4037] mb-6 flex-grow leading-relaxed text-sm md:text-base">
                絵本5冊をお届けします。周りの方々に配りたい方へ。
              </p>
              <button className="w-full py-3 md:py-4 rounded-xl bg-[#fefce8] text-[#5d4037] font-bold hover:bg-[#f9e28c] transition-colors">
                支援する
              </button>
            </motion.div>
            
            {/* 団体・仲間に届ける10冊 */}
            <motion.div variants={fadeIn} className="relative bg-white p-6 md:p-8 rounded-[2rem] border-2 border-dashed border-[#d4b028] shadow-sm flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4b028] text-white font-bold px-6 py-1.5 rounded-full text-sm shadow-sm whitespace-nowrap">
                たくさん配りたい方へ
              </div>
              <div className="mb-4 mt-2 text-center">
                <h3 className="font-bold text-lg md:text-xl text-[#5d4037]">団体・仲間に届ける10冊</h3>
                <div className="text-2xl md:text-3xl font-bold text-[#d4b028] mt-2 md:mt-4">¥40,000</div>
              </div>
              <p className="text-[#5d4037] mb-6 flex-grow leading-relaxed text-sm md:text-base">
                絵本10冊をお届けし、絵本にお名前を掲載いたします。
              </p>
              <button className="w-full py-3 md:py-4 rounded-xl bg-[#fefce8] text-[#5d4037] font-bold hover:bg-[#f9e28c] transition-colors">
                支援する
              </button>
            </motion.div>

            {/* MIRAIS入会・再参加 */}
            <motion.div variants={fadeIn} className="relative bg-white p-6 md:p-8 rounded-[2rem] border-2 border-slate-200 shadow-sm flex flex-col">
              <div className="mb-4 mt-2 text-center">
                <h3 className="font-bold text-lg md:text-xl text-[#5d4037]">MIRAIS入会・再参加<br/>＋えほん応援</h3>
                <div className="text-2xl md:text-3xl font-bold text-slate-500 mt-2 md:mt-4">¥30,000</div>
              </div>
              <p className="text-[#5d4037] mb-6 flex-grow leading-relaxed text-sm md:text-base">
                MIRAISのコミュニティに参加・再参加できる権利と、絵本応援がセットになったプランです。
              </p>
              <button className="w-full py-3 md:py-4 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors">
                支援する
              </button>
            </motion.div>
          </div>
          
          <div className="text-center mt-12 md:mt-16">
            <p className="text-sm md:text-base text-slate-500">※詳細はREADYFORのプロジェクトページでご確認ください。</p>
          </div>
        </motion.div>
      </section>

      {/* 応援スポンサー */}
      <section className="py-16 md:py-36 px-4 md:px-6 bg-white border-t border-slate-100">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-12 md:space-y-16"
        >
          <div className="text-center space-y-4 md:space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037]">
              応援してくださる皆様
            </motion.h2>
            <p className="text-[#795548] font-medium text-base md:text-lg">
              本プロジェクトをサポートしてくださる企業・個人の皆様です。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 個人スポンサー 30,000円 */}
            <motion.div variants={fadeIn} className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-md flex flex-col text-center">
              <h3 className="font-bold text-xl md:text-2xl text-[#5d4037] mb-2 md:mb-4">個人スポンサー</h3>
              <div className="text-3xl md:text-4xl font-bold text-slate-600 mb-6 md:mb-8">¥30,000</div>
              <p className="text-[#5d4037] flex-grow leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                プロジェクトを個人として応援いただける方向けのプランです。<br/>お名前等の掲載を予定しております。
              </p>
              <button className="w-full py-3 md:py-4 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors">
                支援する
              </button>
            </motion.div>

            {/* 法人・団体スポンサー 50,000円 */}
            <motion.div variants={fadeIn} className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-md flex flex-col text-center">
              <h3 className="font-bold text-xl md:text-2xl text-[#5d4037] mb-2 md:mb-4">法人・団体スポンサー</h3>
              <div className="text-3xl md:text-4xl font-bold text-slate-600 mb-6 md:mb-8">¥50,000</div>
              <p className="text-[#5d4037] flex-grow leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                企業・団体として応援いただける方向けのプランです。<br/>ロゴや社名等の掲載（小）を予定しております。
              </p>
              <button className="w-full py-3 md:py-4 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors">
                支援する
              </button>
            </motion.div>

            {/* 法人・団体スポンサー 100,000円 */}
            <motion.div variants={fadeIn} className="bg-gradient-to-br from-[#5d4037] to-[#8b5e34] p-6 md:p-8 rounded-[2rem] shadow-xl flex flex-col text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="font-bold text-xl md:text-2xl mb-2 md:mb-4 text-rose-100">法人・団体スポンサー</h3>
              <div className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">¥100,000</div>
              <p className="flex-grow leading-relaxed mb-6 md:mb-8 text-rose-50/90 text-sm md:text-base">
                強力にバックアップしていただける方向けの特別プランです。<br/>ロゴや社名等の掲載（大）などを予定しております。
              </p>
              <button className="w-full py-3 md:py-4 rounded-xl bg-white text-[#5d4037] font-bold hover:bg-rose-50 transition-colors">
                支援する
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* LINEオープンチャット案内 */}


      {/* LINEオープンチャット案内 */}
      <section className="py-24 md:py-36 px-4 md:px-6 bg-[#fef5f7] relative overflow-hidden">
        {/* 装飾 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#f9e28c]/30 rounded-full blur-3xl"></div>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeIn} className="bg-white/80 backdrop-blur-sm p-8 md:p-16 rounded-[3rem] border-4 border-rose-100 shadow-xl">
            <h2 className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#f0a8b9] mb-8 leading-tight">
              LINEオープンチャットの<br className="md:hidden"/>ご案内
            </h2>
            <div className="space-y-6 text-[#5d4037] text-lg md:text-xl leading-[2.2] font-medium">
              <p>
                MIRAISえほんの最新情報や、<br className="md:hidden"/>クラウドファンディングのお知らせを受け取りたい方へ。
              </p>
              
              <div className="bg-[#fefce8] p-6 md:p-8 rounded-2xl inline-block text-left my-8 border border-[#f9e28c]">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-rose-400 mr-3 shrink-0 mt-1" /> 
                    <span>クラウドファンディング公開の<strong>お知らせ</strong>をいち早くお届けします。</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-rose-400 mr-3 shrink-0 mt-1" /> 
                    <span>制作の<strong>裏側や進捗</strong>もお届けします。</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-rose-400 mr-3 shrink-0 mt-1" /> 
                    <span><strong>匿名・無料</strong>でいつでも参加・退出できます。</span>
                  </li>
                </ul>
              </div>

              <p className="font-bold text-[#86bfa0] text-xl md:text-2xl pt-4">
                一緒に、この絵本の1ページ目を見守ってください。
              </p>
            </div>
            
            <div className="mt-12">
              <a href="https://line.me/ti/g2/lfruTAXJT70uF4m0gU3nlWTOOj3V4lDTotS1aw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 md:px-16 py-5 md:py-6 text-lg md:text-2xl font-bold text-white transition-all bg-[#06C755] rounded-full hover:bg-[#05b34c] shadow-lg hover:shadow-xl hover:-translate-y-1 w-full md:w-auto">
                <span className="flex items-center">
                  オープンチャットに参加する
                  <ArrowRight className="ml-3 md:ml-4 w-6 h-6 transition-transform group-hover:translate-x-2" />
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 14. 最後のメッセージ */}
      <section className="py-32 md:py-48 px-6 bg-gradient-to-t from-white to-[#fdfbf7] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[800px] bg-[#fefce8] blur-[180px] rounded-full opacity-70 -z-10"></div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-20 relative z-10"
        >
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold text-[#5d4037] leading-tight">
            今日も、うまくできなかったあなたへ。
          </motion.h2>

          <div className="space-y-12 text-xl md:text-2xl leading-[2.5] font-serif text-[#5d4037]">
            <motion.p variants={fadeIn}>
              このページを、最後まで読んでくださってありがとうございます。
            </motion.p>
            
            <motion.div variants={fadeIn} className="py-8">
              <p className="text-2xl md:text-3xl font-bold leading-relaxed bg-white/60 p-8 rounded-3xl inline-block shadow-sm">
                この絵本が完成したら、<br className="hidden md:block"/>今日、子育てに悩んでいる親のもとへ届きます。
              </p>
            </motion.div>
            
            <motion.p variants={fadeIn}>
              そして、10年後。
            </motion.p>

            <motion.p variants={fadeIn} className="text-3xl md:text-4xl font-bold text-[#f0a8b9]">
              その子どもが、<br/>「私は愛されていた」と受け取ります。
            </motion.p>

            <motion.p variants={fadeIn} className="font-bold pt-12">
              その未来を、一緒につくってください。
            </motion.p>
            
            <motion.p variants={fadeIn} className="text-rose-400 font-bold border-t border-b border-dashed border-rose-200 py-8 my-12 inline-block px-8 text-2xl">
              完璧な親の絵本ではなく、あなたの絵本を、つくります。
            </motion.p>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl font-bold text-[#5d4037] pt-4 leading-relaxed">
              8月1日より、READYFORにて<br className="hidden md:block"/>
              クラウドファンディングを開始します。
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="pt-16 flex flex-col items-center justify-center space-y-6 relative z-20">
             <a href="#returns" className="group relative inline-flex items-center justify-center px-12 md:px-20 py-8 text-2xl font-bold text-white transition-all bg-[#f0a8b9] rounded-full hover:bg-rose-400 overflow-hidden shadow-2xl hover:shadow-rose-300/50 hover:-translate-y-2">
               <span className="relative flex items-center tracking-wider">
                 プロジェクトを支援する <ArrowRight className="ml-4 w-8 h-8 transition-transform group-hover:translate-x-3" />
               </span>
             </a>
             <div className="text-[#795548] font-medium space-y-2 text-sm md:text-base">
               <p>※スムーズにご支援いただくために、事前のREADYFORへの会員登録（無料）をおすすめしております。</p>
               <p className="font-bold">※READYFORのプロジェクトページへ遷移します</p>
             </div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
