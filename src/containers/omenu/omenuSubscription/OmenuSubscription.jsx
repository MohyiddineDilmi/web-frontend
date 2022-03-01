import React from 'react'
import './omenuSubscription.css'
import { motion } from 'framer-motion'

const featuresData = 
[
    'Unlimited Scans',
    'Unlimited OMenu supported',
    'Track & Trace',
    'Email Support',
    'Monthly Subscription',
    'Cancel Anytime'
];

const listFeatures = featuresData.map((featuresData) =>
  <li key={featuresData.toString()}>
    {featuresData}
  </li>
);

const OmenuSubscription = () => {
  return (
    <div className='sh__omenuSubscription'>
        <div className='sh__omenuSubscription-container'>
            <div className='sh__omenuSubscription-container-title'>
                <h1>Subscription.</h1>
            </div>
            <motion.div
            whileHover={{ scale: 1.05 }}
            className='sh__omenuSubscription-container-content'>
                <h2>12.54 CAD/Month</h2>
                <p> { listFeatures } </p>
            </motion.div>
            <div 
                className='sh__omenuSubscription-container-subscribe-button'>
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                        scale: 0.95,
                        border: 'none',
                        backgroundColor: '#000000',
                        color: '#FFFFFF'
                    }}
                    type='button'><a href='https://shoofglobal.com/payment' target='_blank'></a>Subscribe</motion.button>
            </div>
        </div>
    </div>
  )
}

export default OmenuSubscription