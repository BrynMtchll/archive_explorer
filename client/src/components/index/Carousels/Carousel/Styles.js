import styled from 'styled-components'
import {fontSize, sitePadding, carousel, color, article} from 'util/styles'
import {ArrowBtn, Arrow} from './ArrowBtn/Styles'
import {LinkArrow} from './PubLink/Styles'



export const Carousel = styled.div`
    margin-bottom: 0rem;
    padding-top: 2rem;
    padding-bottom: 3rem;

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
    padding: 0 ${sitePadding};
    white-space: nowrap;
    height: calc(${article.height});
    margin-top: 1rem;

`

export const Item = styled.div`
    position: absolute;
    display: inline-block;
    left: calc(${props => props.position} * ${carousel.itemWidth} + ${sitePadding});
    visibility: ${props => (props.visible) ? "visible" : "hidden"};
    ${props => props.btnDisabled ? "transition: left 0.75s;" : "" }
`

