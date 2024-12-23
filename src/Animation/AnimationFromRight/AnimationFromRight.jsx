import React from 'react';
import { motion } from 'framer-motion';

const AnimationFromRight = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, x: 200 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
    >
        {children}
    </motion.div>
);

export default AnimationFromRight;
