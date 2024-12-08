import Cart from '../components/Cart';

import Footer from '../components/Footer';
import Header1 from '../components/Header1';
import Header2 from '../components/Header2';

export default function CartPage() {
  return (
    <>
      <Header1/>
      <Header2/>
      <main className="min-h-[calc(100vh-160px)] bg-white">
        <Cart />
      </main>
      <Footer />
    </>
  );
}