import Providers from '@/components/layout/providers';
// import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ortho Analytics',
  description: 'Basic dashboard for tracking question metrics and user analytics.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-hidden `}
        suppressHydrationWarning={true}
      >
        <NextTopLoader showSpinner={false} />
        <Providers>
          {/* <Toaster /> */}
          {children}
        </Providers>
        {/* <iframe
          src="https://devapp.drparashar.ai/chatbot/derma/general-doctor"
          width="350"
          height="680"
          allow="microphone; camera"
          style="position: fixed; bottom: 60px; right: -10px; border: none; border-radius: 10px; background: transparent; z-index: 1000; width: 400px; height: 680px;"
          >
        </iframe> */}
      </body>
    </html>
  );
}
