import { useState } from 'react';
import Layout from '../components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <Layout cartCount={cartCount} searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
      <Component
        {...pageProps}
        addToCart={addToCart}
        searchQuery={searchQuery}
      />
    </Layout>
  );
}
