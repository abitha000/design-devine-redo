import { useState } from "react";
import { toast } from "sonner";
import WelcomeScreen from "@/components/WelcomeScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import CartModal, { CartItem } from "@/components/CartModal";
import AccountModal from "@/components/AccountModal";
import PolicyModal from "@/components/PolicyModal";

const products = {
  'hair-oil': { name: 'Premium Hair Oil', price: 299 },
  'face-pack': { name: 'Natural Face Pack', price: 199 },
  'health-mix': { name: 'Wellness Health Mix', price: 399 },
  'pain-relief': { name: 'Pain Relief Oil', price: 249 }
};

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('User');
  const [userMobile, setUserMobile] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState('');

  const handleLogin = (mobile: string) => {
    setIsLoggedIn(true);
    setUserMobile(mobile);
    setUserName('Welcome User!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCart([]);
    toast.success("You have been logged out successfully!");
  };

  const handleAddToCart = (productId: string) => {
    if (!isLoggedIn) {
      toast.error("Please login to add items to your cart!");
      setIsAuthModalOpen(true);
      return;
    }

    const product = products[productId as keyof typeof products];
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        id: productId,
        name: product.name,
        price: product.price,
        quantity: 1
      }]);
    }

    toast.success(`${product.name} added to cart!`);
  };

  const handleUpdateQuantity = (productId: string, change: number) => {
    const item = cart.find(item => item.id === productId);
    if (item) {
      if (item.quantity + change <= 0) {
        handleRemoveFromCart(productId);
      } else {
        setCart(cart.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + change }
            : item
        ));
      }
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.info("Item removed from cart");
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    toast.success("Checkout functionality would connect to your payment processor here!");
  };

  const handleOpenPolicy = (type: string) => {
    setPolicyType(type);
    setIsPolicyModalOpen(true);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <WelcomeScreen />
      
      <Navigation
        isLoggedIn={isLoggedIn}
        cartCount={cartCount}
        onOpenCart={() => setIsCartModalOpen(true)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenAccount={() => setIsAccountModalOpen(true)}
        onLogout={handleLogout}
      />
      
      <Hero />
      <About />
      <Products onAddToCart={handleAddToCart} />
      <Features />
      <Contact />
      <Footer onOpenPolicy={handleOpenPolicy} />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
      
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      
      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
        userName={userName}
        userMobile={userMobile}
      />
      
      <PolicyModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
        type={policyType}
      />
    </div>
  );
};

export default Index;
