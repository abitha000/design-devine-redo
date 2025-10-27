interface FooterProps {
  onOpenPolicy: (type: string) => void;
}

const Footer = ({ onOpenPolicy }: FooterProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#3C1810] via-[#5D2914] to-[#8B4513] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3 sm:mb-4">IYAL</h2>
            <p className="text-xs sm:text-sm text-primary-foreground/80 mb-3 sm:mb-4">Your trusted partner in natural health and wellness</p>
            <div className="text-xs text-primary-foreground/70 space-y-1">
              <p>54g, 4th Cross Street</p>
              <p>Marakkanam Road, Anna Nagar</p>
              <p>Tindivanam, India</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-base sm:text-lg font-bold text-primary-foreground mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-right">
            <h3 className="text-base sm:text-lg font-bold text-primary-foreground mb-3 sm:mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onOpenPolicy('terms')} className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('refund')} className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Refund & Cancellation
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('shipping')} className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Shipping Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} IYAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
