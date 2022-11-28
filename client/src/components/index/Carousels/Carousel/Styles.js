import styled from 'styled-components'
import {fontSize, sitePadding, carouselItemWidthExp, color} from 'util/styles'
import {ArrowBtn, Arrow} from './ArrowBtn/Styles'
import {LinkArrow} from './PubLink/Styles'



export const Carousel = styled.div`
    margin-bottom: 2.5rem;
    
    ${LinkArrow} {
        visibility: hidden;
    }
    &:hover {
        ${LinkArrow} {
            visibility: visible;
        }
    }
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

    ${Arrow} {
        visibility: hidden;
    }

    &:hover {
        ${ArrowBtn} {
            &:nth-child(1) {
                ${Arrow} {
                    visibility: ${props => props.leftBtnHidden ? "hidden" : "visible"};
                }
            }
            &:nth-child(2) {
                ${Arrow} {
                    visibility: visible;
                }
            }
        }
    }
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

