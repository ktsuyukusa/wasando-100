import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "どうすれば「次の100年も」稼ぎ続けられるか｜WaSanDo",
  description: "今ある会社、新しい収入源、引き継ぐ事業。出発点から、継続して稼ぐ仕組みをつくる。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
