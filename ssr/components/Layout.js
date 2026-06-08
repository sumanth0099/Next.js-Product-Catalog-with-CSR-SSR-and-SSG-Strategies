import Header from './Header';

export default function Layout({ children, cartCount, searchQuery, setSearchQuery }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-black">
            <Header cartCount={cartCount} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>
            <footer className="bg-gray-800 text-white text-center p-4 mt-8">
                &copy; {new Date().getFullYear()} Product Catalog Benchmark
            </footer>
        </div>
    );
}
