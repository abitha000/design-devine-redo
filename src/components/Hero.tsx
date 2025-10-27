const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[#3C1810]/90 via-[#5D2914]/80 to-[#8B4513]/70">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full opacity-20 animate-floatBall" style={{ top: '10%', left: '15%', animationDelay: '0s' }}></div>
        <div className="absolute w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full opacity-25 animate-floatBall" style={{ top: '60%', right: '20%', animationDelay: '-2s' }}></div>
        <div className="absolute w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-15 animate-floatBall" style={{ bottom: '20%', left: '10%', animationDelay: '-4s' }}></div>
        <div className="absolute w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-30 animate-floatBall" style={{ top: '30%', right: '10%', animationDelay: '-1s' }}></div>
        <div className="absolute w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 animate-floatBall" style={{ bottom: '40%', right: '30%', animationDelay: '-3s' }}></div>
        <div className="absolute w-10 sm:w-16 h-10 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-35 animate-floatBall" style={{ top: '70%', left: '25%', animationDelay: '-5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 py-12 sm:py-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-foreground mb-6 sm:mb-8 tracking-wide drop-shadow-2xl">
          Natural Health Solutions
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 md:mb-12 max-w-4xl mx-auto font-semibold leading-relaxed drop-shadow-lg px-4 sm:px-0">
          Discover the power of nature with our premium collection of health products crafted for your wellness journey
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
          <button
            onClick={() => scrollToSection('products')}
            className="w-full sm:w-auto bg-gradient-to-r from-[#3C1810] to-[#8B4513] text-primary-foreground px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-amber-500/50"
          >
            Shop Now
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-bold hover:bg-primary-foreground hover:text-primary transition-all duration-500 drop-shadow-lg"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
