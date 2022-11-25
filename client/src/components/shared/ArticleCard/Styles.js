import styled from 'styled-components'

import {fontSize, color, articleCardWidth} from 'util/styles'

export const ArticleCard = styled.div`
    display: flex;
    justify-content: space-between;
    height: auto;
    border: 1px solid ${color.darkPrimary};
    ${articleCardWidth}
`
export const Text = styled.div`
    height: 100%;
    padding: 1rem 1.25rem 1rem 1rem;
    min-width: 0;
    flex-grow: 1;
    
`
export const Thumbnail = styled.div`
    width: 30rem;
    background: blue;
    border-radius: 2.5%;
    margin: 0.5rem;
`
export const Credits = styled.div`
    margin-bottom: 0.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${fontSize.t}
    color: ${color.darkSecondary};
    font-weight: 500;
`

export const PubLogo = styled.div`
    margin-right: 0.4rem;
    border-radius: 10%;
    background: orange;
    height: 1.2rem;
    width: 1.2rem;
`

export const Author = styled.h6`
`

export const ConnectorWord = styled.h6`
    white-space: pre;
    font-weight: 400;
`
export const Pub = styled.h6`
`
export const Title = styled.h4`
    ${fontSize.m}
    line-height: 1.25;
    font-weight: 700;
    margin-bottom: 0.4rem;
    max-height: 3.25rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
`
export const Subtitle = styled.h5`
    margin-bottom: 1rem;
    line-height: 1.3;
    max-height: 2.6rem;
    color: ${color.medium};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 

`

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    ${fontSize.t}
    color: ${color.medium};
    align-items: center;
`
export const Date = styled.h6`
    margin-right: 1rem;
`
export const Claps = styled.h6`
    display: flex;
    align-items: center;
`
export const ClapsLogo = styled.div`
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 0.5px solid ${color.darkPrimary};
    margin-right: 0.4rem;
`