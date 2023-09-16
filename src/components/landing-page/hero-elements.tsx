import { Icons } from '@components/icons';
import useParallax from '@hooks/useParallax';
import { Kbd } from '@nextui-org/react';
import { Variants, motion, useScroll } from 'framer-motion';

const HeroElements = () => {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 300);
  return (
    <motion.div variants={HeroContainerVariants} initial="initial" animate="animate">
      <motion.div
        variants={jumpUpAnimationVariants}
        className="absolute top-[20rem] right-[10vw] md:right-[20vw]"
        style={{ y }}
      >
        <Kbd keys={['command', 'shift']} className="bg-white/50 rotate-[30deg] backdrop-blur-sm">
          S
        </Kbd>
      </motion.div>
      <motion.div variants={jumpUpAnimationVariants} className="absolute top-[50vh]  left-[20%]" style={{ y }}>
        <Kbd keys={['command', 'ctrl']} className="bg-white/50 rotate-[-20deg] backdrop-blur-sm">
          N
        </Kbd>
      </motion.div>
      <motion.div
        variants={jumpUpAnimationVariants}
        className="aspect-square p-5 bg-emerald-500/50 absolute bottom-0 left-[20%] backdrop-blur-sm rounded-full flex justify-center items-center"
        style={{ y }}
      >
        <Icons.upload className="w-9 h-9  rotate-[-20deg]" />
      </motion.div>
      <motion.div
        variants={jumpUpAnimationVariants}
        className="aspect-square p-5 bg-red-400/50 absolute bottom-0 right-[20%] backdrop-blur-sm rounded-full flex justify-center items-center"
        style={{ y }}
      >
        <Icons.download className="w-9 h-9 rotate-[15deg] " />
      </motion.div>
    </motion.div>
  );
};

const HeroContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const jumpUpAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
};

export default HeroElements;
export { jumpUpAnimationVariants };
