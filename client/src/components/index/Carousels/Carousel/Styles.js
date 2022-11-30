import styled from 'styled-components'
import {fontSize, sitePadding, carouselItemWidthExp, color, articleCardHeight} from 'util/styles'
import {ArrowBtn, Arrow} from './ArrowBtn/Styles'
import {LinkArrow} from './PubLink/Styles'



export const Carousel = styled.div`
    margin-bottom: 2.5rem;
    // box-shadow: 0 0 5px 5px ${color.lightSecondary};
    // border: 1px solid ${color.medium};
    // background: #f2e9ea;
    padding-top: 2rem;
    // border: 1px solid black;
    
    ${LinkArrow} {
        visibility: hidden;
    }
    &:hover {
        ${LinkArrow} {
            visibility: visible;
        }
    }

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

export const ArrowBtns = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    pointer-events: none;
`

export const List = styled.div`
    position: relative;
    ${sitePadding}
    white-space: nowrap;
    height: calc(${articleCardHeight});
`

export const Item = styled.div`
    position: absolute;
    display: inline-block;
    left: calc(${props => props.position} * (${carouselItemWidthExp}) + 4rem);
    visibility: ${props => (props.visible) ? "visible" : "hidden"};
    ${props => props.btnDisabled ? "transition: left 0.75s;" : "" }
    top: -1px;

`

