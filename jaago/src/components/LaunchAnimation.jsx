import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LaunchAnimation = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Deep Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />

          {/* Animated Background Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />

          {/* Main Content Container */}
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
            
            {/* Top Arc - Roller Coaster Entry */}
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
              className="absolute top-20 sm:top-32"
            >
              <svg width="200" height="100" viewBox="0 0 200 100" className="opacity-30">
                <motion.path
                  d="M 0 50 Q 50 0 100 50 Q 150 100 200 50"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
                />
              </svg>
            </motion.div>

            {/* Circular Logo with Roller Coaster Motion */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ 
                delay: 0.5, 
                duration: 1.2, 
                type: 'spring',
                stiffness: 100,
                damping: 15
              }}
              className="relative mb-6 sm:mb-8"
            >
              {/* Orbital Rings with Different Speeds */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border border-red-600/40" />
                {/* Orbiting Dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full border border-red-500/25" />
                {/* Orbiting Dot */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full" />
                </div>
              </motion.div>

              {/* Third Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full border border-red-500/15" />
              </motion.div>

              {/* Main Circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8, type: 'spring', stiffness: 120 }}
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-red-600/60 flex items-center justify-center shadow-2xl shadow-red-900/30"
              >
                {/* Inner Glow */}
                <motion.div
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-2 rounded-full bg-gradient-to-br from-red-600/20 to-transparent blur-xl"
                />

                {/* JAAGO 360 Text Inside Circle */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  {/* JAAGO Text */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex items-baseline"
                  >
                    {/* JAA in White */}
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-widest" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.15em' }}>
                      JAA
                    </span>
                    {/* GO in Red */}
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-500 tracking-widest" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.15em' }}>
                      GO
                    </span>
                  </motion.div>
                  
                  {/* 360 Below JAAGO */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="flex items-center mt-1 sm:mt-2"
                  >
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-widest" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.15em' }}>
                      36
                    </span>
                    {/* 0 as Play Button */}
                    <div className="relative ml-2 sm:ml-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-t-[5px] sm:border-t-[6px] md:border-t-[7px] border-t-transparent border-l-[8px] sm:border-l-[10px] md:border-l-[12px] border-l-white border-b-[5px] sm:border-b-[6px] md:border-b-[7px] border-b-transparent ml-1 sm:ml-1.5 md:ml-2" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Circular Border Glow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, #ef4444, transparent, transparent)',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    padding: '2px'
                  }}
                />
              </motion.div>
            </motion.div>



            {/* Tagline with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.5 }}
              className="mb-8 sm:mb-10"
            >
              <motion.p
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                transition={{ delay: 3, duration: 1, ease: 'easeInOut' }}
                className="text-base sm:text-lg md:text-xl text-gray-400 font-light tracking-wide whitespace-nowrap overflow-hidden"
              >
                Truth. Vision. Impact.
              </motion.p>
            </motion.div>

            {/* Progressive Loading Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.8, ease: 'easeInOut' }}
              className="relative w-48 sm:w-64 md:w-80 h-1 bg-gray-800 rounded-full overflow-hidden mb-4"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 3.2, duration: 0.8, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 rounded-full"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.4 }}
              className="text-xs sm:text-sm text-gray-500 tracking-widest"
            >
              loading
            </motion.p>
          </div>

          {/* Corner Brackets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-6 sm:top-8 left-6 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-l-2 border-red-600/60 rounded-tl-lg"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-6 sm:top-8 right-6 sm:right-8 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-r-2 border-red-600/60 rounded-tr-lg"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-l-2 border-red-600/60 rounded-bl-lg"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-r-2 border-red-600/60 rounded-br-lg"
          />

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0
              }}
              animate={{ 
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                x: (Math.random() - 0.5) * 300,
                y: (Math.random() - 0.5) * 300,
              }}
              transition={{ 
                delay: 1.5 + Math.random() * 1,
                duration: 2,
                ease: 'easeOut'
              }}
              className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LaunchAnimation;
