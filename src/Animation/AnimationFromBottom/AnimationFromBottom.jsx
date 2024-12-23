import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimationFromBottom = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 100 }}
      animate={isInView ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.17 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationFromBottom;
