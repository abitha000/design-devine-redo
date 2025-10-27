import { Star, Check, Heart } from "lucide-react";

const Features = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-[#3C1810] via-[#5D2914] to-[#8B4513]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-primary-foreground mb-2">Premium Quality</h4>
            <p className="text-sm sm:text-base text-primary-foreground/80 px-2">100% natural ingredients sourced from trusted suppliers</p>
          </div>
          
          <div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Check className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-primary-foreground mb-2">Fast Delivery</h4>
            <p className="text-sm sm:text-base text-primary-foreground/80 px-2">Quick and secure delivery to your doorstep</p>
          </div>
          
          <div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-primary-foreground mb-2">Customer Care</h4>
            <p className="text-sm sm:text-base text-primary-foreground/80 px-2">24/7 support for all your health needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
