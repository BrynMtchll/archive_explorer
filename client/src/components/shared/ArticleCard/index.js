import React from 'react'

import {ArticleCard, Text, Credits, PubLogo, Author, Pub, Title, Subtitle, Details, Date, ClapsLogo, Claps, Thumbnail, ConnectorWord} from './Styles'

const ProjectArticleCard = ({i}) => {
    return (
        <ArticleCard>
            <Text>
                <Credits>
                    <PubLogo/>
                    <Author>Brynly Mitchell</Author>
                    <ConnectorWord> In </ConnectorWord>
                    <Pub>Brynly's House</Pub>
                </Credits>
                <Title>{i} How I became Brynly Mitchell by stealing his identity</Title>
                <Subtitle>I stole it and then I sold it to a fella from Brixton who fancied the comfort of his delicious yummy queen sized bed</Subtitle>
                <Details>
                    <Date>Jun 02, 2003</Date>
                    <Claps><ClapsLogo/> 50K</Claps>
                </Details>
            </Text>
            <Thumbnail/>
        </ArticleCard>
    )
}

export default ProjectArticleCard