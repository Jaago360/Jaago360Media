import { motion } from 'framer-motion';
import { FiZap, FiShield, FiGlobe, FiStar, FiMic } from 'react-icons/fi';

const WhyJaago360 = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Fast Breaking News',
      description: 'Get instant updates on breaking news stories as they happen, 24/7.',
    },
    {
      icon: FiShield,
      title: 'Trusted Reporting',
      description: 'Our journalists maintain the highest standards of accuracy and integrity.',
    },
    {
      icon: FiGlobe,
      title: 'Local to Global Coverage',
      description: 'From Telangana villages to world capitals, we cover it all.',
    },
    {
      icon: FiStar,
      title: 'Exclusive Stories',
      description: 'In-depth investigations and exclusive interviews you won\'t find elsewhere.',
    },
    {
      icon: FiMic,
      title: 'Live Political Updates',
      description: 'Real-time coverage of political developments and legislative sessions.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-news-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, white 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            WHY CHOOSE <span className="text-red-500">US</span>
          </h2>
          <p className="text-xl text-gray-400">What makes us different from other news channels</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-news-red to-red-700 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 h-full hover:border-red-500 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <feature.icon className="text-red-500 text-3xl" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-2xl text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-news-red to-red-700 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-news-red/10 to-red-900/10 border border-news-red/30 rounded-2xl px-12 py-8">
            <p className="text-2xl text-white mb-4">
              Join millions of viewers who trust our reporting
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-xl rounded-lg hover:shadow-xl transition-all duration-300">
              Start Watching Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJaago360;
