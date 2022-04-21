import React from 'react'
import './serviceHeader.css'
import { motion } from 'framer-motion';


const fadeLeft = {
    hidden: { opacity: 0, y: +100 },
    visible: { opacity: 1, y: 0 }
};

const ServiceHeader = ( {slogan} ) => {
  return (
    <div className='sh__serviceHeader'>
        <div className='sh__serviceHeader-container section__padding'>
            <div className='sh__serviceHeader-container-content'>
                <motion.h1 
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 1 }}
                    className='gradient__text'
                    >
                    { slogan }  
                </motion.h1>
            </div>
        </div>
    </div>
  )
}

export default ServiceHeader