import React, {useState} from 'react'
import ArrowBtn from './ArrowBtn'
import PubLink from './PubLink'
import ArticleCard from 'components/shared/ArticleCard'

import {Carousel, ArrowBtns, List, Item} from './Styles'

const ProjectCarousel = ({articlesData}) => {
    const initpositions = []
    for (let i = 0; i < 10; i++) initpositions.push({position: i, visible: true})
    
    const [positions, setPositions] = useState(initpositions);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [leftBtnHidden, setLeftBtnHidden] = useState(true);

    const items = articlesData.map((articleData, i) => (
        <Item btnDisabled={btnDisabled} key={articleData.id} visible={positions[i].visible} position={positions[i].position}><ArticleCard articleData={articleData}/></Item>
    ))

    const updatePositions = ({bound, increment, jump}, isLeftBtn) => {
        setPositions(
            positions.map(state => {
                if ((state.position > bound && isLeftBtn) || 
                    (state.position < bound && !isLeftBtn)) {
                    state.position += jump;
                    state.visible = false;
                }
                else state.position += increment;
                return state;
            })
        )

        // after positions have updated
        setTimeout(() => {
            setPositions(
                positions.map(state => {
                    state.visible = true;
                    return state;
                })
            )
        }, 750)
    }

    const handleArrowClick = (isLeftBtn) => {

        if (!btnDisabled) {
            isLeftBtn
            ? updatePositions({bound: 2, increment: 2, jump: -8}, isLeftBtn)
            : updatePositions({bound: -3, increment: -2, jump: 8}, isLeftBtn)

            setBtnDisabled(true)
            setTimeout(() => {
                setBtnDisabled(false)
                setLeftBtnHidden(false);
            }, 750)
        }
    }

    return (
        <Carousel>
            <PubLink publication={articlesData[0].publication}/>
            <List>
                <ArrowBtns leftBtnHidden={leftBtnHidden}>
                    <ArrowBtn btnHidden={leftBtnHidden} isLeftBtn={true} handleArrowClick={handleArrowClick}/>
                    <ArrowBtn btnHidden={false} isLeftBtn={false} handleArrowClick={handleArrowClick}/>
                </ArrowBtns>
                {items}
            </List>
        </Carousel>
    )
}

export default ProjectCarousel