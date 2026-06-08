import { useEffect, useState } from 'react';
import ProductGrid from '@/components/ProductGrid';
import Head from 'next/head';

export default function ProductsPage({ addToCart, searchQuery }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=20')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products || []);
                setLoading(false);
            });
    }, []);

    const filteredProducts = products.filter(p =>
        p.title.toLowerCase().includes((searchQuery || '').toLowerCase())
    );

    return (
        <div>
            <Head>
                <title>CSR Rendered Catalog</title>
            </Head>
            <h1 className="text-3xl font-bold mb-6">CSR Products List</h1>
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="animate-pulse bg-gray-200 h-80 rounded-lg"></div>
                    ))}
                </div>
            ) : (
                <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
            )}
        </div>
    );
}
