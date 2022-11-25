import styled from 'styled-components'
import {fontSize, sitePadding, carouselItemWidthExp} from 'util/styles'



export const Carousel = styled.div`
    margin-bottom: 2.5rem;
`

export const Title = styled.h2`
    ${fontSize.m}
    ${sitePadding}
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 0.3rem;
`

export const ArrowBtns = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`

export const List = styled.div`
    position: relative;
    ${sitePadding}
    white-space: nowrap;
    height: 12.35rem;
`

export const Item = styled.div`
    position: absolute;
    display: inline-block;
    left: calc(${props => props.position} * (${carouselItemWidthExp}) + 4rem);
    visibility: ${props => (props.visible) ? "visible" : "hidden"};
    margin-right: 1.5rem;
    ${props => props.btnDisabled ? "transition: left 0.75s;" : "" }
`

