import Head from 'next/head';
import Image from 'next/image';

export async function getServerSideProps(context) {
    const { id } = context.params;
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if (!res.ok) {
            return { notFound: true };
        }

        const product = await res.json();

        return {
            props: {
                product
            }
        };
    } catch (error) {
        return { notFound: true };
    }
}

export default function ProductDetail({ product, addToCart }) {
    if (!product) {
        return <div className="text-center py-20 text-gray-500">Product not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <Head>
                <title>{product.title} - SSR</title>
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
