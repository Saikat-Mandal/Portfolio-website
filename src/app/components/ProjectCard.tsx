import { motion, useInView } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';
import { useDarkMode } from '../context/DarkmodeContext';

type CardProps = {
    children: ReactNode;
};

const ProjectCard = ({ children }: CardProps) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { darkModeEnabled } = useDarkMode();

    return (

        <motion.div
            ref={ref}
            className={` border-2 rounded-2xl p-4 w-full lg:w-[30rem] ${darkModeEnabled ? "border-white" : "border-black"}`}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}} // Only animate when in view
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <span className="card_top">{children}</span>
        </motion.div>
    )
}

export default ProjectCard