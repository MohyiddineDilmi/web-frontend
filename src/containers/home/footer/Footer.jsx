import React from 'react'
import './footer.css';
import { motion } from 'framer-motion';
import { FaCoffee, FaDiscord, FaYoutube, FaLinkedinIn, FaInstagram,FaCanadianMapleLeaf } from 'react-icons/fa'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Footer = () => {
  return (
    <div className='sh__footer'>
      <div className='sh__footer-made'>
        <p>Made with<FaCoffee className='sh__footer-made-icon'/></p>
      </div>
      <div className='sh__footer-social-media'>
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{
            scale: 0.95,
            border: 'none',
        }}
        type='button'><FaDiscord className='sh__footer-social-media-icon' /></motion.button>
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{
            scale: 0.95,
            border: 'none',
        }}
        type='button'><a href='https://www.youtube.com/channel/UCMg36DFZyYfajD3aZQHkWsQ' target='_blank'><FaYoutube className='sh__footer-social-media-icon' /></a></motion.button>
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{
            scale: 0.95,
            border: 'none',
        }}
        type='button'><a href='https://www.linkedin.com/company/75491828/admin/' target='_blank'><FaLinkedinIn className='sh__footer-social-media-icon' /></a></motion.button>
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{
            scale: 0.95,
            border: 'none',
        }}
        type='button'><a href='https://www.instagram.com/shoofglobal/' target='_blank'><FaInstagram className='sh__footer-social-media-icon' /></a></motion.button>
      </div>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{
            scale: 0.95,
            border: 'none',
        }}
        className='sh__footer-contact'>
        <CopyToClipboard>
          <p>Contact : support@shoof.ca</p>
        </CopyToClipboard>
      </motion.div>
      <div className='sh__footer-about'>
        <p>
          SHOOF Global, Inc. has been developing an on-demand multi-service solution that offers several daily life services on a single platform.  The company organized and existed under the laws of Canada, with its head office located in Canada <FaCanadianMapleLeaf className='sh__footer-about-icon'/>
          <br/>Our vision is to become the leading provider of on-demand services that facilitate people’s daily lives.
        </p>
      </div>
      <div className='sh__footer-copyright'>
        <p>Copyright © {new Date().getFullYear()} SHOOFGlobal Inc. All rights reserved.</p>
        <div className='sh__footer-copyright-terms'>
          <button type='button'><a href='https://shoofglobal.com/privacy_policy.html' target='_blank'>Privacy Policy</a></button>
          <button type='button'><a href='https://shoofglobal.com/terms.html' target='_blank'>Terms of use</a></button>
        </div>
      </div>
    </div>
  )
}

export default Footer