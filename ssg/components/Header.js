import Link from 'next/link';

export default function Header({ cartCount, searchQuery, setSearchQuery }) {
    return (
        <header className="bg-gray-800 text-white p-4 sticky top-0 z-10 shadow-md">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <Link href="/products" className="text-2xl font-bold hover:text-gray-300">
                    Catalog
                </Link>
                <div className="flex-grow max-w-md w-full">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery || ''}
                        onChange={(e) => setSearchQuery?.(e.target.value)}
                        className="w-full p-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        data-testid="search-input"
                    />
                </div>
                <div className="text-lg font-semibold bg-gray-700 px-4 py-2 rounded-md">
                    Cart: <span data-testid="cart-count">{cartCount || 0}</span>
                </div>
            </div>
        </header>
    );
}
