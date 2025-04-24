import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animasi hanya dipicu sekali

  return (
    <motion.footer
      id="footer"
      ref={ref}
      className="bg-black py-8 px-8 mt-auto text-white border-t border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About AMD</li>
            <li>Careers</li>
            <li>Press Room</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Drivers & Downloads</li>
            <li>Contact Us</li>
            <li>Warranty</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-8">© {new Date().getFullYear()} AMD Corporation. All rights reserved.</p>
    </motion.footer>
  );
}