'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Star, BookOpen, 
  Users, CheckCircle, ArrowRight
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
            
            <motion.div variants={fadeIn} className="pt-12 flex justify-center">
               <a href="#returns" className="group relative inline-flex items-center justify-center px-10 md:px-16 py-6 text-xl font-bold text-white transition-all bg-[#f0a8b9] rounded-full hover:bg-rose-400 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1">
                 <span className="relative flex items-center tracking-wider">
                   応援のかたちを選ぶ <ArrowRight className="ml-4 w-6 h-6 transition-transform group-hover:translate-x-2" />
                 </span>
               </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. 共感 */}
      <section className="py-24 md:py-36 px-6 relative z-10 bg-white">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-20"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              子育てをしていると、<br className="md:hidden"/>こんな日はありませんか。
            </motion.h2>
            <motion.p variants={fadeIn} className="text-rose-400 font-bold tracking-widest text-base">
              完璧な親なんて、たぶんどこにもいません。
            </motion.p>
          </div>

          <div className="space-y-10 text-center text-xl md:text-2xl text-[#5d4037] leading-[2.5]">
            <motion.p variants={fadeIn}>早く寝てほしくて、つい強い声を出してしまった夜。</motion.p>
            <motion.p variants={fadeIn}>保育園に子どもを預けて、後ろ髪を引かれながら向かった朝。</motion.p>
            <motion.p variants={fadeIn}>「先にやることあるでしょ！」と言ったあとの、小さな背中。</motion.p>
            <motion.p variants={fadeIn}>下の子が生まれて、上の子に我慢をさせてしまった日。</motion.p>
            <motion.p variants={fadeIn}>復職してからの毎日が、あっという間に流れていく感覚。</motion.p>
            
            <motion.div variants={fadeIn} className="flex justify-center py-12">
               <div className="w-32 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent opacity-50"></div>
            </motion.div>

            <motion.p variants={fadeIn} className="text-[#5d4037]">
              そして、寝顔を見ながら思うのです。<br/>
              「今日も、ちゃんと笑ってあげられなかったな」って。
            </motion.p>
            <motion.p variants={fadeIn} className="text-[#5d4037] font-bold text-2xl md:text-3xl mt-12 leading-relaxed">
              でも——思い出してみてください。<br/>
              その「ごめんね」の奥には、いつだって「大好き」がありました。
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="relative mt-24">
            <div className="bg-[#fef5f7] border-2 border-dashed border-rose-300 p-10 md:p-16 rounded-[2.5rem] text-center shadow-sm">
              <p className="text-2xl md:text-4xl font-serif font-bold text-[#f0a8b9] leading-[1.8]">
                うまくできなかった日ほど、<br/>
                大好きだったことを、覚えていたい。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. 問題提起 */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto relative z-10 text-center space-y-16"
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] mb-8 leading-tight">
              愛情は毎日あふれているのに、<br/>残す場所がない。
            </h2>
            <p className="text-[#795548] font-medium tracking-widest text-lg">今の親たちは、「もっと」に囲まれています。</p>
          </motion.div>

          <div className="text-xl md:text-2xl text-[#5d4037] leading-[2.5] space-y-12">
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
            <motion.p variants={fadeIn} className="font-bold text-2xl md:text-3xl text-[#5d4037] leading-relaxed pt-8">
              親の「大好き」は、確かにあったのに。<br/>
              それを手渡せる形が、今はまだ、ありません。
            </motion.p>
          </div>
          <motion.div variants={fadeIn} className="relative mt-24">
            <div className="bg-white border-2 border-dashed border-emerald-300 p-10 md:p-16 rounded-[2.5rem] text-center shadow-sm">
              <p className="text-2xl md:text-4xl font-serif font-bold text-[#86bfa0] leading-[1.8]">
                気持ちは、形にしなければ、<br/>
                いつか消えてしまう。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. MIRAISとは（短縮版） */}
      <section className="py-24 md:py-32 px-6 bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
            この絵本が生まれた背景
          </motion.h2>
          
          <div className="text-xl md:text-2xl text-[#5d4037] leading-[2.5] space-y-8 max-w-3xl mx-auto">
            <motion.p variants={fadeIn}>
              MIRAISは、育休中の親たちが自分らしい人生を考え、つながり、挑戦するコミュニティです。
            </motion.p>
            <motion.p variants={fadeIn} className="font-bold">
              その中で集まった親たちの声から、<br className="hidden md:block"/>
              この絵本づくりは始まりました。
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 4.5 代表メッセージ */}
      <section className="py-24 md:py-32 px-6 bg-[#f4f7f5] relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              8年間、母たちの「本音」の<br className="md:hidden"/>そばにいました。
            </motion.h2>
          </div>
          
          <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-[#cbe8d8] shadow-sm relative">
            <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
              <div className="space-y-8 text-xl md:text-2xl text-[#5d4037] leading-[2.2]">
                <motion.p variants={fadeIn}>はじめまして。MIRAIS代表の栗林真由美です。</motion.p>
                <div className="space-y-4">
                  <h4 className="font-bold text-2xl text-[#f0a8b9]">うまくできない日もありました</h4>
                  <motion.p variants={fadeIn}>2018年にMIRAISを立ち上げてから8年。約1,800人の育休メンバーと走ってきました。<br/>ここには、「怒ってしまった」「うまくできなかった」という本音を隠さず出し合い、一緒に「次はどうしようか」と考える文化があります。</motion.p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-2xl text-[#f0a8b9]">でも、大好きは消えませんでした</h4>
                  <motion.p variants={fadeIn}>8年間で積み重なってきた、母たちの飾らない本音。<br/>この絵本は、その土壌からしか生まれない一冊です。</motion.p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-2xl text-[#f0a8b9]">この気持ちを未来に残したいです</h4>
                  <motion.p variants={fadeIn}>初めてのクラウドファンディングに緊張もありますが、「今この気持ちを残したい」という制作メンバーの熱量に触れ、挑戦を決めました。</motion.p>
                  <motion.p variants={fadeIn} className="font-bold">母である前に、一人の人間として人生を生きていい。<br/>そう言い続けてきた私たちがつくる「大好き」の絵本を、一緒に育ててください。</motion.p>
                </div>
                <motion.p variants={fadeIn} className="text-right md:text-left mt-12 font-bold text-2xl text-[#86bfa0]">育休コミュニティMIRAIS<br/>代表 栗林真由美</motion.p>
              </div>
              <motion.div variants={fadeIn} className="order-first md:order-last mx-auto">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-lg mx-auto transform md:rotate-2 bg-rose-50">
                  <img src="/mayumi.png" alt="栗林真由美" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div variants={fadeIn} className="text-center pt-8">
            <p className="text-2xl md:text-3xl font-serif font-bold text-[#86bfa0] leading-relaxed">
              弱さを見せられる場所だから、<br/>本当の「大好き」が集まりました。
            </p>
          </motion.div>
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
        </motion.div>
      </section>

      {/* 8. 制作ストーリー（発起人なおなお） */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5]">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              最初の半年、私には<br className="md:hidden"/>ほとんど記憶がありません。
            </motion.h2>
            <p className="text-rose-400 font-bold text-lg">発起人は、MIRAIS副代表のなおなお。5歳の双子の母です。</p>
          </div>
          
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm relative">
            <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
              <div className="space-y-10 text-xl md:text-2xl text-[#5d4037] leading-[2.2]">
                <div className="space-y-4">
                  <h4 className="font-bold text-2xl text-[#86bfa0]">うまくできない日がありました</h4>
                  <motion.p variants={fadeIn}>やさしくしたいのに、怒ってしまう日。<br/>笑っていたいのに、余裕がなくなる日。<br/>寝顔を見ながら、今日もまたうまくできなかったなと思う夜。</motion.p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-2xl text-[#86bfa0]">それでも、大好きは消えませんでした</h4>
                  <motion.p variants={fadeIn}>うまくできなかった日の奥にも、ちゃんと愛はありました。<br/>でもその気持ちは、忙しい毎日の中で少しずつ薄れていきます。</motion.p>
                </div>
                <motion.div variants={fadeIn} className="font-bold text-2xl md:text-3xl text-center py-6 text-[#f0a8b9] leading-relaxed">
                  だから、今しか残せない親の気持ちを、<br className="hidden md:block"/>絵本という形で未来に残したいと思いました。
                </motion.div>
                <div className="space-y-4">
                  <h4 className="font-bold text-2xl text-[#86bfa0]">この気持ちを未来に残したいです</h4>
                  <motion.p variants={fadeIn}>この絵本が、子育ての中で自分を責めてしまう親に届いてほしいです。<br/>そして、いつか大きくなった子どもたちへ。<br/>「あなたはずっと、大切に思われていた」<br/>そう伝わる一冊になったらうれしいです。</motion.p>
                </div>
                <motion.p variants={fadeIn} className="text-right md:text-left mt-12 font-bold text-2xl text-[#86bfa0]">MIRAIS副代表<br/>なおなお</motion.p>
              </div>
              <motion.div variants={fadeIn} className="order-first md:order-last mx-auto">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-lg mx-auto transform md:-rotate-2 bg-[#f4f7f5]">
                  <img src="/naonao.jpg" alt="なおなお" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div variants={fadeIn} className="text-center mt-20">
            <p className="text-2xl md:text-3xl font-serif font-bold text-[#f0a8b9] leading-relaxed">
              当事者の「今」の言葉だからこそ、<br/>未来の誰かを支えられる。
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 8.5 プロジェクトメンバーの声 */}
      <section className="py-24 md:py-36 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-amber-100/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10"></div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              「なぜ、この絵本をつくりたいの？」<br/>——15人に聞きました。
            </motion.h2>
            <p className="text-[#795548] font-medium text-lg">
              この絵本は、ひとりの作品ではありません。手を挙げた仲間たちの声を、そのまま紹介します。
            </p>
          </div>
          
          {/* 横スクロール対応のカードUI */}
          <div className="flex overflow-x-auto pb-12 -mx-6 px-6 snap-x gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              { name: "ゆんちゃん", text: "イヤイヤ期など、子育てが大変な時期に読み返すことで、親自身があたたかい気持ちに戻れる『お守り』のような絵本にしたい" },
              { name: "しょうたん", text: "今読むだけではなく、数年後に親子で読み返した時に、ほっとしたり、お互いの成長を喜べる絵本にしたい" },
              { name: "わさびーぬ", text: "生まれた瞬間に感じた喜びと不安、その後の戸惑い。母として感じたことを、素直に、でもあたたかく伝えたい" },
              { name: "はあち", text: "少し前の自分が心配していたことに、『こんなに一生懸命向き合っているんだから大丈夫だよ』と言ってあげられる絵本にしたい" },
              { name: "ゆきちゃん", text: "母になっても挑戦する自分たちの想いや葛藤をストーリーにして、子どもたちにも『自分の人生を楽しんでいいんだよ』と伝えたい" },
              { name: "まゆ", text: "イヤイヤ期や思春期など、親の思いが子どもに届きにくい時にも読み聞かせられる、『あなたが大事なんだよ』を思い出せる一冊に" },
              { name: "なっちゃん", text: "キャリアも家庭も自分自身も、どれかを諦めるのではなく『私を生きる』ことを伝えたい。MIRAISだからこそ伝えられるメッセージ" }
            ].map((voice, idx) => (
              <motion.div key={idx} variants={fadeIn} className="snap-center shrink-0 w-[85vw] md:w-[450px]">
                <div className="bg-[#fefce8] p-10 md:p-12 rounded-[2.5rem] border border-[#f9e28c] shadow-sm h-full flex flex-col relative mt-6">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-[#f9e28c] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-3xl font-serif font-bold leading-none mt-2">&quot;</span>
                  </div>
                  <p className="text-[#5d4037] text-lg md:text-xl leading-[2.2] flex-grow mt-4 font-medium">
                    {voice.text}
                  </p>
                  <p className="text-right text-[#d4b028] font-bold text-base mt-8">
                    — {voice.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center space-y-10 text-xl md:text-2xl text-[#5d4037] max-w-3xl mx-auto pt-12 leading-[2.2]">
            <motion.p variants={fadeIn}>
              住む場所も、仕事も、家族構成も違う15人が、同じ問いに向き合いながら、物語のアイデアを出し合い、限られたページに何を残すかを選んでいます。
            </motion.p>
            <motion.p variants={fadeIn}>
              この絵本は、1,800人のコミュニティが8年間ためてきた気持ちを、みんなの手で1冊にする挑戦です。
            </motion.p>
            <motion.p variants={fadeIn} className="text-2xl md:text-4xl font-serif font-bold text-[#f0a8b9] pt-12 leading-relaxed">
              ひとりの「ごめんね」は、<br/>みんなの「大好き」でした。
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* NEW: なぜクラウドファンディングに挑戦するのか (支援する理由) */}
      <section className="py-24 md:py-36 px-6 bg-gradient-to-b from-white to-[#f4f7f5] relative overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-16"
        >
          <motion.div variants={fadeIn} className="relative">
             <div className="absolute inset-0 bg-rose-50 transform -skew-y-2 rounded-[3rem] -z-10"></div>
             <div className="p-12 md:p-20 space-y-12 text-xl md:text-2xl text-[#5d4037] leading-[2.2]">
               <p className="font-bold font-serif text-3xl md:text-4xl text-[#f0a8b9] leading-tight">この絵本は、<br className="md:hidden"/>ひとりの親のためだけの<br className="hidden md:block"/>ものではありません。</p>
               <div className="space-y-6">
                 <p>子育ての中で、うまくできなかった日。</p>
                 <p>怒ってしまった日。</p>
                 <p>自分を責めてしまった日。</p>
               </div>
               <p>それでも子どもを大切に思っていた気持ちを、<br className="hidden md:block"/>未来に残すための絵本です。</p>
               <div className="pt-8">
                 <p className="font-bold text-2xl md:text-3xl text-[#5d4037] leading-relaxed border-b-2 border-rose-200 inline-block pb-2">
                   この絵本を必要としている親子に届けるために、<br/>
                   クラウドファンディングに挑戦します。
                 </p>
               </div>
             </div>
          </motion.div>
        </motion.div>
      </section>

      {/* NEW: あなたの応援でできること */}
      <section className="py-24 md:py-36 px-6 bg-white relative overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-16"
        >
          <motion.div variants={fadeIn} className="relative">
             <div className="p-12 md:p-16 space-y-10 text-xl md:text-2xl text-[#5d4037] leading-[2.2] border-4 border-[#f4f7f5] rounded-[3rem]">
               <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#86bfa0]">あなたの応援でできること</h2>
               <div className="space-y-8 text-left md:text-center">
                 <p>いただいたご支援は、絵本の制作費、印刷費、発送費、クラウドファンディング手数料などに大切に使わせていただきます。</p>
                 <p>この絵本を、子育ての中で自分を責めてしまう親へ。<br/>そして、いつか大きくなった子どもたちへ。</p>
                 <p className="font-bold text-[#5d4037] text-2xl md:text-3xl leading-relaxed pt-4">
                   「あなたはずっと大切に思われていた」<br className="hidden md:block"/>と伝える一冊として届けます。
                 </p>
               </div>
             </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 11. リターン紹介 */}
      <section id="returns" className="py-24 md:py-36 px-6 bg-[#f4f7f5]">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-20"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037]">
              あなたに合った応援のかたち
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[#795548] font-medium text-lg">
              どのコースも、「MIRAISえほんの制作を応援し、その証を受け取る」コースです。
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-stretch pt-4">
            {/* 5000円 (Highlight) */}
            <motion.div variants={fadeIn} className="relative bg-white p-10 rounded-[3rem] border-2 border-[#f0a8b9] shadow-xl flex flex-col ring-4 ring-rose-50">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#f0a8b9] text-white font-bold px-8 py-2.5 rounded-full text-base shadow-md whitespace-nowrap">
                まずは1冊で応援
              </div>
              <div className="mb-8 mt-4 text-center">
                <h3 className="font-bold text-2xl text-[#5d4037]">絵本1冊お届けコース</h3>
                <div className="text-4xl md:text-5xl font-bold text-rose-500 mt-6">¥5,000</div>
              </div>
              <div className="text-[#5d4037] mb-10 flex-grow leading-relaxed space-y-6 text-lg">
                <p className="font-bold text-center bg-rose-50 py-3 rounded-xl">完成した絵本1冊<br/>＋ お礼メッセージ</p>
                <p>絵本の代金ではなく、制作全体を応援いただき、完成した1冊をお届けするコースです。親子で読みたい方に。</p>
              </div>
              <button className="w-full py-5 rounded-2xl bg-[#f0a8b9] text-white font-bold text-lg hover:bg-rose-400 shadow-md transition-all hover:-translate-y-1">
                絵本を受け取って応援
              </button>
            </motion.div>

            {/* 12000円 */}
            <motion.div variants={fadeIn} className="relative bg-white p-10 rounded-[3rem] border-2 border-dashed border-[#a8d5ba] shadow-sm flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#86bfa0] text-white font-bold px-8 py-2 rounded-full text-sm shadow-sm whitespace-nowrap">
                大切な人へ贈るなら
              </div>
              <div className="mb-8 mt-2 text-center">
                <h3 className="font-bold text-2xl text-[#5d4037]">3冊ギフトコース</h3>
                <div className="text-3xl md:text-4xl font-bold text-[#86bfa0] mt-6">¥12,000</div>
              </div>
              <p className="text-[#5d4037] mb-10 flex-grow leading-relaxed text-lg">
                完成した絵本3冊。<br/>出産祝いに、きょうだいに、がんばっている友人に。「あの人にも読んでほしい」が浮かんだ方へ。
              </p>
              <button className="w-full py-5 rounded-2xl bg-[#eef7f2] text-[#5d4037] font-bold text-lg hover:bg-[#cbe8d8] transition-colors">
                ギフトとして応援する
              </button>
            </motion.div>

            {/* 10000円 */}
            <motion.div variants={fadeIn} className="relative bg-white p-10 rounded-[3rem] border-2 border-dashed border-[#f9e28c] shadow-sm flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#d4b028] text-white font-bold px-8 py-2 rounded-full text-sm shadow-sm whitespace-nowrap">
                制作を大きく応援
              </div>
              <div className="mb-8 mt-2 text-center">
                <h3 className="font-bold text-2xl text-[#5d4037]">お名前掲載コース</h3>
                <div className="text-3xl md:text-4xl font-bold text-[#d4b028] mt-6">¥10,000</div>
              </div>
              <p className="text-[#5d4037] mb-10 flex-grow leading-relaxed text-lg">
                絵本のスペシャルサンクス欄にお名前掲載 ＋ 絵本1冊。<br/>この絵本が読み継がれるかぎり、あなたの応援も一緒に残ります。お子さんの名前を刻みたい方にも。
              </p>
              <button className="w-full py-5 rounded-2xl bg-[#fefce8] text-[#5d4037] font-bold text-lg hover:bg-[#f9e28c] transition-colors">
                名前を残して応援する
              </button>
            </motion.div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-base text-slate-500">※他にも「5冊コース」「10冊コース」「スポンサーコース」などをご用意しています。</p>
          </div>
        </motion.div>
      </section>

      {/* 14. 最後のメッセージ */}
      <section className="py-32 md:py-48 px-6 bg-gradient-to-t from-white to-[#fdfbf7] relative overflow-hidden">
        {/* 背景のあたたかい光 */}
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
            
            <motion.div variants={fadeIn} className="py-12">
              <p className="text-3xl md:text-4xl text-[#f0a8b9] font-bold leading-relaxed">
                うまくできない日も、大好きは残せる。
              </p>
            </motion.div>
            
            <motion.p variants={fadeIn}>
              その「大好き」を、10年後のあなたと、<br/>
              大きくなったあの子のために、一緒に形にしませんか。
            </motion.p>

            <motion.p variants={fadeIn}>
              この絵本の1ページ目は、実はもう始まっています。<br/>
              あなたが今日、「ごめんね」の奥に持っていた「大好き」から。
            </motion.p>

            <motion.p variants={fadeIn} className="font-bold pt-12">
              ——今日の気持ちが、明日の宝物になりますように。
            </motion.p>
            
            <motion.p variants={fadeIn} className="text-rose-400 font-bold border-t border-b border-dashed border-rose-200 py-8 my-12 inline-block px-8 text-2xl">
              完璧な親の絵本ではなく、あなたの絵本を、つくります。
            </motion.p>
            
            {/* NEW: クラファン最後のお願い */}
            <motion.p variants={fadeIn} className="text-2xl md:text-3xl font-bold text-[#5d4037] pt-8 leading-relaxed bg-rose-50/50 p-8 rounded-3xl inline-block shadow-sm">
              この絵本を、必要としている親子に届けるために、<br className="hidden md:block"/>
              応援をお願いします。
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="pt-16">
             <a href="#returns" className="group relative inline-flex items-center justify-center px-16 py-8 text-2xl font-bold text-white transition-all bg-[#f0a8b9] rounded-full hover:bg-rose-400 overflow-hidden shadow-2xl hover:shadow-rose-300/50 hover:-translate-y-2">
               <span className="relative flex items-center tracking-wider">
                 応援のかたちを選ぶ <ArrowRight className="ml-4 w-8 h-8 transition-transform group-hover:translate-x-3" />
               </span>
             </a>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
