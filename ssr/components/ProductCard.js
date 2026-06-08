import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col hover:shadow-lg transition-shadow bg-white" data-testid="product-item">
      <div className="relative w-full h-48 mb-4">
        {product.images?.[0] ? (
          <Image 
            src={product.images[0]} 
            alt={product.title} 
            fill 
            className="object-contain" 
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>
        )}
      </div>
      <h2 className="text-xl font-semibold mb-2" data-testid="product-title">{product.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{product.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg font-bold">${product.price}</span>
        <button 
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          data-testid="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>
      <div className="mt-4 text-sm text-blue-600 hover:underline">
        <Link href={`/products/${product.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}
