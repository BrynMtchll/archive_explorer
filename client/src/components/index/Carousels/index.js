import React from 'react'

import Carousel from './Carousel'

import {Carousels} from './Styles'

const ProjectCarousels = ({articlesData}) => {

    const carousels = []
    for (let i = 0; i < 10; i++) {
        carousels.push(<Carousel articlesData={articlesData}></Carousel>)
    }
    return (
        <Carousels>
            {carousels}
        </Carousels>
    )
}

export default ProjectCarousels