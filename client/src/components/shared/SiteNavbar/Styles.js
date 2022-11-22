import styled from 'styled-components'
import {fontSize} from 'util/styles'

export const Navbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    background: lightGrey;
    align-items: baseline;
`

export const Item = styled.div`
    margin-right: 2rem;
    ${props => props.logo ? fontSize.m : 'inherit'}
    font-weight: ${props => props.logo ? '600' : 'inherit'};
    padding: 0.5rem 0;
`