import { motion } from 'framer-motion';

const FeaturedNewsGrid = () => {
  const newsItems = [
    {
      id: 1,
      category: 'Politics',
      headline: 'టీఆర్ఎస్ కొత్త వ్యూహం | TRS New Political Strategy Revealed',
      time: '2 hours ago',
      featured: true,
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=600&fit=crop',
    },
    {
      id: 2,
      category: 'Telangana',
      headline: 'రైతు బంధు అప్డేట్ | Rythu Bandhu Latest News',
      time: '4 hours ago',
      featured: false,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      category: 'Entertainment',
      headline: 'సినిమా రివ్యూ | Latest Tollywood Blockbuster',
      time: '5 hours ago',
      featured: false,
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      category: 'Sports',
      headline: 'క్రికెట్ అప్డేట్ | Indian Cricket Team Selection',
      time: '6 hours ago',
      featured: false,
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      category: 'Economy',
      headline: 'బడ్జెట్ విశ్లేషణ | Budget Analysis 2026',
      time: '8 hours ago',
      featured: false,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      category: 'Technology',
      headline: 'టెక్ న్యూస్ | Tech Industry Updates',
      time: '10 hours ago',
      featured: false,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    },
    {
      id: 7,
      category: 'Elections',
      headline: 'ఎన్నికల సర్వే | Election Survey Results',
      time: '12 hours ago',
      featured: false,
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&h=400&fit=crop',
    },
  ];

  const featuredNews = newsItems.find((item) => item.featured);
  const otherNews = newsItems.filter((item) => !item.featured);

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-news-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            FEATURED <span className="text-news-red">STORIES</span>
          </h2>
          <p className="font-rajdhani text-xl text-gray-400">Top news handpicked by our editorial team</p>
        </motion.div>

        {/* Featured News (Large Card) */}
        {featuredNews && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
              <img
                src={featuredNews.image}
                alt={featuredNews.headline}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="inline-block bg-news-red text-white font-rajdhani font-bold text-sm px-3 py-1 rounded mb-3">
                  {featuredNews.category}
                </span>
                <h3 className="font-rajdhani font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2 group-hover:text-news-red transition-colors duration-300">
                  {featuredNews.headline}
                </h3>
                <p className="font-inter text-gray-300 text-sm">{featuredNews.time}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={news.image}
                  alt={news.headline}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-news-red/90 text-white font-rajdhani font-bold text-xs px-2 py-1 rounded mb-2">
                    {news.category}
                  </span>
                  <h3 className="font-rajdhani font-bold text-lg text-white mb-1 group-hover:text-news-red transition-colors duration-300 line-clamp-2">
                    {news.headline}
                  </h3>
                  <p className="font-inter text-gray-400 text-xs">{news.time}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-news-red/0 group-hover:bg-news-red/10 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-10 py-4 border-2 border-news-red text-white font-rajdhani font-bold text-xl rounded-lg hover:bg-news-red hover:shadow-red-glow-lg transition-all duration-300">
            View All News
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedNewsGrid;
