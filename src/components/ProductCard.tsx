import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { type Product, formatPrice } from "@/data/mockData";

const ProductCard = ({ product }: { product: Product }) => {
  const { items, addToCart, updateQuantity } = useCart();
  const cartItem = items.find((i) => i.product.id === product.id);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1">
      <div className="flex h-36 items-center justify-center overflow-hidden bg-accent/30 p-3">
        <img
          src={`http://localhost:5000/images/${product.image}`}
          alt={product.name}
          loading="lazy"
          width={512}
          height={512}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-semibold text-card-foreground leading-tight">{product.name}</h3>
        <p className="text-xs text-muted-foreground">{product.unit}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
          {!product.inStock ? (
            <span className="text-xs font-medium text-destructive">Out of stock</span>
          ) : cartItem ? (
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}>
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-6 text-center text-sm font-semibold">{cartItem.quantity}</span>
              <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => addToCart(product)}>
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <Button size="sm" onClick={() => addToCart(product)} className="h-8 text-xs">
              Add
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
