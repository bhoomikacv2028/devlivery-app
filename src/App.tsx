import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import Razorpay from "./pages/Razorpay";
import Success from "./pages/Success";
import Orders from "./pages/Orders";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          
              <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/address" element={<Address />} />
  <Route path="/payment" element={<Payment />} />
  <Route path="/razorpay" element={<Razorpay />} />
  <Route path="/success" element={<Success />} />
  <Route path="/orders" element={<Orders />} />
   <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
