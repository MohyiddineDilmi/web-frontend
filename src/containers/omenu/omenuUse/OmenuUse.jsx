import React from 'react'
import ReactPlayer from 'react-player'
import './omenuUse.css'
import { OrderItem, Player } from '../../../components'

const stepsData = [
    {
        step: '1',
        description: 'Download and install the SHOOF Service app.'
    },
    {
        step: '2',
        description: 'Choose OMenu from the list of services.'
    },
    {
        step: '3',
        description: 'Click + to add a new OMenu.'
    },
    {
        step: '4',
        description: 'Scan your OMenu.'
    },
    {
        step: '5',
        description: 'Link it.'
    }
]

const OmenuUse = () => {
  return (
    <div className='sh__omenuUse'>
        <div className='sh__omenuUse-container'>
            <div className='sh__omenuUse-container-title'>
                <h1>How to use OMenu?</h1>
            </div>
            <div className='sh__omenuUse-container-content'>
                <div className='sh__omenuUse-container-content-video'>        
                    <ReactPlayer className='sh__omenuUse-container-content-video-player'
                    url='https://www.youtube.com/watch?v=VrhnkSQQKd0'/>     
                </div>
                <div className='sh__omenuUse-container-content-steps'>
                    {stepsData.map((item, index) => (
                        <OrderItem step={item.step} description={item.description} key={item.step + index}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OmenuUse