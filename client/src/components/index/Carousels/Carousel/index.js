import React from 'react'
import ArrowButton from './ArrowButton'
import ArticleCard from 'src/components/shared/ArticleCard'

import {CarouselS, TitleS, ArrowButtonsS, ListS, ItemS} from './Styles'

const Carousel = () => {
    return (
        <CarouselS>
            <TitleS></TitleS>
            <ArrowButtonsS>
                <ArrowButton/>
                <ArrowButton/>
            </ArrowButtonsS>
            <ListS>
                {/* create carousel articles */}
            </ListS>
        </CarouselS>
    )
}

export default Carousel