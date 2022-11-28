import React from 'react'

import Carousel from './Carousel'

import {Carousels} from './Styles'

const ProjectCarousels = ({articlesData}) => {
    return (
        <Carousels>
            <Carousel articlesData={articlesData}/>
            <Carousel articlesData={articlesData}/>
            <Carousel articlesData={articlesData}/>
            <Carousel articlesData={articlesData}/>
            <Carousel articlesData={articlesData}/>
            <Carousel articlesData={articlesData}/>
            <Carousel articlesData={articlesData}/>
            <Carousel articlesData={articlesData}/>
            <Carousel articlesData={articlesData}/>
            <Carousel articlesData={articlesData}/>
        </Carousels>
    )
}

export default ProjectCarousels