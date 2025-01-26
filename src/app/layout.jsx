import Footer from "./components/Footer";
import "./globals.css";
import { Sora, Noto_Sans } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '700'],
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['400', '700'],
});

export const metadata = {
  title: "GDG USAR",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${notoSans.variable}`}>
      <body className={`noise-background font-noto-sans flex flex-col min-h-screen`}>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
