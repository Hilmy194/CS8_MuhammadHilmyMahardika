import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const solutions = [
  { title: 'HCI and Virtualization', text: 'Empowering enterprises to capture the full benefits of HCI', img: '/src/assets/solution1.jpg' },
  { title: 'Database and Analytics', text: 'Accelerating queries and transactions to transform data into actionable insights', img: '/src/assets/solution2.jpg' },
  { title: 'Supercomputing and Research', text: 'Harnessing the potential of Al and Exascale-class supercomputing to advance scientific research', img: '../assets/solution3.jpg' },
  { title: 'Financial Services', text: 'Delivering highly performant and efficient solutions to support core and Al-powered FSI workloads', img: '/src/assets/solution4.jpg' },
  { title: 'Product Design', text: 'Integrating Al and accelerating CAE simulations for better product designs and more timely results', img: '/src/assets/solution5.jpg' },
];

export default function FeaturedSolutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx + solutions.length - 1) % solutions.length);
  const next = () => setIdx((idx + 1) % solutions.length);

  return (
    <motion.section
      id="solutions"
      ref={ref}
      className="py-16 px-8 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Solutions</h2>
      <div className="relative max-w-4xl mx-auto">
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-5xl font-bold text-white border-2 border-white rounded-full w-16 h-16 flex items-center justify-center hover:text-gray-400 hover:border-gray-400"
          aria-label="Previous"
        >
          ‹
        </button>
        <div className="overflow-hidden rounded-xl">
          <motion.img
            src={solutions[idx].img}
            alt={solutions[idx].title}
            className="w-full h-48 object-cover mx-auto"
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="p-6 bg-gray-800 text-white">
            <h3 className="text-2xl font-semibold mb-2 text-center">{solutions[idx].title}</h3>
            <p className="mb-4 text-center">{solutions[idx].text}</p>
            <button className="text-amdBlue font-semibold block mx-auto">Learn More</button>
          </div>
        </div>
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