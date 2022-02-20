import React from 'react'
import './item.css'
import { FaAngleRight, FaPlayCircle } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Item = ({logo, name, description, path, serviceImg, bg_color}) => {
  return (
    <motion.div 
        whileHover={{ scale: 1.03 }}
        className='sh__item'
        style={{
            background: `${bg_color}`,
            backgroundImage: `${serviceImg}`,
            backgroundSize: `cover`
        }}
        >

        <div className='sh__item-logo'>
            <img src= {logo} alt="Service Logo"/>
        </div>

        <div className='sh__item-name'>
            <p> {name} </p>
        </div>

        <div className='sh__item-description'>
            <p> {description} </p>
        </div>

        <div className='sh__item-learn-more'>
            <Link to={path}>
                <p><a href='#Home'>Learn more</a></p>
            </Link>
            <FaAngleRight className='sh__item-learn-more-icon'/>
        </div>

        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{
                scale: 0.95,
                border: 'none',
            }}
            className='sh__item-play'>
            <a href='#Home'><FaPlayCircle className='sh__item-play-icon'/></a>
        </motion.div>

    </motion.div>
  )
}

export default Item