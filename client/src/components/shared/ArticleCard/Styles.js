import styled from 'styled-components'

import {fontSize, color, article} from 'util/styles'

export const ArticleCard = styled.div`
    width: ${article.width};
`
export const Text = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 9rem;
    margin: 0 1rem;
    background: ${color.backgroundColorDarkSecondary};
    border-radius: ${article.borderRadius};
    height: ${article.height};
    color: ${color.lightPrimary};
    box-shadow: -1.2rem -0.5rem 0px -2px ${color.backgroundLightSecondary};
`
export const Thumbnail = styled.div`
    height: 10rem;
    border-radius: calc(${article.borderRadius} / 2);
    margin-left: 3rem;
    margin-top: -8rem;
    display: flex;
    overflow: hidden;
    border: 1px solid ${color.backgroundLightSecondary};
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
    max-height: 5.25rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; 
`
export const Subtitle = styled.h5`
    margin-bottom: 1rem;
    line-height: 1.3;
    max-height: 2.6rem;
    color: ${color.lightSecondary};
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
    color: ${color.lightSecondary};
    justify-self: flex-end;
    align-items: flex-end;
    flex-grow: 1;
`
export const Date = styled.h6`
    margin-right: 1rem;
    text-transform: uppercase;
    border-bottom: 0.5px solid ${color.lightSecondary};
    flex-grow: 1;

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