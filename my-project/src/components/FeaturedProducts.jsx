import { motion } from 'framer-motion';

const products = [
  { img: '/src/assets/ryzen-ai-chip.png', title: 'Unlock Magical AI Experiences', desc: 'AMD Ryzen™ Desktop Processors', btn: 'Find Retailers' },
  { img: '/src/assets/prebuilt-system.jpg', title: 'Unlock Peak Performance Only With AMD', desc: 'Browse preconfigured systems from our partners.', btn: 'Learn More' },
  { img: '/src/assets/radeon-rx-card.png', title: 'Make Every Play Count', desc: 'AMD Radeon™ RX Graphics Cards', btn: 'Find Retailers' },
];

export default function FeaturedProducts() {
  return (
    <motion.section
      id="featured-products"
      className="py-16 px-8 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {products.map((p) => (
          <div key={p.title} className="flex-1 bg-gray-800 rounded-xl p-6 text-center">
            <img src={p.img} alt={p.title} className="mx-auto h-40 mb-4" />
            <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
            <p className="mb-4">{p.desc}</p>
            <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black">
              {p.btn}
            </button>
          </div>
        ))}
      </div>
    </motion.section>
  );
}