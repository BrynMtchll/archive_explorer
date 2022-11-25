import styled from 'styled-components'
import {fontSize, sitePadding, color} from 'util/styles'

export const Navbar = styled.div`
    display: flex;
    justify-content: flex-start;
    background: ${color.lightSecondary};
    align-items: baseline;
    ${sitePadding}
`

export const Item = styled.div`
    width: auto;
    margin-right: 2rem;
    ${props => props.logo ? fontSize.m : ''}
    font-weight: ${props => props.logo ? '600' : '400'};
    padding: 0.75rem 0;
`