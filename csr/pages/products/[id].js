import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function ProductDetail({ addToCart }) {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="animate-pulse bg-gray-200 h-96 w-full rounded-lg"></div>;
    }

    if (!product?.id) {
        return <div className="text-center py-20 text-gray-500">Product not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <Head>
                <title>{product.title} - CSR</title>
            </Head>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="relative w-full md:w-1/2 h-96">
                    {product.images?.[0] && (
                        <Image
                            src={product.images[0]}
                            alt={product.title}
                            fill
                            className="object-contain"
                        />
                    )}
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h1 className="text-3xl font-bold mb-4" data-testid="product-title">{product.title}</h1>
                    <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                    <div className="text-2xl font-bold mb-4">${product.price}</div>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition-colors w-full sm:w-auto"
                        data-testid="add-to-cart-btn"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
