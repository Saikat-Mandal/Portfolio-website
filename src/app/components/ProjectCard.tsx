import React, { ReactNode } from 'react'

type CardProps = {
    children: ReactNode;
};

const ProjectCard = ({ children }: CardProps) => {
    return (
        <div className=' border-black border-2 rounded-2xl p-4 w-full lg:w-[30rem]'>
            {children}
        </div>
    )
}

export default ProjectCard