"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import {
  Star, BookOpen, Users, CheckCircle, ArrowRight, Heart,
  MessagesSquare, Smile, X, ExternalLink, Building2
} from 'lucide-react';
import {
  READYFOR_URL, crowdfunding, deliveryTarget, lastUpdated,
  latestNews, roadmap, bookSpec, conceptVideo, familyVideo,
  type VideoCreditLine
} from '@/data/project';
import {
  premiumCorporateSponsors, corporateSponsors, individualSponsors,
  sponsorCounts, specialThanks, supportVoices, type Sponsor
} from '@/data/supporters';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

function PhraseText({ phrases }: { phrases: readonly string[] }) {
  return (
    <>
      {phrases.map((phrase, index) => (
        <span className="phrase-unit" key={`${index}-${phrase}`}>{phrase}</span>
      ))}
    </>
  );
}

const amount = crowdfunding.totalAmount.toLocaleString('ja-JP');
const goal = crowdfunding.goalAmount.toLocaleString('ja-JP');

const hasSponsors =
  premiumCorporateSponsors.length + corporateSponsors.length + individualSponsors.length > 0;

/** 動画の枠。YouTube埋め込みと自前mp4のどちらにも対応する */
function VideoFrame({ video }: { video: { youtubeId: string; src: string; heading: string } }) {
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-black/5">
      {video.youtubeId ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
          title={video.heading}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video className="w-full h-full object-cover" controls playsInline preload="metadata">
          <source src={video.src} type="video/mp4" />
          お使いのブラウザは動画タグをサポートしていません。
        </video>
      )}
    </div>
  );
}

