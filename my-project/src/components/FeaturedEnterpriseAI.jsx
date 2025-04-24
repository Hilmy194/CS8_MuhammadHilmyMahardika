import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const items = [
  { title: 'Advance Al Development with AMD ROCM Software', img: '/src/assets/enterprise1.jpg', link: '#' },
  { title: 'Leading the AI PC Era', img: '/src/assets/enterprise2.jpg', link: '#' },
  { title: 'Revolutionize Your Al Infrastructure', img: '/src/assets/enterprise3.jpg', link: '#' },
];

export default function FeaturedEnterpriseAI() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx + items.length - 1) % items.length);
  const next = () => setIdx((idx + 1) % items.length);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="enterprise-ai"
      ref={ref}
      className="py-16 px-8 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Advancing Enterprise AI</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Tombol Panah Kiri */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-5xl font-bold text-white border-2 border-white rounded-full w-16 h-16 flex items-center justify-center hover:text-gray-400 hover:border-gray-400"
          aria-label="Previous"
        >
          ‹
        </button>
        <div className="overflow-hidden rounded-xl">
          <img
            src={items[idx].img}
            alt={items[idx].title}
            className="w-full h-48 object-cover mx-auto"
          />
          <div className="p-6 bg-gray-800 text-white">
            <h3 className="text-2xl font-semibold mb-2 text-center">{items[idx].title}</h3>
            <a href={items[idx].link} className="text-amdBlue font-semibold block text-center">
              Discover
            </a>
          </div>
        </div>
        {/* Tombol Panah Kanan */}
        <button
          onClick={next}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-5xl font-bold text-white border-2 border-white rounded-full w-16 h-16 flex items-center justify-center hover:text-gray-400 hover:border-gray-400"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </motion.section>
  );
}