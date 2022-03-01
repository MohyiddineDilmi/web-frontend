import React, { Component } from 'react'
import animationData from '../../lotties/cat.json';
import Lottie from 'react-lottie';

class UniqueAnimation extends Component {
        render() {
            const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
            };

        return (
        <div>
            <Lottie
            options={defaultOptions}
            height={280}
            width={280}
            />
        </div>  
        )
    }
}

export default UniqueAnimation