import { Trispace } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RestrictedNews } from '@/components/Restricted';

const trispace = Trispace({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'BlogsSpot',
  description: 'Write. Share. Inspire.',
  icons: {
    icon: [
      { url: '/img/favicon-32x32.png', sizes: "32x32" },
      { url: '/img/favicon-16x16.png', sizes: "16x16" },
    ],
    apple: {
      url: "/img/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: 'BlogsSpot',
    description: 'Write. Share. Inspire.',
    type: 'article',
    authors: 'theoyoth',
  },
  keywords: ['blogsspot', 'news', 'news about everything'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <main className="px-2 md:px-20">
          <Header />
          <section className="flex justify-between">
            {children}
            <div>
              <RestrictedNews />
            </div>
          </section>
        </main>
          <Footer/>
      </body>
    </html>
  );
}
