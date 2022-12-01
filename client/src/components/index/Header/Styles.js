import styled from 'styled-components'

import {fontSize, color, sitePadding} from 'util/styles'

export const Header = styled.div`
    height: 25rem;
    padding: 0 ${sitePadding};
    padding-left: 15vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Text = styled.div`
    width: 60rem;
    padding: 4rem;
    padding-right: 25rem;
    border: 0.5px solid ${color.medium};
`

export const Title = styled.h2`
    ${fontSize.l}
    line-height: 1.3;
    font-weight: 500;
    border-bottom: 0;
`
export const Subtitle = styled.h4`
    ${fontSize.m}
    color: ${color.darkSecondary};
    line-height: 1.3;
`