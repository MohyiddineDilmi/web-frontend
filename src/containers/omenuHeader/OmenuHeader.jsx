import React from 'react'
import './omenuHeader.css'
import { motion } from 'framer-motion';

const fadeLeft = {
    hidden: { opacity: 0, y: +100 },
    visible: { opacity: 1, y: 0 }
};

const OmenuHeader = () => {
  return (
    <div className='sh__omenuHeader'>
        <div className='sh__omenuHeader-container section__padding'>
            <div className='sh__omenuHeader-container-content'>
                <motion.h1 
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
                className='gradient__text'
                >
                Next generation of menu.       
                </motion.h1>
                <p>It is a user-friendly, smart, and touchless digital menu in the form of a QR code and NFC-enabled card that customers can scan to view the restaurant menu.</p>              
            </div>        
        </div>
  </div>
  )
}

export default OmenuHeader