import React from 'react'
import './omenuDescription.css'
import ReactPlayer from 'react-player/youtube'


const omenuDescription = () => {
  return (
    <div className='sh__omenuDescription'>
        <div className='sh__omenuDescription-container'>
            <div className='sh__omenuDescription-container-description'>
                <h1>
                    Why OMenu?.        
                </h1>
                <p>Undoubtedly, the coronavirus outbreak has altered how individuals go about their everyday routines. As we keep going to navigate new issues that have arisen as a result of COVID-19, and while governments focus on keeping their citizens safe and healthy, restaurant owners will be called upon to come up with creative solutions to reassure anxious customers as they re-engage with their local restaurants. They must primarily decrease potential sources of infection and promote the use of social distancing as well as other safe public health policies.</p>
            </div>
            <div sh__omenuDescription-container-video>
                <ReactPlayer url='https://www.youtube.com/watch?v=OPVc9w2v9gk' />
            </div>
        </div>
    </div>
  )
}

export default omenuDescription