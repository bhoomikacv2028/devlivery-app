import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const navigate = useNavigate();

  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">

        {/* HEADER */}
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {/* EMPTY CART */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-muted-foreground">
            <ShoppingBag className="h-16 w-16 opacity-30" />
            <p className="text-lg font-medium">Cart is empty</p>
            <p className="text-sm">Add some items to get started</p>
          </div>
        ) : (
          <>
            {/* ITEMS */}
            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 rounded-lg border bg-card p-3"
                >
                  {/* IMAGE */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-12 w-12 rounded-md object-contain"
                  />

                  {/* DETAILS */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">
                      {item.product.name}
                    </p>
                    <p className="text-sm font-bold text-primary">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>

                    <span className="w-6 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>

                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  {/* DELETE */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-destructive"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="space-y-3 pt-4">
              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Total</span>
                <span className="text-xl font-bold text-primary">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <Button
                className="w-full bg-green-500 text-white hover:bg-green-600"
                onClick={() => {
                  navigate("/address");
                  onClose();
                }}
              >
                Checkout →
              </Button>

              <Button
                variant="ghost"
                className="w-full text-muted-foreground"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;