import React from 'react'
import './omenuFeature.css'
import { motion } from 'framer-motion';

const OmenuFeature = ({ title, description, bg_color, text_color, text_color_title }) => {
  return (
    <div className='sh__omenuFeature'>
        <motion.div
        style={{
          background: `${bg_color}`
         }}
        whileHover={{ scale: 1.03 }}
        className='sh__omenuFeature-container'>
            <div className='sh__omenuFeature-container-content'>
                <h1
                style={{
                  color: `${ text_color_title }`
                 }}
                 > { title } </h1>
                <p
                style={{
                  color: `${text_color}`
                 }}
                 > { description } </p>

            </div>
        </motion.div>
    </div>
  )
}

export default OmenuFeature