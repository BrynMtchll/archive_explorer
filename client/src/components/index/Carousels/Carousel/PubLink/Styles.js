import styled from 'styled-components'

import {fontSize, color, sitePadding} from 'util/styles'

const arrow = {
    lineLength: '0.65',
    lineThickness: '0.18',
}

arrow.height = Math.sqrt(Math.pow(arrow.lineLength, 2)/2)*2
arrow.width = Math.sqrt(Math.pow(arrow.lineLength, 2)/2) + 0.2

const setArrowDimensions = ({scaleFactor}) => {
    for (let len in arrow) arrow[len] *= scaleFactor;
    return `
        height: ${arrow.height}rem;
        width: ${arrow.width}rem;

        div {
            width: ${arrow.lineLength}rem;
            height: ${arrow.lineThickness}rem;
        }
    `
}


export const LinkArrow = styled.div`
    position: relative;
    margin-left: 0.5rem;
    padding: 0 0.1rem;
    transition: margin-left 0.2s ease-out;

    ${setArrowDimensions({scaleFactor: 1})}

    div {
        position: absolute;
        background: ${color.highlight};

        &:nth-child(1) {
            transform: rotateZ(45deg);
            transform-origin: top left;
            top: -0.1px;
        }

        &:nth-child(2) {
            transform: rotateZ(-45deg);
            transform-origin: bottom left;
            bottom: 0;
        }
    }
`

export const LinkPrompt = styled.span`
    opacity: 0;
    width: 0;
    white-space: nowrap;
    transition: opacity 0.5s, margin-left 0.5s;
    ${fontSize.t}
    color: ${color.highlight};
`

export const PubLink = styled.div`
    position: relative;
    padding: 0 ${sitePadding};
    display: inline-flex;
    justify-content: flex-start;
    align-items: baseline;
    padding-right: 0;
    width: 21rem;

    &:hover {
        padding-right: 0;
        cursor: pointer;
        ${LinkArrow} {
            margin-left: 4.3rem;
            ${setArrowDimensions({scaleFactor: 0.6})}
            transition: margin-left 0.2s ease-in;

            div:nth-child(1) {
                top: 0.1px;
            }
        }
        
        ${LinkPrompt} {
            opacity: 1;
            margin-left: 0.8rem;
            transition: opacity 1s 0.1s, margin-left 0.4s 0.2s;
        }
    }
`

export const Pub = styled.h2`
    ${fontSize.l}
    text-transform: uppercase;
    font-weight: 500;
`
