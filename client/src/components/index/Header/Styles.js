import styled from 'styled-components'

import {fontSize, color} from 'util/styles'

export const Header = styled.div`
    height: 15rem;
    width: 100%;
    padding-left: 20vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h2`
    ${fontSize.l}
    line-heihgt: 1.3;
    margin-bottom: 0.7rem;
    font-weight: 500;
`
export const Subtitle = styled.h4`
    ${fontSize.m}
    color: ${color.darkSecondary};
    width: 40rem;
    line-height: 1.3;
`