import React from 'react'
import './omenuAugment.css'
import ofood from '../../../assets/ofood.svg'
import omenu from '../../../assets/omenu.svg'
import { PlusAnimation } from '../../../components'
import { motion } from 'framer-motion';

const OmenuAugment = () => {
  return (
    <div className='sh__omenuAugment'>
        <div className='sh__omenuAugment-container'>
            <div className='sh__omenuAugment-container-title'>
                <h1>OConnect.</h1>
                <p>Augment your Quality of Service by connecting your OMenu Service to OFood Service.</p>
            </div>
            <div className='sh__omenuAugment-container-content'>
                <div className='sh__omenuAugment-container-content-omenu'>
                    <img src={ omenu } alt='omenu logo'/>
                </div>
                <div 
                    className='sh__omenuAugment-container-content-animation'>
                    <PlusAnimation/>
                </div>
                <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className='sh__omenuAugment-container-content-ofood'>
                    <img src={ ofood } alt='omenu logo'/>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default OmenuAugment