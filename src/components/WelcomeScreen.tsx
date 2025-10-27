import { useEffect, useState } from "react";

const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`welcome-screen ${!isVisible ? 'fade-out' : ''}`}>
      <div className="text-center mb-8 perspective-1000">
        <div className="text-5xl sm:text-6xl md:text-7xl font-black text-[#F5DEB3] tracking-[0.2em] animate-logoReveal" style={{ textShadow: "0 0 30px rgba(245, 222, 179, 0.5)" }}>
          IYAL
        </div>
      </div>
      <div className="text-base sm:text-xl text-[#DEB887] font-light tracking-[0.1em] opacity-0 translate-y-5 animate-fadeInUp">
        Premium Health Products
      </div>
      <div className="mt-12 opacity-0 animate-fadeIn">
        <div className="flex justify-center items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#F5DEB3] animate-bounce" style={{ animationDelay: "-0.32s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#F5DEB3] animate-bounce" style={{ animationDelay: "-0.16s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#F5DEB3] animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
