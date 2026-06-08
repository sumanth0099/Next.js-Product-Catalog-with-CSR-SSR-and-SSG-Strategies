import ProductGrid from '@/components/ProductGrid';
import Head from 'next/head';

export async function getServerSideProps() {
    try {
        const res = await fetch('https://dummyjson.com/products?limit=20');
        const data = await res.json();

        return {
            props: {
                products: data.products || []
            }
        };
    } catch (error) {
        return {
            props: {
                products: []
            }
        };
    }
}

export default function ProductsPage({ products, addToCart, searchQuery }) {
    const filteredProducts = products.filter(p =>
        p.title.toLowerCase().includes((searchQuery || '').toLowerCase())
    );

    return (
        <div>
            <Head>
                <title>SSR Rendered Catalog</title>
            </Head>
            <h1 className="text-3xl font-bold mb-6">SSR Products List</h1>
            <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
        </div>
    );
}
