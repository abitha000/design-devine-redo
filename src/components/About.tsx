const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-secondary via-accent/30 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              Our Story
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-4 sm:mb-6 leading-relaxed">
              At Iyal, we believe in the ancient wisdom of natural healing. Our journey began with a simple mission: to bring you the purest, most effective health products derived from nature's bounty.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 leading-relaxed">
              Each product is carefully crafted using traditional methods combined with modern quality standards, ensuring you receive the best of both worlds.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-white/50 rounded-2xl">
                <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">100%</h4>
                <p className="text-sm sm:text-base text-foreground/70 font-medium">Natural Ingredients</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white/50 rounded-2xl">
                <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">5000+</h4>
                <p className="text-sm sm:text-base text-foreground/70 font-medium">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-accent to-secondary rounded-3xl flex items-center justify-center animate-float overflow-hidden">
              <img 
                src="https://image2url.com/images/1761663597081-f2ac9b33-074f-4383-8f38-78dbdeebc690.jpg" 
                alt="Natural Health Products"
                className="w-full h-full object-cover rounded-3xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 sm:w-32 h-20 sm:h-32 bg-secondary rounded-full opacity-20 animate-pulse" style={{ animationDelay: '-1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
