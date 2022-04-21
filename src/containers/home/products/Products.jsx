import React from 'react'
import './products.css'
import Item from '../../../components/item/Item';
import ofood from '../../../assets/ofood.svg'
import omenu from '../../../assets/omenu.svg'
import omed from '../../../assets/omed.svg'
import odelivery from '../../../assets/odelivery.svg'
import odoctor from '../../../assets/odoctor.svg'
import ofoodImg from '../../../assets/ofood-img.png'
import omenuImg from '../../../assets/omenu-img.png'
import odoctorImg from '../../../assets/odoctor-img.png'
import omedImg from '../../../assets/omed-img.png'
import odeliveryImg from '../../../assets/odelivery-img.png'
import { motion } from 'framer-motion';

const productsData = [
    {
        path: `/ofood`,
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
        logo: `${odelivery}`,
        name: 'ODelivery',
        description: 'Order your medicines online',
        learn_more: '',
        video_url: '',
        bg_color: `var(--color-odelivery)`,
        serviceImg: `url(${odeliveryImg})`
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
    }
]

const Products = () => {
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
                    type='button'><a href='#products'>View all products</a></motion.button>
        </div>
    </div>
  )
}

export default Products