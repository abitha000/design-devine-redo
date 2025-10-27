import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";

interface NavigationProps {
  isLoggedIn: boolean;
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  onOpenAccount: () => void;
  onLogout: () => void;
}

const Navigation = ({ isLoggedIn, cartCount, onOpenCart, onOpenAuth, onOpenAccount, onLogout }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#3C1810] via-[#5D2914] to-[#8B4513] shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center animate-pulse">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary-foreground tracking-wider">IYAL</h1>
            <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-primary-foreground font-medium hidden sm:inline">
              Premium Health Products
            </span>
          </div>
          
          {isLoggedIn && (
            <button
              onClick={onOpenCart}
              className="mr-2 sm:mr-4 relative bg-secondary hover:bg-accent text-primary p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>
          )}
          
          <button onClick={toggleMenu} className="focus:outline-none z-50 relative">
            {isMenuOpen ? (
              <X className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            ) : (
              <Menu className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            )}
          </button>
        </div>
      </div>
      
      <div
        className={`fixed top-0 right-0 w-full h-full bg-gradient-to-br from-[#3C1810] via-[#5D2914] to-[#8B4513] z-40 transition-transform duration-600 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 sm:space-y-12 px-4">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-primary-foreground text-3xl sm:text-4xl font-light hover:text-accent transition-all duration-500 hover:scale-110 ${
              isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-primary-foreground text-3xl sm:text-4xl font-light hover:text-accent transition-all duration-500 hover:scale-110 ${
              isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className={`text-primary-foreground text-3xl sm:text-4xl font-light hover:text-accent transition-all duration-500 hover:scale-110 ${
              isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-primary-foreground text-3xl sm:text-4xl font-light hover:text-accent transition-all duration-500 hover:scale-110 ${
              isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Contact Us
          </button>
          
          {isLoggedIn && (
            <button
              onClick={() => {
                onOpenAccount();
                toggleMenu();
              }}
              className={`text-primary-foreground text-3xl sm:text-4xl font-light hover:text-accent transition-all duration-500 hover:scale-110 flex items-center space-x-3 ${
                isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <User className="w-6 h-6 sm:w-8 sm:h-8" />
              <span>My Account</span>
            </button>
          )}
          
          {!isLoggedIn ? (
            <button
              onClick={() => {
                onOpenAuth();
                toggleMenu();
              }}
              className={`bg-gradient-to-r from-[#3C1810] to-[#8B4513] text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-medium hover:scale-110 transition-all duration-500 ${
                isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Login / Signup
            </button>
          ) : (
            <button
              onClick={() => {
                onLogout();
                toggleMenu();
              }}
              className={`border-2 border-accent text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-medium hover:scale-110 transition-all duration-500 hover:bg-accent hover:text-primary ${
                isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
