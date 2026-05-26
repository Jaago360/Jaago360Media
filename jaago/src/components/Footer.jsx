import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Live', href: '#live' },
    { name: 'News', href: '#news' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaYoutube, href: 'https://youtube.com', color: '#FF0000' },
    { icon: FaInstagram, href: 'https://instagram.com', color: '#E4405F' },
    { icon: FaFacebook, href: 'https://facebook.com', color: '#1877F2' },
    { icon: FaXTwitter, href: 'https://twitter.com', color: '#FFFFFF' },
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-news-black to-black pt-16 pb-8">
      {/* Animated Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-news-red to-transparent animate-glow-line bg-[length:200%_100%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="font-bold text-white text-xl">J</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">
                  JAAGO <span className="text-red-500">360</span>
                </h3>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Telangana's premier digital news platform delivering 24/7 breaking news, 
              in-depth analysis, and comprehensive coverage. Truth. Vision. Impact.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                >
                  <social.icon className="text-xl" style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-rajdhani font-bold text-2xl text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-inter text-gray-400 hover:text-news-red transition-colors duration-300 relative inline-block group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-news-red transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-rajdhani font-bold text-2xl text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FiMail className="text-news-red text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-gray-400">Email:</p>
                  <a href="mailto:reach@jaago360.com" className="font-inter text-white hover:text-news-red transition-colors duration-300">
                    reach@jaago360.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FiPhone className="text-news-red text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-gray-400">Phone:</p>
                  <a href="tel:+919502151565" className="font-inter text-white hover:text-news-red transition-colors duration-300">
                    +91 9502151565
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FiMapPin className="text-news-red text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-gray-400">Address:</p>
                  <p className="font-inter text-white">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} JAAGO 360. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button className="font-inter text-gray-400 hover:text-news-red transition-colors duration-300">
                Terms of Service
              </button>
              <button className="font-inter text-gray-400 hover:text-news-red transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="font-inter text-gray-400 hover:text-news-red transition-colors duration-300">
                Disclaimer
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
