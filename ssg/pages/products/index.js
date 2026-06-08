import ProductGrid from '@/components/ProductGrid';
import Head from 'next/head';

export async function getStaticProps() {
    try {
        const res = await fetch('https://dummyjson.com/products?limit=20');
        const data = await res.json();

        return {
            props: {
                products: data.products || []
            },
            revalidate: 60,
        };
    } catch (error) {
        return {
            props: {
                products: []
            },
            revalidate: 60,
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
                <title>SSG Rendered Catalog</title>
            </Head>
            <h1 className="text-3xl font-bold mb-6">SSG Products List</h1>
            <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
        </div>
    );
}
