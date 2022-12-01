import styled from 'styled-components'
import {fontSize, sitePadding, color} from 'util/styles'

export const Navbar = styled.div`
    display: flex;
    justify-content: flex-start;
    border-bottom: 0.5px solid ${color.medium};
    align-items: baseline;
    padding: 0 ${sitePadding};
`

export const Item = styled.div`
    width: auto;
    margin-right: 2rem;
    ${props => props.logo ? fontSize.m : ''}
    font-weight: ${props => props.logo ? '600' : '400'};
    padding: 1.75rem 0;
`