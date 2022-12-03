import React, {useState} from 'react'
import ArrowBtn from './ArrowBtn'
import PubLink from './PubLink'
import ArticleCard from 'components/shared/ArticleCard'

import {Carousel, ArrowBtns, List, Item} from './Styles'

const ProjectCarousel = ({articlesData}) => {
    const initPositions = []
    for (let i = 0; i < 10; i++) initPositions.push({position: i, animate: true});
    
    const [positions, setPositions] = useState(initPositions);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [leftBtnHidden, setLeftBtnHidden] = useState(true);

    const items = articlesData.map((articleData, i) => (
            <Item key={articleData.id} animate={positions[i].animate} position={positions[i].position}>
                <ArticleCard articleData={articleData}/>
            </Item>
        )
    )

    const loadCarouselSide = ({bound, jump}, isLeftBtn) => {
        setPositions(
            positions.map(state => {
                if ((state.position > bound && isLeftBtn) || 
                    (state.position < bound && !isLeftBtn)) {
                    state.position += jump;
                    state.animate = false;
                }
                return state;
            })
        )
    }

    const shiftItems = (increment) => {
        // with setTimeout so that styles update prior
        setTimeout(() => {
            setPositions(
                positions.map(state => {
                    state.position += increment;
                    state.animate = true;
                    return state;
                })
            )
        }, 1)
    }

    const updatePositions = (isLeftBtn) => {
        isLeftBtn
        ? loadCarouselSide({bound: 4, jump: -10}, isLeftBtn)
        : loadCarouselSide({bound: -1, jump: 10}, isLeftBtn)
        
        const posOfFirst = positions[0].position;
        let increment = 4;

        if (isLeftBtn) {
            increment = -5 < posOfFirst && posOfFirst < 0
                ? -posOfFirst
                : increment
        } else {
            increment = 0 < posOfFirst && posOfFirst < 4
                ? -posOfFirst
                : -increment
        }
        shiftItems(increment);
    }

    const handleArrowClick = (isLeftBtn) => {
        if (!btnDisabled) {
            updatePositions(isLeftBtn);
            setBtnDisabled(true)
            setTimeout(() => {
                setBtnDisabled(false)
                setLeftBtnHidden(false);
            }, 750)
        }
    }

    return (
        <Carousel leftBtnHidden={leftBtnHidden}>
            <PubLink publication={articlesData[0].publication}/>
            <List>
                <ArrowBtns>
                    <ArrowBtn btnHidden={leftBtnHidden} isLeftBtn={true} handleArrowClick={handleArrowClick}/>
                    <ArrowBtn btnHidden={false} isLeftBtn={false} handleArrowClick={handleArrowClick}/>
                </ArrowBtns>
                {items}
            </List>
        </Carousel>
    )
}

export default ProjectCarousel