import React, { ReactNode } from 'react'


type CardProps = {
    children: ReactNode;
};


const Card = ({ children }: CardProps) => {
    return (
        <div className='card'>
            <span className="card_top"> {children} </span>
        </div>
    )
}

export default Card