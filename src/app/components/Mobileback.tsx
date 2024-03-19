import { motion } from 'framer-motion';
export default function Mobileback({ burger }: { burger: boolean }) {
  return (
    <motion.div
      className="w-full h-full bg-black z-10 absolute "
      initial={{ opacity: 0 }}
      animate={{ opacity: burger ? 0.6 : 0 }}
      style={{ display: burger ? 'block' : 'none' }}
      transition={{ type: 'tween' }}
    ></motion.div>
  );
}
