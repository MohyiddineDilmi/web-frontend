import React from 'react'
import './omenuUnique.css'
import { OmenuFeature, UniqueAnimation } from '../../../components';

const featuresData = [
    {
        title: 'Contactless',
        description: 'OMenu is touch-free, so neither guests nor staff needs to touch a common surface or gadget. This was made feasible by integrating NFC and QR technologies into a sophisticated and user-friendly digital menu.',
        bg_color: `#000000`,
        text_color_title: '#FFFFFF',
        text_color: '#A2A2A2'
    },
    {
        title: 'Cleaner and more durable',
        description: 'Menus no longer need to be carried from servers to customers and back again, as every diner has a copy of the menu on his or her smartphone.',
        bg_color: '#000000',
        text_color_title: '#FFFFFF',
        text_color: '#A2A2A2'
    }
]

const OmenuUnique = () => {
  return (
    <div className='sh__omenuUnique'>
        <div className='sh__omenuUnique-container'>
            <div className='sh__omenuUnique-container-animation'>
                <UniqueAnimation/>
            </div>
            <div className='sh__omenuUnique-container-content'>
                <div className='sh__omenuUnique-container-content-title'>
                    <h1>More Unique Features.</h1>
                </div>
                <div className='sh__omenuUnique-container-content-list'>
                    {featuresData.map((item, index) => (
                        <OmenuFeature title={item.title} description={item.description} bg_color={item.bg_color} text_color={item.text_color} text_color_title={item.text_color_title} key={item.title + index}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OmenuUnique