import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import heroBg from '/src/assets/hero-bg.jpg';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="hero"
      ref={ref}
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The Latest Release of AMD ROCm™ Software is Here
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Read about the top 5 key enhancements that make ROCm 6.4 transformative.
        </p>
        <button className="px-6 py-3 bg-amdRed rounded-md text-white font-semibold hover:bg-red-700">
          Read the Blog
        </button>
      </div>
    </motion.section>
  );
}