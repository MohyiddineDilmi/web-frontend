import React from 'react'
import './omenuFeatures.css'
import { OmenuFeature } from '../../../components'

const featuresData = [
    {
        title: 'Contactless',
        description: 'OMenu is touch-free, so neither guests nor staff needs to touch a common surface or gadget. This was made feasible by integrating NFC and QR technologies into a sophisticated and user-friendly digital menu.'
    },
    {
        title: 'Cleaner and more durable',
        description: 'Menus no longer need to be carried from servers to customers and back again, as every diner has a copy of the menu on his or her smartphone.'
    },
    {
        title: 'Simple and modifiable',
        description: 'You wont have to print new menus for every little update or addition to your menu items. You may alter your daily specials or limited-time deals without opening a document file, making changes, printing, and then being stuck with remnants.'
    },
    {
        title: 'Flexible',
        description: 'OMenu is designed to be adaptable to practically any kind of restaurant or foodservice business (any business that needs to show customers a list of items and prices). '
    },
    {
        title: 'Eco-friendly',
        description: 'OMenu is environmental- friendly and green. It cuts down on the use of single-use paper menus. This means no more discarded plastic menu covers, no need to regularly print new menus, and no need to waste water sterilizing menus.'
    }
]

const OmenuFeatures = () => {
  return (
    <div className='sh_omenuFeatures'>
        <div className='sh__omenuFeatures-container'>
            <div className='sh__omenuFeatures-container-title'>
                <h1>
                    Why OMenu?
                </h1>
            </div>
            <div className='sh__products-items-list'>
                {featuresData.map((item, index) => (
                    <OmenuFeature  title={item.title} description={item.description} key={item.title + index}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OmenuFeatures