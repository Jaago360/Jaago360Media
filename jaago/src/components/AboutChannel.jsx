import { motion } from 'framer-motion';
import { FiClock, FiRadio, FiCamera, FiMonitor } from 'react-icons/fi';

const AboutChannel = () => {
  const stats = [
    { icon: FiClock, label: '24x7 Coverage', value: 'Non-Stop' },
    { icon: FiRadio, label: 'Live Updates', value: 'Real-Time' },
    { icon: FiCamera, label: 'Ground Reports', value: 'On-Site' },
    { icon: FiMonitor, label: 'Digital Streaming', value: 'HD Quality' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-md sm:max-w-lg overflow-hidden rounded-2xl shadow-2xl border border-gray-700"
            >
              <img
                src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=600&fit=crop"
                alt="News Broadcasting Studio"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              About <span className="text-red-500">Our Channel</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                We are Telangana's premier digital news platform, 
                delivering breaking news, in-depth analysis, and comprehensive coverage 24 hours a day, 7 days a week.
              </p>
              
              <p>
                మేము సత్యాన్ని వెలుగులోకి తీసుకువస్తాము - We bring truth to light. Our mission is to provide 
                unbiased, factual reporting that empowers citizens and strengthens democracy.
              </p>
              
              <p>
                From local Telangana and Andhra Pradesh news to national and international coverage, 
                we are your trusted source for everything that matters.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-xl rounded-lg hover:shadow-xl transition-all duration-300">
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:border-red-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="text-red-500 text-3xl" />
                </div>
              </div>
              <h3 className="font-bold text-2xl text-white mb-2">{stat.value}</h3>
              <p className="text-lg text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutChannel;
