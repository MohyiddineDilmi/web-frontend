import React from 'react'
import './header.css'
import headerImg from '../../assests/header-img.png'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { motion } from 'framer-motion';

const fadeLeft = {
    hidden: { opacity: 0, y: +100 },
    visible: { opacity: 1, y: 0 }
};

const Header = () => {
  return (
    <div className='sh__header'>
      <div className='sh__header-container section__padding'>
        <div className='sh__header-content'>
          <motion.h1 
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
            className='gradient__text'
          >
            Designed to be the future.        
          </motion.h1>
          <p>Download SHOOF app on</p>

          <div className='sh__header-content-apps'>
            <div className='sh__header-content-apps-apple'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                  border: 'none',
                }}
                type='button'><FaApple className='sh__header-content-apps-icons' />App Store</motion.button>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                border: 'none',
              }}
            type='button'><FaGooglePlay className='sh__header-content-apps-icons'/>Play Store</motion.button>
          </div>      
        </div>

        <div className='sh__header-image'>
            <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={ headerImg } alt='header-image'/>
        </div>
      </div>

      <div className='sh_header-title'>
          <h1>
            We build solutions to the world.        
          </h1>
          <p>We Create a powerful and smart On-demand services based on the people needs.</p>
      </div>
    </div>
    
  )
}

export default Header