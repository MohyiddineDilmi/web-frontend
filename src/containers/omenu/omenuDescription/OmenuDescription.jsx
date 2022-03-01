import React from 'react'
import './omenuDescription.css'
import ReactPlayer from 'react-player/youtube'
import { motion } from 'framer-motion'
import { Player } from '../../../components'

const omenuDescription = () => {
  return (
    <div className='sh__omenuDescription'>
        <div className='sh__omenuDescription-container'>
            <div className='sh__omenuDescription-container-description'>
                <h1>
                    OMenu.        
                </h1>
                <p>It is a user-friendly, smart, and touchless digital menu in the form of a QR code and NFC enabled card that customers can scan to view the restaurant menu.</p>
            </div>
            <div className='sh__omenuDescription-container-video'>
                <Player/>  

                {/*
                    <ReactPlayer url='https://www.youtube.com/watch?v=OPVc9w2v9gk'/>   
                */}
                
            </div>
            <div 
            className='sh__omenuDescription-container-order-button'>
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                        scale: 0.95,
                        border: 'none',
                        backgroundColor: '#000000',
                        color: '#FFFFFF'
                    }}
                    type='button'><a href='https://www.shoof.io/' target='_blank'>Order Now</a></motion.button>
            </div>
            
        </div>
    </div>
  )
}

export default omenuDescription