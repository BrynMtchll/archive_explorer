import React, {useState} from 'react'
import ArrowBtn from './ArrowBtn'
import ArticleCard from 'components/shared/ArticleCard'

import {Carousel, Title, ArrowBtns, List, Item} from './Styles'

const ProjectCarousel = () => {
    const initpositions = []
    for (let i = 0; i < 10; i++) initpositions.push({position: i, visible: true})
    
    const [positions, setPositions] = useState(initpositions);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [leftBtnHidden, setLeftBtnHidden] = useState(true);

    const items = positions.map((state, i) => (
        <Item btnDisabled={btnDisabled} key={i} visible={state.visible} position={state.position}><ArticleCard i={i}/></Item>
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
            <Title>Publication</Title>
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