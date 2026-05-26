import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: 'YouTube',
      icon: FaYoutube,
      color: '#FF0000',
      followers: '2.5M',
      label: 'Subscribers',
      hoverColor: 'hover:shadow-[0_0_30px_#FF0000]',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      color: '#E4405F',
      followers: '1.8M',
      label: 'Followers',
      hoverColor: 'hover:shadow-[0_0_30px_#E4405F]',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      color: '#1877F2',
      followers: '3.2M',
      label: 'Followers',
      hoverColor: 'hover:shadow-[0_0_30px_#1877F2]',
    },
    {
      name: 'X/Twitter',
      icon: FaXTwitter,
      color: '#FFFFFF',
      followers: '950K',
      label: 'Followers',
      hoverColor: 'hover:shadow-[0_0_30px_#FFFFFF]',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-news-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            FOLLOW US <span className="text-news-red">EVERYWHERE</span>
          </h2>
          <p className="font-rajdhani text-xl text-gray-400">Stay connected on all social media platforms</p>
        </motion.div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div
                className={`relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 ${platform.hoverColor} hover:border-transparent`}
              >
                {/* Glow Effect on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 rounded-2xl"
                  style={{ backgroundColor: platform.color + '20' }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="mb-6 flex justify-center"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${platform.color}20, ${platform.color}40)`,
                      }}
                    >
                      <platform.icon
                        className="text-5xl transition-all duration-300 group-hover:scale-110"
                        style={{ color: platform.color }}
                      />
                    </div>
                  </motion.div>

                  {/* Platform Name */}
                  <h3 className="font-rajdhani font-bold text-2xl text-white mb-2 group-hover:text-opacity-80 transition-colors duration-300">
                    {platform.name}
                  </h3>

                  {/* Followers Count */}
                  <div className="mb-4">
                    <p
                      className="font-orbitron font-bold text-3xl mb-1"
                      style={{ color: platform.color }}
                    >
                      {platform.followers}
                    </p>
                    <p className="font-inter text-gray-400 text-sm">{platform.label}</p>
                  </div>

                  {/* Follow Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-lg font-rajdhani font-bold text-lg transition-all duration-300 border-2 text-white hover:text-white"
                    style={{
                      borderColor: platform.color,
                      backgroundColor: platform.color + '00',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = platform.color;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = platform.color + '00';
                    }}
                  >
                    Follow Now
                  </motion.button>
                </div>
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
            <p className="font-rajdhani text-2xl text-white mb-2">
              Join our growing community
            </p>
            <p className="font-inter text-gray-400 text-lg">
              Get breaking news alerts and exclusive content
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
