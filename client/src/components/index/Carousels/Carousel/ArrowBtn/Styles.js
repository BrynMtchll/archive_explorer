import styled from 'styled-components'

import {color} from 'util/styles'

export const Arrow = styled.div`
    position: relative;
    visibility: hidden;
    height: 100%;
    width: 100%;
    
    div {
        position: absolute;
        left: 35%;
        top: 50%;
        width: 2.25rem;
        height: 4px;
        background: white;
        border-radius: 4px;

        &:nth-child(1) {
            transform: rotateZ(-65deg);
            transform-origin: bottom left;
            top: 50.3%;
        }

        &:nth-child(2) {
            transform: rotateZ(65deg);
            transform-origin: top left;
        }
    }
`

export const ArrowBtn = styled.button`
    width: 3.25rem;
    height: 80%;
    backdrop-filter: brightness(70%) blur(0.5px);
    border-radius: 0 5px 5px 0;
    border-right: none;
    visibility: ${props => props.btnHidden ? "hidden" : "visible"};

    ${props => !props.isLeftBtn ? "transform: rotateZ(180deg);": ""}

    &:hover {
        backdrop-filter: brightness(55%) blur(0.5px);

        ${Arrow} {
            visibility: visible;
        }
    }
`