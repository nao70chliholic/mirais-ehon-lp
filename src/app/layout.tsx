import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MIRAISえほん クラウドファンディング",
  description: "育休コミュニティMIRAIS発。親のリアルな気持ちを、親子で読み返せる絵本にします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${shipporiMincho.variable} ${zenMaruGothic.variable}`}>
      <body className="font-zen antialiased text-slate-800 bg-[#fdfbf7] selection:bg-rose-200">
        {children}
      </body>
    </html>
  );
}
