import type { Metadata } from 'next';
import LoginForm from '../components/LoginForm';

import Footer from '../components/Footer';
import Header1 from '../components/Header1';
import Header2 from '../components/Header2';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your Nike account',
};

export default function LoginPage() {
  return (
    <>
      <Header1 />
      <Header2/>
      <main className="min-h-[calc(100vh-160px)] bg-white">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}