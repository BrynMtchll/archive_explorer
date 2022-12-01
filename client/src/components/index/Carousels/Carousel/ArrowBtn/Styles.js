import styled from 'styled-components'

import {color, article} from 'util/styles'

const arrow = {
    lineLength: '1.1',
    lineThickness: '0.2',
    scaleFactor: '1.25',
    angle: '65'
}

arrow.height = Math.sin(arrow.angle / 180 *Math.PI) * arrow.lineLength * 2 - 0.05
arrow.width = Math.cos(arrow.angle / 180 *Math.PI) * arrow.lineLength + 0.2

export const Arrow = styled.div`
    position: relative;
    height: ${arrow.height}rem;
    width: ${arrow.width}rem;
    padding: 0 0.2rem;
    transition: width 0.1s linear, height 0.1s linear;
    
    div {
        position: absolute;
        width: ${arrow.lineLength}rem;
        height: ${arrow.lineThickness}rem;
        background: white;
        border-radius: 4px;
        transition: width 0.1s linear, height 0.1s linear;

        &:nth-child(1) {
            transform: rotateZ(65deg);
            transform-origin: top left;
            top: 0;
        }

        &:nth-child(2) {
            transform: rotateZ(-65deg);
            transform-origin: bottom left;
            bottom: 0;
        }
    }
`

export const ArrowBtn = styled.button`
    width: 2.5rem;
    height: 100%;
    backdrop-filter: brightness(70%) blur(0.6px);
    border-radius: ${article.borderRadius} 0 0 ${article.borderRadius};
    border-right: none;
    visibility: ${props => props.btnHidden ? "hidden" : "visible"};
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: all;

    ${props => props.isLeftBtn ? "transform: rotateZ(180deg);": ""}

    &:hover {
        backdrop-filter: brightness(50%) blur(0.7px);
        cursor: pointer;

        ${Arrow} {
            width: calc(${arrow.width}rem * ${arrow.scaleFactor});
            height: calc(${arrow.height}rem * ${arrow.scaleFactor});
            div {
                width: calc(${arrow.lineLength}rem * ${arrow.scaleFactor});
                height: calc(${arrow.lineThickness}rem * ${arrow.scaleFactor});
            }
        }
    }
`