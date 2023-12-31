import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import ModalProviders from './(product)/components/ModalProviders';
import { Footer, Providers } from './shared/components/ui';
import { Navbar } from './shared/components/navbar';

const inter = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store App',
  description: 'Store App'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <ModalProviders />
        <Providers />
        {children}
        <Footer />
      </body>
    </html>
  );
}
