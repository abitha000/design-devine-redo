interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  gradient: string;
}

interface ProductsProps {
  onAddToCart: (productId: string) => void;
}

const products: Product[] = [
  {
    id: 'hair-oil',
    name: 'Premium Hair Oil',
    description: 'Nourishing blend for healthy, lustrous hair with ancient herbal extracts',
    price: 299,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    gradient: 'from-amber-200 to-amber-400'
  },
  {
    id: 'face-pack',
    name: 'Natural Face Pack',
    description: 'Rejuvenating mask for glowing skin with pure clay and herbs',
    price: 199,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    gradient: 'from-green-200 to-green-400'
  },
  {
    id: 'health-mix',
    name: 'Wellness Health Mix',
    description: 'Nutritious blend for daily vitality with superfoods and grains',
    price: 399,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    gradient: 'from-orange-200 to-orange-400'
  },
  {
    id: 'pain-relief',
    name: 'Pain Relief Oil',
    description: 'Soothing relief for aches and pains with therapeutic oils',
    price: 249,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    gradient: 'from-red-200 to-red-400'
  }
];

const Products = ({ onAddToCart }: ProductsProps) => {
  return (
    <section id="products" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 tracking-wide">
            Our Premium Products
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 font-light max-w-3xl mx-auto px-4 sm:px-0">
            Handcrafted with natural ingredients for your health and wellness journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-card rounded-3xl shadow-2xl overflow-hidden transition-all duration-600 hover:transform hover:scale-105 hover:shadow-amber-500/30"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`h-48 sm:h-56 md:h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6 sm:p-8">
                <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                  {product.name}
                </h4>
                <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl sm:text-3xl font-bold text-foreground">₹{product.price}</span>
                  <button
                    onClick={() => onAddToCart(product.id)}
                    className="bg-gradient-to-r from-[#3C1810] to-[#8B4513] text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
