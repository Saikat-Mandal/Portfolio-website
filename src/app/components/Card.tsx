import { motion, useInView } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';
import { useDarkMode } from '../context/DarkmodeContext';

type CardProps = {
    children: ReactNode;
};

const Card = ({ children }: CardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Animate once, when 20% visible
    const { darkModeEnabled } = useDarkMode();

    return (
        <motion.div
            ref={ref}
            className={`card ${darkModeEnabled ? "card-dark" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate when in view
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <span className={`card_top ${darkModeEnabled ? "card_top-dark" : ""}`}>{children}</span>
        </motion.div>
    );
};

export default Card;
