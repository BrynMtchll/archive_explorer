import React from 'react'

import {ArticleCard, Text, Credits, PubLogo, Author, Pub, Title, Subtitle, Details, Date, ClapsLogo, Claps, Thumbnail, ConnectorWord} from './Styles'

const ProjectArticleCard = ({articleData}) => {
    return (
        <ArticleCard>
            <Text>
                <Credits>
                    <PubLogo/>
                    <Author>{articleData.author}</Author>
                    <ConnectorWord> In </ConnectorWord>
                    <Pub>{articleData.publication}</Pub>
                </Credits>
                <Title>{articleData.title}</Title>
                <Subtitle>{articleData.subtitle}</Subtitle>
                <Details>
                    <Date>{articleData.date}</Date>
                    <Claps><ClapsLogo/>{articleData.claps}</Claps>
                </Details>
            </Text>
            <Thumbnail/>
        </ArticleCard>
    )
}

export default ProjectArticleCard