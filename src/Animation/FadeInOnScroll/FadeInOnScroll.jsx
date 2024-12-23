import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeInOnScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.125 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
