import { motion } from 'framer-motion';

const Hero = () => {
  const tickerNews = [
    "BREAKING: Telangana Government Announces New IT Policy 2026",
    "Hyderabad Metro Phase 3 Approval Expected This Week",
    "Andhra Pradesh Industrial Corridor Development Update",
    "Indian Cricket Team Squad Announced for Upcoming Series",
    "Tollywood Blockbuster Collection Crosses 200 Crore Mark",
    "Union Budget 2026: Key Highlights for Common Man",
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-0">
        {/* Logo - Mobile Version */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="block md:hidden w-full"
        >
          <img 
            src="/Jaagologgogog.png" 
            alt="Jaago 360 News Logo" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Logo - Desktop Version */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="hidden md:block w-full"
        >
          <img 
            src="/JaagoLogo.png" 
            alt="Jaago 360 News Logo" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mt-4 sm:mt-6 md:mt-8 px-4 sm:px-0"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex-1 sm:flex-initial whitespace-nowrap"
          >
            Watch Live
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 border-2 border-gray-600 text-white font-semibold text-sm sm:text-base md:text-lg rounded-lg hover:border-red-600 hover:text-red-500 transition-all duration-300 flex-1 sm:flex-initial whitespace-nowrap"
          >
            Latest Updates
          </motion.button>
        </motion.div>
      </div>

      {/* Breaking News Ticker */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 bg-red-600 py-2 sm:py-3 overflow-hidden"
      >
        <div className="flex items-center">
          <div className="bg-black px-2 sm:px-4 py-1.5 sm:py-2 font-bold text-white whitespace-nowrap z-10 text-xs sm:text-sm">
            BREAKING NEWS
          </div>
          <div className="flex animate-ticker whitespace-nowrap">
            {[...tickerNews, ...tickerNews].map((news, index) => (
              <span
                key={index}
                className="mx-4 sm:mx-8 text-white text-xs sm:text-sm md:text-base"
              >
                • {news}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
