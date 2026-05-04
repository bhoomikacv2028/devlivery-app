import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";        
import CartDrawer from "@/components/CartDrawer"; 
import AuthModal from "@/components/AuthModal";     
import { Search, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";   

const Index = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false); 


  useEffect(() => {
  fetch("http://localhost:5000/products")
    .then(res => res.json())                
    .then(data => setProducts(data))
    .catch(err => console.error(err));
}, []);

  const filtered = products.filter((p) => {
    const matchesCat = !selectedCategory || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar onCartOpen={() => setCartOpen(true)} onAuthOpen={() => setAuthOpen(true)} />

      {/* Hero */}
      <section className="hero-gradient py-12 text-primary-foreground">
        <div className="container text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5" />
            Delivery in 10–15 minutes
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Groceries delivered<br />to your doorstep ⚡
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base opacity-90">
            Atta, dal, sabzi, fruits & more — fresh and fast, right from your neighbourhood store.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-8">
      
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search atta, dal, milk..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </div>


        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
};

export default Index;
