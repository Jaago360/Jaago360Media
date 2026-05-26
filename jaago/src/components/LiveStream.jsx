import { motion } from 'framer-motion';
import { FiRadio } from 'react-icons/fi';

const LiveStream = () => {
  return (
    <section id="live" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Ambient Red Lights */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-news-red/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-news-red/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center space-x-2 bg-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg shadow-red-600/30"
            >
              <FiRadio className="text-white text-base sm:text-xl" />
              <span className="font-bold text-white text-sm sm:text-lg">LIVE</span>
            </motion.div>
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4">
            WATCH <span className="text-red-500">LIVE</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">Stream Jaago 360 News in real-time</p>
        </motion.div>

        {/* Video Player Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Glow Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-xl sm:rounded-2xl blur-sm opacity-40" />
          
          <div className="relative bg-gradient-to-br from-gray-900 to-black border border-red-600/30 rounded-xl sm:rounded-2xl overflow-hidden">
            {/* 16:9 Aspect Ratio Container */}
            <div className="relative w-full aspect-video">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                {/* Animated Grid Pattern */}
                <div
                  className="w-full h-full opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                  }}
                />
              </div>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Pulsing Red Circle */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-red-600/20 rounded-full flex items-center justify-center mb-4 sm:mb-6"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-xl shadow-red-600/40"
                  >
                    <FiRadio className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl" />
                  </motion.div>
                </motion.div>

                {/* Streaming Soon Text */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 sm:mb-3"
                >
                  Streaming Soon
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-4 sm:mb-6"
                >
                  24/7 Live News Coverage Coming Up
                </motion.p>

                {/* Notify Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-sm sm:text-lg md:text-xl rounded-lg shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all duration-300"
                >
                  Notify Me
                </motion.button>
              </div>

              {/* Live Badge - Top Left */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex items-center space-x-1.5 sm:space-x-2 bg-red-600/90 px-2 sm:px-3 py-1 rounded">
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                />
                <span className="font-bold text-white text-xs sm:text-sm">LIVE</span>
              </div>

              {/* Viewers Count - Top Right */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 backdrop-blur-sm px-2 sm:px-3 py-1 rounded">
                <span className="text-white text-xs sm:text-sm">12.5K watching</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* News Ticker Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 w-full max-w-5xl mx-auto bg-gray-900/50 border border-gray-700 rounded-lg p-3 sm:p-4 overflow-hidden"
        >
          <div className="flex items-center space-x-4">
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="flex items-center space-x-1.5 sm:space-x-2 bg-red-600 px-2 sm:px-3 py-1 rounded flex-shrink-0"
            >
              <FiRadio className="text-white text-xs sm:text-sm" />
              <span className="font-bold text-white text-xs sm:text-sm whitespace-nowrap">LIVE UPDATES</span>
            </motion.div>
            <div className="flex animate-ticker whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <span key={i} className="mx-4 sm:mx-6 text-gray-400 text-xs sm:text-sm">
                  Assembly Sessions Live • Breaking News Updates • Ground Reports • Expert Analysis • Press Conference Coverage •
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveStream;
