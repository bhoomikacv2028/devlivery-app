import { useState } from "react";
import { ShoppingCart, User, LogOut, Leaf, MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  onCartOpen: () => void;
  onAuthOpen: () => void;
}

const Navbar = ({ onCartOpen, onAuthOpen }: NavbarProps) => {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [addressOpen, setAddressOpen] = useState(false);
  const [address, setAddress] = useState({
    line: "Sector 62, Noida",
    city: "Noida",
    pincode: "201301",
  });
  const [draft, setDraft] = useState(address);

  const saveAddress = () => {
    setAddress(draft);
    setAddressOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg hero-gradient">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Groc<span className="text-primary">ify</span>
            </span>
          </div>

          {/* Address + Delivery */}
          <button
            onClick={() => { setDraft(address); setAddressOpen(true); }}
            className="hidden sm:flex items-center gap-2 rounded-lg border bg-accent/50 px-3 py-1.5 text-left transition-colors hover:bg-accent"
          >
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">Deliver to — {address.pincode}</p>
              <p className="text-xs text-muted-foreground truncate">{address.line}, {address.city}</p>
            </div>
            <ChevronDown className="h-3 w-3 text-muted-foreground shrink-0" />
          </button>

          {/* Delivery badge */}
          <div className="hidden md:flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 shrink-0">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold text-accent-foreground">10–15 mins</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {user ? (
              <div className="flex items-center gap-2">
                <span className="hidden text-sm font-medium text-muted-foreground lg:inline">
                  Hi, {user.name}
                </span>
                <Button variant="ghost" size="icon" onClick={logout} aria-label="Logout">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="sm" onClick={onAuthOpen} className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            )}
            <button onClick={() => navigate("/orders")}>
                   My Orders
                   </button>

            <Button variant="outline" size="icon" className="relative" onClick={onCartOpen} aria-label="Open cart">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile address bar */}
        <button
          onClick={() => { setDraft(address); setAddressOpen(true); }}
          className="flex sm:hidden items-center gap-2 border-t px-4 py-2 w-full text-left bg-accent/30"
        >
          <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
          <span className="text-xs text-foreground truncate flex-1">{address.line}, {address.city} — {address.pincode}</span>
          <div className="flex items-center gap-1 shrink-0">
            <Clock className="h-3 w-3 text-primary" />
            <span className="text-xs font-semibold text-accent-foreground">10–15 mins</span>
          </div>
        </button>
      </header>

      {/* Address Modal */}
      <Dialog open={addressOpen} onOpenChange={setAddressOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Delivery Address
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="addr-line">Address / Locality</Label>
              <Input id="addr-line" value={draft.line} onChange={(e) => setDraft({ ...draft, line: e.target.value })} placeholder="e.g. Sector 62, Near Metro Station" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="addr-city">City</Label>
                <Input id="addr-city" value={draft.city} onChange={(e) => setDraft({ ...draft, city: e.target.value })} placeholder="e.g. Noida" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="addr-pin">Pincode</Label>
                <Input id="addr-pin" value={draft.pincode} onChange={(e) => setDraft({ ...draft, pincode: e.target.value })} placeholder="e.g. 201301" maxLength={6} />
              </div>
            </div>
            <Button className="w-full hero-gradient text-primary-foreground" onClick={saveAddress}>
              Save Address
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
