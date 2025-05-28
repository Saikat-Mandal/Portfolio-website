import { motion, useInView } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';

type CardProps = {
    children: ReactNode;
};

const ProjectCard = ({ children }: CardProps) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (

        <motion.div
            ref={ref}
            className="border-black border-2 rounded-2xl p-4 w-full lg:w-[30rem]"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}} // Only animate when in view
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <span className="card_top">{children}</span>
        </motion.div>
    )
}

export default ProjectCard