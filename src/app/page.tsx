"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Star, BookOpen, Camera, MessageCircle,
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
      
      {/* ヘッダーロゴ */}
      <header className="absolute top-0 left-0 w-full p-4 md:p-6 z-50">
        <a href="https://www.ikukyu-mirais.com/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
          <img src="/mirais_logo.png" alt="MIRAIS" className="h-10 md:h-12 w-auto object-contain" />
        </a>
      </header>

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
          <div className="bg-white p-4 md:p-8 rounded-[3rem] shadow-sm">
            <motion.div variants={fadeIn} className="w-full rounded-[2rem] overflow-hidden">
              <img src="/mirais_about.png" alt="MIRAISについて" className="w-full h-auto border border-slate-100 rounded-[2rem]" />
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-[#86bfa0] mb-8">過去のクラウドファンディング実績</h3>
            <p className="text-lg text-[#5d4037] mb-10 font-medium leading-relaxed">
              私たちはこれまでも、想いを形にするためにクラウドファンディングに挑戦し、<br className="hidden md:block" />
              多くの方にご支援いただきプロジェクトを成功させてきました。
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a href="https://readyfor.jp/projects/ikukyu_real_book" target="_blank" rel="noopener noreferrer" className="group block p-8 bg-white rounded-2xl border-2 border-[#86bfa0]/30 hover:border-[#86bfa0] shadow-sm transition-all hover:-translate-y-1">
                <h4 className="font-bold text-[#5d4037] text-lg mb-2 group-hover:text-[#86bfa0] transition-colors">第一弾：『育休のリアル』</h4>
                <p className="text-sm text-[#5d4037]/70 flex items-center justify-center mt-3">
                  READYFORプロジェクトページへ <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </p>
              </a>
              <a href="https://readyfor.jp/projects/miraisplanner" target="_blank" rel="noopener noreferrer" className="group block p-8 bg-white rounded-2xl border-2 border-[#86bfa0]/30 hover:border-[#86bfa0] shadow-sm transition-all hover:-translate-y-1">
                <h4 className="font-bold text-[#5d4037] text-lg mb-2 group-hover:text-[#86bfa0] transition-colors">第二弾：『MIRAIS PLANNER』</h4>
                <p className="text-sm text-[#5d4037]/70 flex items-center justify-center mt-3">
                  READYFORプロジェクトページへ <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </p>
              </a>
            </div>
          </motion.div>
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
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-200 shadow-md bg-blue-50">
                <img src="/adi.png" alt="あでぃ" className="w-full h-full object-cover" />
              </div>
              <div><p className="text-sm font-bold text-[#86bfa0] mb-1">クラファン支援</p><p className="font-bold text-[#5d4037] text-xl">あでぃ</p></div>
            </motion.div>
          </div>

          <div className="bg-[#fefce8] p-10 md:p-16 rounded-[3rem] shadow-sm">
            <h3 className="text-center font-bold text-2xl text-[#5d4037] mb-12">制作メンバー</h3>
            <div className="space-y-6 text-[#5d4037]">
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-2xl border-2 border-[#f9e28c] shadow-sm">
                <h4 className="font-bold text-lg text-[#d4b028] mb-3 border-b border-[#fefce8] pb-2 flex items-center"><Smile className="w-5 h-5 mr-2" /> 編集・声集めメンバー</h4>
                <p className="font-medium leading-relaxed">さーちゃん、しょうたん、ともりん、はあち、まどこ、まゆゆ、わさびーぬ</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-2xl border-2 border-[#f9e28c] shadow-sm">
                <h4 className="font-bold text-lg text-[#d4b028] mb-3 border-b border-[#fefce8] pb-2 flex items-center"><Smile className="w-5 h-5 mr-2" /> 制作管理チーム</h4>
                <p className="font-medium leading-relaxed">なっつん、あおさん</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-2xl border-2 border-[#f9e28c] shadow-sm">
                <h4 className="font-bold text-lg text-[#d4b028] mb-3 border-b border-[#fefce8] pb-2 flex items-center"><Smile className="w-5 h-5 mr-2" /> イラスト・ビジュアルチーム</h4>
                <p className="font-medium leading-relaxed">なっちゃん、ゆきちゃん、グラレコあいちゃん</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-2xl border-2 border-[#f9e28c] shadow-sm">
                <h4 className="font-bold text-lg text-[#d4b028] mb-3 border-b border-[#fefce8] pb-2 flex items-center"><Smile className="w-5 h-5 mr-2" /> 広報・発信チーム</h4>
                <p className="font-medium leading-relaxed">しょうたん、ゆきまる、ゆーみん、グラレコあいちゃん</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-2xl border-2 border-[#f9e28c] shadow-sm">
                <h4 className="font-bold text-lg text-[#d4b028] mb-3 border-b border-[#fefce8] pb-2 flex items-center"><Smile className="w-5 h-5 mr-2" /> クラファン・出版調査チーム</h4>
                <p className="font-medium leading-relaxed">なっつん、まどこ、ゆきまる、ゆんちゃん</p>
              </motion.div>
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
                    「MIRAIS入会＋えほん応援コース」に含まれる参加費は、コミュニティの運営および活動提供に活用します。それ以外のご支援は、MIRAISえほん制作・リターン提供・プロジェクト運営に大切に活用します。
                  </div>
                </div>
              </div>
            </div>
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

            {/* MIRAIS入会 */}
            <motion.div variants={fadeIn} className="relative bg-white p-6 md:p-8 rounded-[2rem] border-2 border-slate-200 shadow-sm flex flex-col">
              <div className="mb-4 mt-2 text-center">
                <h3 className="font-bold text-lg md:text-xl text-[#5d4037]">MIRAIS入会<br/>＋えほん応援</h3>
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
      </section>      {/* 13. 最後のメッセージ */}
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
                <p>私は、双子を育てる親です。<br/>子どもたちを大切に思っているのに、寝顔を見ながら、<br/>「今日はもっとできたんじゃないかな」<br/>と自分を責めた夜が何度もありました。</p>
                <p>そんな夜があったからこそ、この絵本だけは形にしたいと思いました。<br/>あの日の私のように、自分を責めている誰かに届けたいからです。</p>
                <p>この挑戦は、最後までやり切ります。<br/>でも、一人では作れません。<br/>一緒に迷い、一緒に考え、一緒に完成を喜びたい。</p>
                <p className="font-bold">「本ができたら知っていた」ではなく、<br/>「本ができるまで、一緒に育てた」<br/>そんな一冊にしたいと思っています。</p>
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
