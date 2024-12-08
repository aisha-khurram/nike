import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nike. Just Do It.',
  description: 'Nike. Just Do It. Nike IN',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}