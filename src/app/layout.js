import { Murecho } from 'next/font/google'
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const murecho = Murecho({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "ShareTrip - Ecommerce",
  description: "A modern ecommerce with latest technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={murecho.className}>
      <body
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
