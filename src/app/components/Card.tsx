import { motion, useInView } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';

type CardProps = {
    children: ReactNode;
};

const Card = ({ children }: CardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Animate once, when 20% visible

    return (
        <motion.div
            ref={ref}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate when in view
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <span className="card_top">{children}</span>
        </motion.div>
    );
};

export default Card;
