import { Murecho } from 'next/font/google'
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer position="bottom-center" />
        <Footer />
      </body>
    </html>
  );
}
