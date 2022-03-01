import { motion } from 'framer-motion'
import React from 'react'
import './orderItem.css'

const OrderItem = ({ step, description }) => {
  return (
    <div className='sh__orderItem'>
        <div className='sh__orderItem-container'>
            <div className='sh__orderItem-container-content'>
                <div className='sh__orderItem-container-content-number'>
                    <p> { step } </p>
                </div>
                <motion.div 
                whileHover={{ scale: 1.03 }}
                className='sh__orderItem-container-content-description'>
                    <p> { description } </p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default OrderItem