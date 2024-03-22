import { motion } from 'framer-motion';
import CategoryBox from './CategoryBox';
import Roadmap from './Roadmap';
export default function MobileBurgerMenu({ burger }: { burger: boolean }) {
  return (
    <motion.div
      className="w-[80%] h-screen fixed z-20 top-0 right-[-80%] bg-[#F7F8FD] flex items-center justify-start pt-[102px] flex-col gap-4 "
      animate={{ x: !burger ? 0 : '-100%' }}
      transition={{ type: 'spring', damping: 23 }}
    >
      <CategoryBox burger={burger} display={false} />
      <Roadmap burger={burger} />
    </motion.div>
  );
}
