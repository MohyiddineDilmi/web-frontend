import React from 'react'
import './products.css'
import Item from '../../components/item/Item';
import ofood from '../../assests/ofood.svg'
import omenu from '../../assests/omenu.svg'
import omed from '../../assests/omed.svg'
import odoctor from '../../assests/odoctor.svg'
import ofoodImg from '../../assests/ofood-img.png'
import omenuImg from '../../assests/omenu-img.png'
import odoctorImg from '../../assests/odoctor-img.png'
import omedImg from '../../assests/omed-img.png'
import { motion } from 'framer-motion';

const productsData = [
    {
        path: `/`,
        logo: `${ofood}`,
        name: 'OFood',
        description: 'Be part of a new food experience',
        learn_more: '',
        video_url: '',
        bg_color: `var(--color-ofood)`,
        serviceImg: `url(${ofoodImg})`
    },
    {
        path: '/omenu',
        logo: `${omenu}`,
        name: 'OMenu',
        description: 'Next generation of menu',
        learn_more: '',
        video_url: '',
        bg_color: `var(--color-omenu)`,
        serviceImg: `url(${omenuImg})`
    },
    {
        path: `/`,
        logo: `${odoctor}`,
        name: 'ODoctor',
        description: 'Book a doctor online',
        learn_more: '',
        video_url: '',
        bg_color: `var(--color-odoctor)`,
        serviceImg: `url(${odoctorImg})`
    },
    {
        path: `/`,
        logo: `${omed}`,
        name: 'OMed',
        description: 'Order your medicines online',
        learn_more: '',
        video_url: '',
        bg_color: `var(--color-omed)`,
        serviceImg: `url(${omedImg})`
    }
]

const products = () => {
  return (
    <div className='sh__products'>

        <div className='sh__products-items'>
            <div className='sh__products-items-list'>
                {productsData.map((item, index) => (
                    <Item logo={item.logo} name={item.name} bg_color={item.bg_color} description={item.description} serviceImg={item.serviceImg} path={item.path} key={item.name + index} />
                ))}
            </div>
        </div>
        
        <div 
            className='sh__products-all-button'>
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                        scale: 0.95,
                        border: 'none',
                        backgroundColor: '#000000',
                        color: '#FFFFFF'
                    }}
                    type='button'>View all products</motion.button>
        </div>
    </div>
  )
}

export default products