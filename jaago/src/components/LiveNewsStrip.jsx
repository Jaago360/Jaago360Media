import { motion } from 'framer-motion';
import { FiTrendingUp, FiMapPin, FiGlobe, FiRadio, FiAward, FiFilm } from 'react-icons/fi';

const LiveNewsStrip = () => {
  const categories = [
    {
      name: 'Politics',
      icon: FiTrendingUp,
      headline: 'Parliament Sessions Live Updates',
      breaking: true,
    },
    {
      name: 'Telangana',
      icon: FiMapPin,
      headline: 'Hyderabad Metro Expansion Plan Approved',
      breaking: false,
    },
    {
      name: 'Andhra Pradesh',
      icon: FiMapPin,
      headline: 'Amaravati Development New Phase',
      breaking: false,
    },
    {
      name: 'National',
      icon: FiGlobe,
      headline: 'Union Budget 2026 Highlights',
      breaking: false,
    },
    {
      name: 'International',
      icon: FiGlobe,
      headline: 'India Global Summit Coverage',
      breaking: false,
    },
    {
      name: 'Sports',
      icon: FiAward,
      headline: 'IPL 2026 Final Match Updates',
      breaking: false,
    },
    {
      name: 'Entertainment',
      icon: FiFilm,
      headline: 'Tollywood Blockbuster Releases',
      breaking: false,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-news-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            LIVE <span className="text-news-red">UPDATES</span>
          </h2>
          <p className="font-rajdhani text-xl text-gray-400">Stay informed with real-time news coverage</p>
        </motion.div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-news-red/50 group-hover:shadow-red-glow">
                {/* Breaking Badge */}
                {category.breaking && (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -top-3 -right-3 bg-news-red text-white font-rajdhani font-bold text-sm px-3 py-1 rounded-full glow-red"
                  >
                    BREAKING
                  </motion.div>
                )}

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-news-red/20 to-red-900/20 rounded-lg flex items-center justify-center group-hover:from-news-red/30 group-hover:to-red-900/30 transition-all duration-300">
                    <category.icon className="text-news-red text-2xl group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="font-rajdhani font-bold text-xl text-white mb-2 group-hover:text-news-red transition-colors duration-300">
                  {category.name}
                </h3>

                {/* Headline */}
                <p className="font-inter text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {category.headline}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 flex items-center text-news-red opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-rajdhani font-semibold text-sm">Read More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Auto-scrolling ticker at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-900/50 border border-white/5 rounded-lg p-4 overflow-hidden"
        >
          <div className="flex items-center space-x-4">
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="flex items-center space-x-2 bg-news-red px-3 py-1 rounded"
            >
              <FiRadio className="text-white" />
              <span className="font-rajdhani font-bold text-white text-sm">LIVE</span>
            </motion.div>
            <div className="flex animate-ticker whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <span key={i} className="mx-6 font-inter text-gray-400 text-sm">
                  Telangana CM announces new welfare schemes • Hyderabad tech sector sees record growth • Tollywood star's next movie announced • Indian economy shows strong recovery • Cricket World Cup preparations underway •
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveNewsStrip;