/** 動画の下に置くクレジット。2本の動画で同じ見た目に揃える */
function VideoCredit({ lines }: { lines: VideoCreditLine[] }) {
  return (
    <dl className="mt-4 flex flex-col gap-1.5 rounded-2xl border border-[#eadfca] bg-white/70 px-5 py-4 text-left">
      {lines.map((line) => (
        <div key={line.name} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {line.role && (
            <dt className="shrink-0 text-[11px] font-bold tracking-[0.1em] text-[#b29022]">{line.role}</dt>
          )}
          <dd className="text-sm text-[#795548] font-medium">
            {line.url ? (
              <a href={line.url} target="_blank" rel="noopener noreferrer" className="text-[#dc839a] underline decoration-rose-200 underline-offset-4 transition-colors hover:text-rose-500 hover:decoration-rose-400">
                {line.name}
              </a>
            ) : (
              line.name
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function SponsorCard({ sponsor, variant }: { sponsor: Sponsor; variant: 'premium' | 'corporate' | 'individual' }) {
  const isPremium = variant === 'premium';
  const isIndividual = variant === 'individual';

  // プレミアムは大サイズ、企業は中サイズ
  const logoBox = isPremium ? 'h-28 md:h-32' : 'h-16 md:h-20';
  const logoImg = isPremium ? 'max-h-28 md:max-h-32' : 'max-h-16 md:max-h-20';

  const className = [
    'bg-white flex flex-col text-center transition-transform hover:-translate-y-1',
    isPremium
      ? 'p-8 md:p-10 rounded-[2rem] border-2 border-[#e0c56a] shadow-xl'
      : isIndividual
        ? 'p-6 md:p-7 rounded-[2rem] border border-[#f3d9df] shadow-sm'
        : 'p-7 md:p-8 rounded-[2rem] border border-slate-200 shadow-md',
  ].join(' ');

  const inner = (
    <>
      {sponsor.logo ? (
        <div className={`mb-5 flex items-center justify-center ${logoBox}`}>
          <img src={sponsor.logo} alt={sponsor.name} className={`w-auto object-contain ${logoImg}`} />
        </div>
      ) : (
        !isIndividual && (
          <div className={`mx-auto mb-5 flex items-center justify-center rounded-full bg-[#f4f7f5] text-[#86bfa0] ${isPremium ? 'h-16 w-16' : 'h-14 w-14'}`}>
            <Building2 className={isPremium ? 'h-7 w-7' : 'h-6 w-6'} />
          </div>
        )
      )}

      {isIndividual && !sponsor.logo && (
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff7f8] text-[#e994aa]">
          <Heart className="h-5 w-5" />
        </div>
      )}

      <h4 className={`font-bold text-[#5d4037] mb-2 ${isPremium ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
        {sponsor.name}
      </h4>

      {sponsor.description && (
        <p className="text-sm md:text-base leading-relaxed text-[#5d4037]/80 flex-grow">{sponsor.description}</p>
      )}

      {sponsor.url && (
        <span className="mt-5 inline-flex items-center justify-center text-sm font-bold text-[#86bfa0]">
          くわしく見る <ExternalLink className="ml-2 h-4 w-4" />
        </span>
      )}
    </>
  );

  return sponsor.url ? (
    <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className={className}>{inner}</a>
  ) : (
    <div className={className}>{inner}</div>
  );
}

export default function MiraisEhonProjectPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#5d4037] selection:bg-rose-200 overflow-hidden font-zen">

      {/* ヘッダーロゴ */}
      <header className="absolute top-0 left-0 w-full px-5 py-4 sm:px-8 sm:py-6 lg:px-12 z-50">
        <a href="https://www.ikukyu-mirais.com/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
          <Image src="/mirais_logo.png" alt="MIRAIS" width={469} height={126} loading="eager" className="h-9 sm:h-11 w-auto object-contain" />
        </a>
      </header>

      {/* 1. ファーストビュー */}
      <section className="paper-texture relative min-h-[760px] lg:min-h-[780px] flex items-center overflow-hidden px-5 pt-24 pb-14 sm:px-8 sm:pt-28 sm:pb-20 lg:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#fffdf8_0%,#fff8f4_48%,#f5faf7_100%)] -z-30"></div>
        <div className="absolute -top-24 -right-20 w-80 h-80 sm:w-[34rem] sm:h-[34rem] bg-rose-100/55 rounded-full blur-[70px] -z-20"></div>
        <div className="absolute -bottom-28 -left-24 w-72 h-72 sm:w-[30rem] sm:h-[30rem] bg-amber-100/45 rounded-full blur-[70px] -z-20"></div>
        <BookOpen aria-hidden="true" strokeWidth={0.8} className="absolute -right-10 top-[18%] hidden h-[28rem] w-[28rem] rotate-[-8deg] text-[#e7d8c8]/35 sm:block lg:right-[2%] lg:top-[20%] lg:h-[34rem] lg:w-[34rem]" />
        <Heart aria-hidden="true" strokeWidth={1.3} className="absolute left-[7%] top-[20%] h-5 w-5 rotate-[-12deg] text-[#e99ab0]/65" />
        <Heart aria-hidden="true" strokeWidth={1.3} className="absolute bottom-[18%] right-[6%] h-7 w-7 rotate-12 text-[#79b7a0]/50" />

        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative z-10 w-full max-w-6xl mx-auto grid items-center gap-7 sm:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10"
        >
          <div className="text-center lg:text-left lg:pt-10">
            <motion.div variants={fadeIn} className="mb-6 sm:mb-8">
              <span className="inline-block max-w-full rounded-full border border-[#eadfca] bg-white/85 px-4 py-2 text-[11px] sm:px-6 sm:text-sm text-[#b29022] font-bold tracking-[0.12em] shadow-[0_8px_30px_rgba(93,64,55,0.06)]">
                <PhraseText phrases={['育休コミュニティMIRAIS発！', '親心を未来に残す絵本']} />
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="story-title font-serif font-bold text-[#5d4037] text-[clamp(2rem,8.2vw,3.5rem)] sm:text-[3.5rem] lg:text-[clamp(3rem,3.65vw,3.4rem)] leading-[1.42] sm:leading-[1.35] mb-5 sm:mb-7">
              <span className="block">うまくできない日も、</span>
              <span className="block">大好きは残せる。</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="story-copy max-w-[31rem] mx-auto lg:mx-0 text-base sm:text-xl lg:text-[1.35rem] text-[#795548] font-medium leading-[2] sm:leading-[2.05]">
              <PhraseText phrases={['親の「ありのままの気持ち」を、', '未来の子どもへ', '手渡す絵本をつくっています。']} />
            </motion.p>

            {/* 成立の御礼（数字より人を主役に） */}
            <motion.div variants={fadeIn} className="mt-7 sm:mt-9 mx-auto lg:mx-0 max-w-[31rem] rounded-[1.75rem] border border-[#f3d9df] bg-white/85 px-6 py-6 shadow-[0_14px_40px_rgba(93,64,55,0.07)]">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-[#b29022] mb-3">
                クラウドファンディング成立
              </p>
              <p className="story-title font-serif font-bold text-[#e58fa5] text-[clamp(1.35rem,5vw,1.9rem)] leading-[1.6]">
                <span className="block">{amount}円</span>
                <span className="block">{crowdfunding.supporterCount}名の皆さまとともに</span>
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[#795548] leading-[1.9]">
                <PhraseText phrases={[`${crowdfunding.periodEnd}、`, 'クラウドファンディングを終了しました。', 'たくさんの応援を、', '本当にありがとうございました。']} />
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-7 sm:mt-8 flex flex-col items-center gap-4 lg:items-start">
              <a href="#now" className="group relative inline-flex min-h-14 w-full max-w-[23rem] items-center justify-center overflow-hidden rounded-full bg-[#e994aa] px-7 py-4 text-base sm:text-lg font-bold tracking-[0.04em] text-white shadow-[0_14px_34px_rgba(225,130,154,0.28)] transition-all hover:-translate-y-1 hover:bg-[#df8199] hover:shadow-[0_18px_42px_rgba(225,130,154,0.36)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e994aa]">
                <span className="relative flex items-center">
                  絵本の現在地を見る <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-2" />
                </span>
              </a>
              <a href="#record" className="inline-flex items-center text-sm sm:text-base font-bold text-[#86bfa0] underline decoration-[#cbe8d8] underline-offset-8 transition-colors hover:text-[#6ea887] hover:decoration-[#86bfa0]">
                クラウドファンディングの記録を見る
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="relative mx-auto w-full max-w-[20rem] sm:max-w-[27rem] lg:max-w-[33rem] lg:translate-y-5">
            <div className="absolute inset-[9%] rounded-[47%_53%_46%_54%/52%_42%_58%_48%] bg-white/82 shadow-[0_24px_70px_rgba(93,64,55,0.10)] rotate-2"></div>
            <Heart aria-hidden="true" strokeWidth={1.25} className="absolute left-[1%] top-[27%] z-20 h-6 w-6 -rotate-12 text-[#e7a1b4]/75" />
            <Image
              src="/luna_reading_reference.png"
              alt="公式デザインをもとに描いた、絵本を読むベイビールナ"
              width={1254}
              height={1254}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 767px) 320px, (max-width: 1023px) 432px, 528px"
              className="relative z-10 h-auto w-full drop-shadow-[0_22px_24px_rgba(93,64,55,0.10)]"
            />
            <Heart aria-hidden="true" strokeWidth={1.25} className="absolute right-[1%] top-[18%] z-20 h-5 w-5 rotate-12 text-[#78b6a0]/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THANK YOU */}
      <section className="py-24 md:py-36 px-6 bg-[#fef5f7] relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#f9e28c]/25 rounded-full blur-3xl pointer-events-none"></div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto relative z-10 text-center"
        >
          <motion.p variants={fadeIn} className="text-sm font-bold tracking-[0.3em] text-[#e58fa5] mb-6">THANK YOU</motion.p>

          <motion.h2 variants={fadeIn} className="story-title text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-[1.55] mb-14">
            <PhraseText phrases={[`${crowdfunding.supporterCount}人とつくる絵本に`, 'なりました。']} />
          </motion.h2>

          <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16">
            <div className="bg-white rounded-[1.75rem] px-6 py-8 shadow-[0_14px_40px_rgba(93,64,55,0.07)]">
              <p className="text-xs font-bold tracking-[0.14em] text-[#b29022] mb-3">支援者数</p>
              <p className="font-serif font-bold text-[#e58fa5] text-[2.75rem] leading-none">
                {crowdfunding.supporterCount}<span className="text-xl ml-1">名</span>
              </p>
            </div>
            <div className="bg-white rounded-[1.75rem] px-6 py-8 shadow-[0_14px_40px_rgba(93,64,55,0.07)]">
              <p className="text-xs font-bold tracking-[0.14em] text-[#b29022] mb-3">支援総額</p>
              <p className="font-serif font-bold text-[#e58fa5] text-[2.1rem] sm:text-[1.9rem] lg:text-[2.1rem] leading-none">
                {amount}<span className="text-xl ml-1">円</span>
              </p>
            </div>
            <div className="bg-white rounded-[1.75rem] px-6 py-8 shadow-[0_14px_40px_rgba(93,64,55,0.07)]">
              <p className="text-xs font-bold tracking-[0.14em] text-[#b29022] mb-3">達成率</p>
              <p className="font-serif font-bold text-[#e58fa5] text-[2.75rem] leading-none">
                {crowdfunding.achievementRate}<span className="text-xl ml-1">%</span>
              </p>
            </div>
          </motion.div>

          <div className="story-copy text-base md:text-xl text-[#5d4037] leading-[2.2] md:leading-[2.4] space-y-8 max-w-[34rem] mx-auto text-left sm:text-center">
            <motion.p variants={fadeIn}>
              <PhraseText phrases={[`${crowdfunding.periodStart}から${crowdfunding.periodEnd}まで`, '挑戦したクラウドファンディング。', `${crowdfunding.supporterCount}名の方から、`, `${amount}円ものご支援をいただきました。`]} />
            </motion.p>
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['最初は、小さな', '「こんな絵本をつくりたい」から', '始まったプロジェクトでした。']} />
            </motion.p>
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['そこへ、一人、また一人と', '想いを重ねてくださる人が増え、', 'MIRAISえほんは、', '私たち制作メンバーだけの', '絵本ではなくなりました。']} />
            </motion.p>
            <motion.div variants={fadeIn} className="relative pt-6">
              <div className="bg-white border-2 border-dashed border-rose-300 p-9 md:p-14 rounded-[2.5rem] text-center shadow-sm">
                <p className="story-title text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#e58fa5] leading-[1.8]">
                  <PhraseText phrases={['この絵本は、', `${crowdfunding.supporterCount}人の応援とともに`, 'つくられています。']} />
                </p>
                <p className="mt-6 text-base md:text-lg font-bold text-[#795548]">本当にありがとうございます。</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. クラファンを終えて */}
      <section className="py-24 md:py-36 px-6 bg-white relative">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center space-y-12"
        >
          <motion.h2 variants={fadeIn} className="story-title text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-[1.55]">
            <PhraseText phrases={['クラファンは終わりました。', 'でも、絵本づくりは', 'ここからです。']} />
          </motion.h2>

          <div className="story-copy text-base md:text-xl text-[#5d4037] leading-[2.2] md:leading-[2.4] space-y-8 max-w-[34rem] mx-auto text-left sm:text-center">
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['絵本が完成するまでには、', 'まだたくさんの工程があります。']} />
            </motion.p>
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['ストーリーを磨くこと。', '絵を描くこと。', '印刷方法を決めること。', '試し刷りをして、', '一冊の本として仕上げること。']} />
            </motion.p>
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['その途中も、できるだけ', '皆さんに届けていきます。']} />
            </motion.p>
            <motion.p variants={fadeIn} className="font-bold text-[#86bfa0] text-lg md:text-2xl leading-[2]">
              <PhraseText phrases={['「完成した本を受け取った人」', 'だけではなく、', '「この本ができるまでを', '一緒に見てきた人」に', 'なってほしい。']} />
            </motion.p>
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['そんなプロジェクトにしたいと', '思っています。']} />
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 4. いま、ここです（現在地） */}
      <section id="now" className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative overflow-hidden scroll-mt-4">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-14"
        >
          <div className="text-center space-y-5">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              <PhraseText phrases={['MIRAISえほん、', 'いまここです。']} />
            </motion.h2>
            <motion.p variants={fadeIn} className="text-sm text-[#795548] font-medium">
              最終更新：{lastUpdated}
            </motion.p>
          </div>

          {/* お届け予定 */}
          <motion.div variants={fadeIn} className="bg-white rounded-[2rem] px-8 py-8 md:px-12 md:py-10 shadow-sm border-l-8 border-[#e994aa] text-center">
            <p className="text-sm font-bold tracking-[0.14em] text-[#b29022] mb-3">支援者の皆さまへのお届け予定</p>
            <p className="font-serif font-bold text-[#5d4037] text-2xl md:text-3xl leading-[1.6]">{deliveryTarget}まで</p>
            <p className="mt-4 text-sm md:text-base text-[#795548] leading-[1.9]">
              <PhraseText phrases={['ハードカバーの絵本として', 'お届けします。']} />
            </p>
          </motion.div>

          {/* 近況 */}
          <motion.div variants={fadeIn} className="bg-[#fefce8] border border-[#f9e28c] rounded-[2rem] px-8 py-8 md:px-12 md:py-10">
            <h3 className="font-bold text-lg text-[#d4b028] mb-5 flex items-center">
              <Smile className="w-5 h-5 mr-2 shrink-0" /> いま進んでいること
            </h3>
            <ul className="space-y-4 text-[#5d4037] leading-relaxed">
              {latestNews.map((news) => (
                <li key={news} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#86bfa0] mr-3 shrink-0 mt-1" />
                  <span>{news}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ロードマップ */}
          <motion.div variants={fadeIn}>
            <h3 className="text-2xl md:text-3xl font-bold text-[#5d4037] text-center mb-10">完成までの道のり</h3>
            <ol className="max-w-2xl mx-auto space-y-4">
              {roadmap.map((step) => {
                const isDone = step.status === 'done';
                const isNow = step.status === 'now';
                return (
                  <li
                    key={step.label}
                    className={`relative flex items-start rounded-3xl p-6 md:p-8 shadow-sm border-l-8 ${
                      isNow
                        ? 'bg-white border-[#e994aa] ring-2 ring-rose-100'
                        : isDone
                          ? 'bg-white/70 border-[#86bfa0]'
                          : 'bg-white/70 border-slate-200'
                    }`}
                  >
                    <div className="mr-5 mt-1 shrink-0">
                      {isDone ? (
                        <CheckCircle className="w-8 h-8 text-[#86bfa0]" />
                      ) : isNow ? (
                        <Star className="w-8 h-8 text-[#e994aa]" />
                      ) : (
                        <BookOpen className="w-8 h-8 text-slate-300" />
                      )}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={`text-sm font-bold tracking-[0.1em] ${isNow ? 'text-[#e58fa5]' : 'text-[#b29022]'}`}>{step.label}</span>
                        {isNow && (
                          <span className="rounded-full bg-[#e994aa] px-3 py-0.5 text-[11px] font-bold tracking-[0.1em] text-white">NOW</span>
                        )}
                        {isDone && (
                          <span className="rounded-full bg-[#eef7f2] px-3 py-0.5 text-[11px] font-bold tracking-[0.1em] text-[#6ea887]">完了</span>
                        )}
                      </div>
                      <h4 className={`text-lg md:text-xl font-bold mb-2 ${isDone || isNow ? 'text-[#5d4037]' : 'text-[#5d4037]/70'}`}>{step.title}</h4>
                      <p className="text-[#5d4037]/80 leading-relaxed text-sm md:text-base">{step.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. 読む絵本ではなく、残す絵本を（コンセプトムービー） */}
      <section className="py-24 md:py-36 px-6 bg-white relative overflow-hidden">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto relative z-10 text-center space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="story-title text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-[1.55]">
              <PhraseText phrases={['読む絵本ではなく、', '残す絵本を作りたい。']} />
            </motion.h2>
          </div>

          <motion.div variants={fadeIn} className="w-full max-w-2xl mx-auto mt-12 mb-16">
            <p className="text-[#5d4037] font-bold text-lg md:text-xl mb-4 text-center">
              <PhraseText phrases={['この48秒に私たちが', 'この絵本を作る理由を', '込めました。']} />
            </p>
            <VideoFrame video={conceptVideo} />
            <VideoCredit lines={conceptVideo.credits} />
          </motion.div>

          <div className="story-copy text-lg md:text-xl text-[#5d4037] leading-[2.2] md:leading-[2.4] space-y-9 md:space-y-12 max-w-[34rem] mx-auto">
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['子どもを愛しているのに、', '笑顔でいられなかった日。']} />
            </motion.p>
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['早く寝てほしいと思った夜。', 'ひとりになりたいと思った瞬間。']} />
            </motion.p>
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['でも、その奥には、', 'いつも子どもへの愛がありました。']} />
            </motion.p>
            <motion.div variants={fadeIn} className="relative mt-24">
              <div className="bg-[#fff7f8] border-2 border-dashed border-rose-300 p-10 md:p-16 rounded-[2.5rem] text-center shadow-sm">
                <p className="story-title text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#e58fa5] leading-[1.8]">
                  <PhraseText phrases={['私たちが作っているのは、', 'そんな親の気持ちを', '未来へ残す絵本です。']} />
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 6. MIRAISえほんとは */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              <PhraseText phrases={['MIRAISえほんとは']} />
            </motion.h2>
          </div>

          <div className="text-xl md:text-2xl text-[#5d4037] leading-[2.5] space-y-8 max-w-3xl mx-auto">
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['MIRAISえほんは、', '育休コミュニティMIRAISの', 'メンバーの体験から生まれる', '物語です。']} />
            </motion.p>
            <motion.p variants={fadeIn} className="font-bold">
              <PhraseText phrases={['今まさに子育ての真ん中にいる', '親たちの声をもとに、', '未来の子どもへ残す', '一冊を作ります。']} />
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 7. なぜこの絵本なのか */}
      <section className="py-24 md:py-36 px-6 bg-gradient-to-b from-white to-[#fefce8] relative">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              <PhraseText phrases={['なぜ、この絵本を', '作るのか']} />
            </motion.h2>
          </div>
          <div className="text-xl md:text-2xl text-[#5d4037] leading-[2.5] space-y-10 max-w-3xl mx-auto">
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['親子愛を描く絵本は、', '世の中にたくさんあります。']} />
            </motion.p>
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['でも、今まさに育休中で、', '復職を控え、', '子育てに揺れる親たちの']} /><br/>
              <span className="text-2xl md:text-3xl font-bold text-[#f0a8b9] inline-block my-4">「生きた声」</span><br/>
              <PhraseText phrases={['から生まれる絵本は、', 'ほとんどありません。']} />
            </motion.p>
            <motion.p variants={fadeIn} className="font-bold text-[#86bfa0] pt-8 text-2xl md:text-3xl">
              <PhraseText phrases={['だから、MIRAISだから', '作る意味があります。']} />
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 8. この絵本で届けたいこと */}
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
          <div className="grid max-w-xl mx-auto gap-5 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            <motion.div variants={fadeIn} className="paper-texture group relative overflow-hidden rounded-[2rem] border border-[#f3d9df] bg-[#fff7f8] p-7 sm:p-9 md:px-7 md:py-9 lg:p-10 text-center shadow-[0_14px_40px_rgba(93,64,55,0.06)] transition-transform hover:-translate-y-1">
              <div className="mx-auto mb-5 flex h-20 w-20 rotate-[-3deg] items-center justify-center rounded-[44%_56%_48%_52%] bg-white text-[#e994aa] shadow-[0_10px_25px_rgba(233,148,170,0.16)] ring-1 ring-[#f4d8df] transition-transform group-hover:rotate-0">
                <BookOpen aria-hidden="true" strokeWidth={1.6} className="h-9 w-9" />
              </div>
              <h3 className="font-bold text-xl lg:text-2xl text-[#dc839a] mb-4">子どもへ</h3>
              <p className="story-copy text-[#5d4037] leading-[2] text-base lg:text-lg font-medium"><PhraseText phrases={['「あなたはずっと、', '大切に思われていた」という', '変わらない愛を伝えます。']} /></p>
            </motion.div>
            <motion.div variants={fadeIn} className="paper-texture group relative overflow-hidden rounded-[2rem] border border-[#cfe5d8] bg-[#f3faf6] p-7 sm:p-9 md:px-7 md:py-9 lg:p-10 text-center shadow-[0_14px_40px_rgba(93,64,55,0.06)] transition-transform hover:-translate-y-1">
              <div className="mx-auto mb-5 flex h-20 w-20 rotate-[3deg] items-center justify-center rounded-[54%_46%_52%_48%] bg-white text-[#74ae8d] shadow-[0_10px_25px_rgba(116,174,141,0.16)] ring-1 ring-[#cfe5d8] transition-transform group-hover:rotate-0">
                <Heart aria-hidden="true" strokeWidth={1.6} className="h-9 w-9" />
              </div>
              <h3 className="font-bold text-xl lg:text-2xl text-[#6ea887] mb-4">親へ</h3>
              <p className="story-copy text-[#5d4037] leading-[2] text-base lg:text-lg font-medium"><PhraseText phrases={['うまくできなかった自分を', '責めるのではなく、', '一生懸命だった自分を', '抱きしめるお守りに。']} /></p>
            </motion.div>
            <motion.div variants={fadeIn} className="paper-texture group relative overflow-hidden rounded-[2rem] border border-[#f0dfaa] bg-[#fffbec] p-7 sm:p-9 md:px-7 md:py-9 lg:p-10 text-center shadow-[0_14px_40px_rgba(93,64,55,0.06)] transition-transform hover:-translate-y-1">
              <div className="mx-auto mb-5 flex h-20 w-20 rotate-[-2deg] items-center justify-center rounded-[48%_52%_55%_45%] bg-white text-[#c9a52e] shadow-[0_10px_25px_rgba(201,165,46,0.16)] ring-1 ring-[#f0dfaa] transition-transform group-hover:rotate-0">
                <Users aria-hidden="true" strokeWidth={1.6} className="h-9 w-9" />
              </div>
              <h3 className="font-bold text-xl lg:text-2xl text-[#b99520] mb-4">未来の家族へ</h3>
              <p className="story-copy text-[#5d4037] leading-[2] text-base lg:text-lg font-medium"><PhraseText phrases={['数年後、', '一緒に読み返したときに、', '「こんなこともあったね」と', '笑い合える時間を届けます。']} /></p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 8-2. 届いたあとの家族（声の美容液 × MIRAIS） */}
      {(familyVideo.youtubeId || familyVideo.src) && (
        <section className="py-24 md:py-36 px-6 bg-[#fefce8] relative overflow-hidden">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="story-title text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-[1.55] mb-8">
              <PhraseText phrases={['そして、いつか', '家族の時間になる。']} />
            </motion.h2>

            <motion.p variants={fadeIn} className="story-copy text-base md:text-xl text-[#5d4037] leading-[2.2] max-w-[32rem] mx-auto mb-12">
              <PhraseText phrases={['MIRAISえほんが届いたあと、', 'その家族に流れていく時間を、', '声とお話にしていただきました。']} />
            </motion.p>

            <motion.div variants={fadeIn}>
              <VideoFrame video={familyVideo} />

              <p className="mt-5 text-sm md:text-base font-bold text-[#5d4037] text-left leading-relaxed">
                {familyVideo.heading}
              </p>
              <VideoCredit lines={familyVideo.credits} />
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* 9. 絵本の概要 */}
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
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#5d4037]"><PhraseText phrases={['MIRAISえほん', ' 第1弾']} /><br/><span className="text-lg text-rose-400 font-sans font-normal mt-2 block">（タイトルは制作中）</span></h3>
              <ul className="space-y-5 text-[#5d4037] text-lg">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-rose-400 mr-4 shrink-0 mt-1" /> <span><strong>対象年齢:</strong>{' '}{bookSpec.target}</span></li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-rose-400 mr-4 shrink-0 mt-1" />
                  <span>
                    <strong>ページ数・仕様:</strong>{' '}{bookSpec.format}
                    <span className="mt-2 block text-sm text-[#86bfa0] font-bold">{bookSpec.formatNote}</span>
                  </span>
                </li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-rose-400 mr-4 shrink-0 mt-1" /> <span><strong>読み聞かせ時間:</strong>{' '}{bookSpec.readingTime}</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-rose-400 mr-4 shrink-0 mt-1" /> <span><strong>登場キャラクター:</strong>{' '}{bookSpec.character}</span></li>
              </ul>
              <p className="text-sm text-[#795548] leading-relaxed">※{bookSpec.specNote}</p>
              <div className="p-6 md:p-8 bg-[#fef5f7] rounded-2xl text-[#5d4037] font-medium leading-relaxed shadow-inner">
                <strong>ルナの役割:</strong>{' '}<PhraseText phrases={['親子の間に座る、', '「小さな気持ちの通訳者」です。', 'まだ言葉になっていない', '気持ちを見つめ、', '正解を教えたり、', '問題を解決したりするのではなく、', 'うまくできなかった日の奥にも', '残っている「大好き」を、', '親子が自分たちで', '見つけられるよう、', 'そっと寄り添います。']} />
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center relative group">
              <div className="absolute inset-0 bg-white blur-xl opacity-60 rounded-full"></div>
              <Image
                src="/luna_reading_reference.png"
                alt="公式デザインをもとに描いたベイビールナ"
                width={1254}
                height={1254}
                sizes="(max-width: 767px) 320px, 384px"
                className="relative w-full max-w-sm mx-auto transition-transform drop-shadow-[0_18px_24px_rgba(93,64,55,0.10)] group-hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 10. 応援の声（実コメントが入るまで非表示） */}
      {supportVoices.length > 0 && (
        <section className="py-24 md:py-36 px-6 bg-[#fefce8] relative">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto space-y-16"
          >
            <div className="text-center space-y-6">
              <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037]">
                <PhraseText phrases={['いただいた', '応援の言葉']} />
              </motion.h2>
            </div>

            <div className="grid max-w-xl mx-auto gap-8 lg:max-w-none lg:grid-cols-3">
              {supportVoices.map((voice) => (
                <motion.div key={voice.name + voice.body.slice(0, 8)} variants={fadeIn} className="bg-white p-8 rounded-[2rem] shadow-sm relative">
                  <MessagesSquare className="absolute top-6 right-6 w-8 h-8 text-[#f9e28c] opacity-50" />
                  <p className="text-[#5d4037] font-bold text-lg mb-6 relative z-10 leading-relaxed">「{voice.body}」</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#f4f7f5] rounded-full flex items-center justify-center text-[#86bfa0] font-bold">
                      {voice.name.slice(0, 1)}
                    </div>
                    <div>
                      <p className="font-bold text-[#5d4037]">{voice.name}</p>
                      {voice.note && <p className="text-xs text-[#5d4037]/70">{voice.note}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* 11. この絵本を、一緒につくってくれた皆さま */}
      <section id="thanks" className="py-24 md:py-36 px-6 bg-white relative border-t border-slate-100">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              <PhraseText phrases={['この絵本を、', '一緒につくってくれた皆さま']} />
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[#795548] font-medium text-base md:text-lg leading-relaxed">
              <PhraseText phrases={['スポンサーとして、', 'この挑戦を支えてくださった', '企業・団体・個人の皆さまです。']} />
            </motion.p>
          </div>

          {hasSponsors ? (
            <div className="space-y-14">
              {premiumCorporateSponsors.length > 0 && (
                <motion.div variants={fadeIn}>
                  <h3 className="text-center font-bold text-xl md:text-2xl text-[#5d4037] mb-8">プレミアム法人スポンサー</h3>
                  <div className="grid max-w-3xl mx-auto grid-cols-1 gap-6 md:grid-cols-2">
                    {premiumCorporateSponsors.map((s) => <SponsorCard key={s.name} sponsor={s} variant="premium" />)}
                  </div>
                </motion.div>
              )}
              {corporateSponsors.length > 0 && (
                <motion.div variants={fadeIn}>
                  <h3 className="text-center font-bold text-xl md:text-2xl text-[#5d4037] mb-8">法人スポンサー</h3>
                  <div className="grid max-w-3xl mx-auto grid-cols-1 gap-6 md:grid-cols-2">
                    {corporateSponsors.map((s) => <SponsorCard key={s.name} sponsor={s} variant="corporate" />)}
                  </div>
                </motion.div>
              )}
              {individualSponsors.length > 0 && (
                <motion.div variants={fadeIn}>
                  <h3 className="text-center font-bold text-xl md:text-2xl text-[#5d4037] mb-8">個人スポンサー</h3>
                  <div className="grid max-w-5xl mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {individualSponsors.map((s) => <SponsorCard key={s.name} sponsor={s} variant="individual" />)}
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            <motion.div variants={fadeIn} className="max-w-2xl mx-auto rounded-[2rem] border-2 border-dashed border-[#a8d5ba] bg-[#f4f7f5] px-8 py-12 text-center">
              <Building2 className="mx-auto mb-5 h-10 w-10 text-[#86bfa0]" />
              <p className="text-[#5d4037] leading-[2] font-medium">
                <PhraseText phrases={[
                  `プレミアム法人スポンサー${sponsorCounts.premiumCorporate}社、`,
                  `法人スポンサー${sponsorCounts.corporate}社、`,
                  `個人スポンサー${sponsorCounts.individual}名の皆さまに`,
                  'お力添えいただきました。'
                ]} />
              </p>
              <p className="mt-5 text-sm text-[#795548] leading-relaxed">
                お名前・ロゴの掲載は、順次おこないます。
              </p>
            </motion.div>
          )}

          {/* Special Thanks */}
          <motion.div variants={fadeIn} className="pt-4">
            <div className="rounded-[3rem] bg-[#fef5f7] px-8 py-12 md:px-16 md:py-16 text-center">
              <p className="text-sm font-bold tracking-[0.3em] text-[#e58fa5] mb-5">SPECIAL THANKS</p>
              <p className="text-[#5d4037] leading-[2] font-medium max-w-2xl mx-auto">
                <PhraseText phrases={['クラウドファンディングを通して、', 'この絵本を支えてくださった皆さま。']} />
              </p>

              {specialThanks.length > 0 ? (
                <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-3 max-w-3xl mx-auto">
                  {specialThanks.map((name) => (
                    <span key={name} className="rounded-full bg-white px-5 py-2 text-sm md:text-base font-bold text-[#5d4037] shadow-sm">
                      {name}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-8 text-sm text-[#795548] leading-relaxed">
                  掲載にご同意いただいた方のお名前を、順次掲載します。
                </p>
              )}

              <p className="mt-10 text-base md:text-lg font-bold text-[#86bfa0] leading-[2]">
                <PhraseText phrases={[`${crowdfunding.supporterCount}名の皆さま、`, '本当にありがとうございました。']} />
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 12. 一緒につくっている人 */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center space-y-6 mb-10">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              <PhraseText phrases={['一緒に', 'つくっている人']} />
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-[#5d4037] leading-relaxed max-w-2xl mx-auto font-medium">
              <PhraseText phrases={['ここまでに、数十回の', 'ミーティングを重ねました。', '親たちが自分の本音を書き出し、', '何度も話し合い、', 'イラストを描き、', '一冊の形へ近づいています。']} />
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-rose-100 shadow-md bg-[#f4f7f5]">
                <img src="/naonao.jpg" alt="なおなお" className="w-full h-full object-cover" />
              </div>
              <div><p className="text-sm font-bold text-[#86bfa0] mb-1">プロジェクト起案・企画</p><p className="font-bold text-[#5d4037] text-xl">なおなお</p></div>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#f9e28c] shadow-md bg-[#fefce8]">
                <img src="/leon.png" alt="れおん" className="w-full h-full object-cover" />
              </div>
              <div><p className="text-sm font-bold text-[#86bfa0] mb-1">作画・クリエイティブ</p><p className="font-bold text-[#5d4037] text-xl">れおん</p></div>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-200 shadow-md bg-blue-50">
                <img src="/adi.png" alt="あでぃ" className="w-full h-full object-cover" />
              </div>
              <div><p className="text-sm font-bold text-[#86bfa0] mb-1">クラウドファンディング設計</p><p className="font-bold text-[#5d4037] text-xl">あでぃ</p></div>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#a8d5ba] shadow-md bg-rose-50">
                <img src="/mayumi.png" alt="栗林真由美" className="w-full h-full object-cover object-[20%_10%]" />
              </div>
              <div><p className="text-sm font-bold text-[#86bfa0] mb-1">MIRAIS代表</p><p className="font-bold text-[#5d4037] text-xl">栗林真由美</p></div>
            </motion.div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm">
            <h3 className="text-center font-bold text-2xl text-[#5d4037] mb-12">制作メンバー</h3>
            <div className="space-y-6 text-[#5d4037]">
              <motion.div variants={fadeIn} className="bg-[#fefce8] p-6 rounded-2xl border-2 border-[#f9e28c] shadow-sm">
                <h4 className="font-bold text-lg text-[#d4b028] mb-3 border-b border-white pb-2 flex items-center"><Smile className="w-5 h-5 mr-2 shrink-0" /> <PhraseText phrases={['編集・声集めメンバー']} /></h4>
                <p className="font-medium leading-relaxed"><PhraseText phrases={['さーちゃん、', 'しょうたん、', 'ともりん、', 'はあち、', 'まどこ、', 'まゆゆ、', 'わさびーぬ']} /></p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-[#fefce8] p-6 rounded-2xl border-2 border-[#f9e28c] shadow-sm">
                <h4 className="font-bold text-lg text-[#d4b028] mb-3 border-b border-white pb-2 flex items-center"><Smile className="w-5 h-5 mr-2 shrink-0" /> <PhraseText phrases={['制作管理チーム']} /></h4>
                <p className="font-medium leading-relaxed"><PhraseText phrases={['なっつん、', 'あおさん']} /></p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-[#fefce8] p-6 rounded-2xl border-2 border-[#f9e28c] shadow-sm">
                <h4 className="font-bold text-lg text-[#d4b028] mb-3 border-b border-white pb-2 flex items-center"><Smile className="w-5 h-5 mr-2 shrink-0" /> <PhraseText phrases={['イラスト・', 'ビジュアルチーム']} /></h4>
                <p className="font-medium leading-relaxed"><PhraseText phrases={['なっちゃん、', 'ゆきちゃん、', 'グラレコあいちゃん']} /></p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-[#fefce8] p-6 rounded-2xl border-2 border-[#f9e28c] shadow-sm">
                <h4 className="font-bold text-lg text-[#d4b028] mb-3 border-b border-white pb-2 flex items-center"><Smile className="w-5 h-5 mr-2 shrink-0" /> <PhraseText phrases={['広報・発信チーム']} /></h4>
                <p className="font-medium leading-relaxed"><PhraseText phrases={['しょうたん、', 'ゆきまる、', 'ゆーみん、', 'グラレコあいちゃん']} /></p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-[#fefce8] p-6 rounded-2xl border-2 border-[#f9e28c] shadow-sm">
                <h4 className="font-bold text-lg text-[#d4b028] mb-3 border-b border-white pb-2 flex items-center"><Smile className="w-5 h-5 mr-2 shrink-0" /> <PhraseText phrases={['クラファン・', '出版調査チーム']} /></h4>
                <p className="font-medium leading-relaxed"><PhraseText phrases={['なっつん、', 'まどこ、', 'ゆきまる、', 'ゆんちゃん']} /></p>
              </motion.div>
            </div>
            <div className="max-w-4xl mx-auto pt-16">
              <div className="rounded-[2rem] overflow-hidden shadow-lg border-[8px] border-white transform md:-rotate-1">
                <img src="/team.jpg" alt="MIRAISえほん制作チーム" className="w-full h-auto object-cover" />
              </div>
              <p className="text-center text-amber-600 font-bold tracking-widest text-sm mt-6"><PhraseText phrases={['多様なメンバーが', 'それぞれの強みを活かして', '制作しています。']} /></p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 13. クラウドファンディングの記録 */}
      <section id="record" className="py-24 md:py-36 px-6 bg-white relative scroll-mt-4">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-14"
        >
          <div className="text-center space-y-6">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              <PhraseText phrases={['MIRAISえほん', 'クラウドファンディングの記録']} />
            </motion.h2>
          </div>

          <motion.dl variants={fadeIn} className="max-w-2xl mx-auto divide-y divide-slate-100 rounded-[2rem] border border-slate-200 bg-[#fdfbf7] px-8 py-4 md:px-12">
            {[
              { k: '期間', v: `${crowdfunding.periodStart} 〜 ${crowdfunding.periodEnd}` },
              { k: '目標金額', v: `${goal}円` },
              { k: '支援総額', v: `${amount}円（達成率 ${crowdfunding.achievementRate}%）` },
              { k: '支援者数', v: `${crowdfunding.supporterCount}名` },
              { k: '絵本の仕様', v: 'ハードカバーで決定' },
              { k: 'お届け予定', v: `${deliveryTarget}まで` },
            ].map((row) => (
              <div key={row.k} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:gap-6">
                <dt className="w-40 shrink-0 text-sm font-bold tracking-[0.1em] text-[#b29022]">{row.k}</dt>
                <dd className="font-bold text-[#5d4037] text-base md:text-lg">{row.v}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={fadeIn} className="text-center">
            <a href={READYFOR_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center rounded-full border-2 border-[#86bfa0] px-8 py-4 text-base md:text-lg font-bold text-[#6ea887] transition-all hover:-translate-y-1 hover:bg-[#86bfa0] hover:text-white">
              READYFORで挑戦の記録を見る
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </a>
          </motion.div>

          {/* 資金の使い道 */}
          <motion.div variants={fadeIn} className="bg-[#f4f7f5] p-8 md:p-14 rounded-[3rem] shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#86bfa0] text-center mb-10"><PhraseText phrases={['資金の使い道', '（目安）']} /></h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center py-6">
                <div
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-lg border-8 border-white"
                  style={{ background: 'conic-gradient(#fb7185 0% 35%, #34d399 35% 58%, #fbbf24 58% 76%, #60a5fa 76% 91%, #c084fc 91% 96%, #94a3b8 96% 100%)' }}
                ></div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4 text-[#5d4037] text-lg font-medium leading-relaxed">
                  <div className="flex items-center"><div className="w-4 h-4 bg-rose-400 rounded-full mr-3 shrink-0"></div><span><PhraseText phrases={['MIRAIS入会・', 'リターン提供費']} /></span></div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-emerald-400 rounded-full mr-3 shrink-0"></div><span><PhraseText phrases={['印刷・製本費']} /></span></div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-amber-400 rounded-full mr-3 shrink-0"></div><span><PhraseText phrases={['増刷・寄贈・', '今後の展開']} /></span></div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-blue-400 rounded-full mr-3 shrink-0"></div><span><PhraseText phrases={['READYFOR手数料']} /></span></div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-purple-400 rounded-full mr-3 shrink-0"></div><span><PhraseText phrases={['広報・発送・運営費']} /></span></div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-slate-400 rounded-full mr-3 shrink-0"></div><span><PhraseText phrases={['絵本制作・編集費']} /></span></div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-emerald-100">
                  <p className="text-sm text-[#5d4037] leading-relaxed mb-4">
                    <PhraseText phrases={['※リターン構成に基づく目安であり、', '実際の支援内容によって', '割合は変動します。']} />
                  </p>
                  <div className="p-4 bg-[#fefce8] border border-[#f9e28c] rounded-xl text-xs text-[#5d4037] leading-relaxed">
                    <strong>注記：</strong><br/>
                    <PhraseText phrases={['「MIRAIS入会＋', 'えほん応援コース」に', '含まれる参加費は、', 'コミュニティの運営および', '活動提供に活用します。', 'それ以外のご支援は、', 'MIRAISえほん制作・', 'リターン提供・', 'プロジェクト運営に', '大切に活用します。']} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 14. 育休コミュニティMIRAISとは */}
      <section className="py-24 md:py-36 px-6 bg-[#f4f7f5] relative">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center space-y-6 mb-16">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-[2.5rem] font-serif font-bold text-[#5d4037] leading-tight">
              <PhraseText phrases={['育休コミュニティ', 'MIRAISとは']} />
            </motion.h2>
          </div>
          <div className="bg-white p-2 md:p-8 rounded-none md:rounded-[3rem] shadow-sm -mx-6 md:mx-0">
            <motion.div variants={fadeIn} className="w-full flex flex-col gap-2 md:gap-8">
              <img src="/mirais_about_1.png" alt="育休コミュニティMIRAISとは" className="w-full h-auto border border-slate-100 rounded-xl md:rounded-[2rem] cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('/mirais_about_1.png')} />
              <img src="/mirais_about_2.png" alt="MIRAISのめざすこと" className="w-full h-auto border border-slate-100 rounded-xl md:rounded-[2rem] cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('/mirais_about_2.png')} />
              <img src="/mirais_about_3.png" alt="MIRAISの活動内容" className="w-full h-auto border border-slate-100 rounded-xl md:rounded-[2rem] cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('/mirais_about_3.png')} />
              <img src="/mirais_about_4.png" alt="MIRAISの特徴" className="w-full h-auto border border-slate-100 rounded-xl md:rounded-[2rem] cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('/mirais_about_4.png')} />
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-[#86bfa0] mb-8"><PhraseText phrases={['これまでの', 'クラウドファンディング']} /></h3>
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

      {/* 15. 完成まで見守る（LINEオープンチャット） */}
      <section className="py-24 md:py-36 px-4 md:px-6 bg-[#fef5f7] relative overflow-hidden">
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
              <PhraseText phrases={['完成まで、', '一緒に見守ってください。']} />
            </h2>
            <div className="space-y-6 text-[#5d4037] text-lg md:text-xl leading-[2.2] font-medium">
              <p>
                <PhraseText phrases={['制作の進捗や、', '絵本ができるまでの裏側を', '受け取りたい方へ。']} />
              </p>

              <div className="bg-[#fefce8] p-6 md:p-8 rounded-2xl inline-block text-left my-8 border border-[#f9e28c]">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-rose-400 mr-3 shrink-0 mt-1" />
                    <span><strong><PhraseText phrases={['制作の進捗']} /></strong><PhraseText phrases={['を、', 'いち早くお届けします。']} /></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-rose-400 mr-3 shrink-0 mt-1" />
                    <span><PhraseText phrases={['イラストや試し刷りなど、']} /><strong><PhraseText phrases={['制作の裏側']} /></strong><PhraseText phrases={['もお届けします。']} /></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-rose-400 mr-3 shrink-0 mt-1" />
                    <span><strong><PhraseText phrases={['匿名・無料']} /></strong><PhraseText phrases={['でいつでも', '参加・退出できます。']} /></span>
                  </li>
                </ul>
              </div>

              <p className="font-bold text-[#86bfa0] text-xl md:text-2xl pt-4">
                <PhraseText phrases={['一緒に、', 'この絵本の最後の1ページまで', '見届けてください。']} />
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

      {/* 16. 最後のメッセージ */}
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
                <p><PhraseText phrases={['私たち親から子への', '溢れるほどの愛が', '絵本を通して', 'まっすぐ子どもたちへ伝わり、', '愛されていた確かな記憶と共に', 'これから未来を生きる親子を', '温かく繋いでいく一冊へ——。']} /></p>
                <p><PhraseText phrases={['そんな願いを込めて', '挑戦してきました。']} /></p>
                <p><PhraseText phrases={['たくさんの方に支えていただき、', 'いま、その一冊が', '形になろうとしています。']} /></p>
                <p className="font-bold"><PhraseText phrases={['完成した絵本を', '一人でも多くの', 'ママパパと子どもたちへ', '届けるため、', '最後まで誠心誠意', '走り抜けます。']} /></p>
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
                <p><PhraseText phrases={['私は、双子を育てる親です。', '子どもたちを', '大切に思っているのに、', '寝顔を見ながら、', '「今日はもっと', 'できたんじゃないかな」', 'と自分を責めた夜が', '何度もありました。']} /></p>
                <p><PhraseText phrases={['そんな夜があったからこそ、', 'この絵本だけは', '形にしたいと思いました。', 'あの日の私のように、', '自分を責めている誰かに', '届けたいからです。']} /></p>
                <p><PhraseText phrases={['まだ何も形がない段階で、', `${crowdfunding.supporterCount}人の方が`, '「できる」と信じて', '手を挙げてくださいました。', 'この絵本は、', 'もう私たちだけのものでは', 'ありません。']} /></p>
                <p className="font-bold"><PhraseText phrases={['「本ができたら知っていた」', 'ではなく、', '「本ができるまで、', '一緒に育てた」', 'そんな一冊にします。', '最後まで、やり切ります。']} /></p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 17. 最後のCTA */}
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

          <motion.h2 variants={fadeIn} className="story-title text-3xl md:text-[2.75rem] font-serif font-bold text-[#5d4037] mb-14 leading-[1.5]">
            <PhraseText phrases={[`${crowdfunding.supporterCount}人と始まった物語を、`, '完成まで。']} />
          </motion.h2>

          <div className="story-copy text-base md:text-xl text-[#795548] leading-[2.2] space-y-7 max-w-[34rem] mx-auto mb-16">
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['クラウドファンディングは', '終わりました。', 'でも、この絵本の物語は', 'まだ途中です。']} />
            </motion.p>
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['絵が生まれ、本になり、', '誰かの親子の時間へ届くまで。']} />
            </motion.p>
            <motion.p variants={fadeIn}>
              <PhraseText phrases={['これからも、その途中を', '一緒に見てもらえたら', '嬉しいです。']} />
            </motion.p>
          </div>

          <motion.p variants={fadeIn} className="text-2xl md:text-4xl font-serif font-bold text-[#5d4037] mb-6 leading-[1.6]">
            <PhraseText phrases={['うまくできない日も、', '大好きは残せる。']} />
          </motion.p>
          <motion.p variants={fadeIn} className="text-lg md:text-xl font-bold text-[#86bfa0] mb-14">
            MIRAISえほんは、完成に向けて進んでいます。
          </motion.p>

          <motion.div variants={fadeIn}>
            <a href="#now" className="group relative inline-flex items-center justify-center px-12 md:px-20 py-6 md:py-7 text-xl md:text-2xl font-bold text-white transition-all bg-[#f0a8b9] rounded-full hover:bg-rose-400 overflow-hidden shadow-2xl hover:shadow-rose-300/50 hover:-translate-y-2 w-full sm:w-auto">
              <span className="relative flex items-center tracking-wider">
                最新の制作状況を見る <ArrowRight className="ml-4 w-7 h-7 transition-transform group-hover:translate-x-3" />
              </span>
            </a>
            <p className="mt-8 text-sm md:text-base text-[#795548] font-medium">
              最終更新：{lastUpdated}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 拡大画像モーダル */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors">
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="拡大画像"
              className="max-w-full max-h-full object-contain rounded-2xl md:rounded-[2rem] cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
